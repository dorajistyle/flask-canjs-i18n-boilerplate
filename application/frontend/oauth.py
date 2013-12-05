# coding=UTF-8
"""
    application.frontend.oauth
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    flask-social oauth handler

"""


from importlib import import_module

from flask import Blueprint, current_app, redirect, request, session, \
     after_this_request, abort, url_for
from flask_security.utils import get_post_login_redirect, login_user
from flask.ext.security.decorators import anonymous_user_required
from werkzeug.local import LocalProxy
from application.helpers import make_external
from flask_social.signals import login_completed, login_failed
from flask_social.utils import get_provider_or_404, \
     get_connection_values_from_oauth_response
from application.services import users
from application.frontend import route

bp = Blueprint('oauth', __name__, url_prefix='/oauth')

# Convenient references
_security = LocalProxy(lambda: current_app.extensions['security'])

_social = LocalProxy(lambda: current_app.extensions['social'])

_datastore = LocalProxy(lambda: _social.datastore)

_logger = LocalProxy(lambda: current_app.logger)


def _commit(response=None):
    _datastore.commit()
    return response


def get_authorize_callback(endpoint, provider_id):
    """Get a qualified URL for the provider to return to upon authorization

    param: endpoint: Absolute path to append to the application's host
    """
    url = url_for(endpoint, provider_id=provider_id)
    return request.url_root[:-1] + url


@route(bp, '/login/<provider_id>', methods=['POST'])
@anonymous_user_required
def login(provider_id):
    """Starts the provider login OAuth flow"""
    provider = get_provider_or_404(provider_id)
    callback_url = get_authorize_callback('oauth.login', provider_id)
    post_login = request.form.get('next', get_post_login_redirect())
    session['post_oauth_login_url'] = post_login
    return provider.authorize(callback_url)

@anonymous_user_required
def login_handler(response, provider, query):
    """Shared method to handle the signin process"""
    connection = _datastore.find_connection(**query)
    if connection:
        after_this_request(_commit)
        user = connection.user
        login_user(user)
        key = _social.post_oauth_login_session_key
        redirect_url = session.pop(key, get_post_login_redirect())

        login_completed.send(current_app._get_current_object(),
                             provider=provider, user=user)

        return redirect(redirect_url)
    login_failed.send(current_app._get_current_object(),
                      provider=provider,
                      oauth_response=response)
    session['failed_login_connection'] = \
        get_connection_values_from_oauth_response(provider, response)
    next = make_external('/#!login/provider/'+provider.id)
    #next = get_url(_security.login_manager.login_view)
    #msg = '%s account not associated with an existing user' % provider.name
    #do_flash(msg, 'error')
    return redirect(next)


@route(bp, '/login/<provider_id>')
def login_callback(provider_id):
    try:
        provider = _social.providers[provider_id]
        module = import_module(provider.module)
    except KeyError:
        abort(404)

    def login(response):
        _logger.debug('Frontend Received login response from '
                      '%s: %s' % (provider.name, response))
        if response is None:
            _logger.debug('Access was denied to your %s '
                          'account' % provider.name, 'error')
            return _security.login_manager.unauthorized(), None

        query = dict(provider_user_id=module.get_provider_user_id(response),
                     provider_id=provider_id)
        return response, query
    response, query = provider.authorized_handler(login)()
    #for k in response:
    #    print('response('+k+") = "+response[k])
    #for k in query:
    #    print('query('+k+') = '+query[k])
    if query is None:
        return response
    return login_handler(response, provider, query)

