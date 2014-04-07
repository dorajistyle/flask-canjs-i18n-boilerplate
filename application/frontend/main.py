# coding=UTF-8
"""
    application.frontend.main
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    main frontend module

"""
from flask import Blueprint, render_template, jsonify, request, redirect, current_app, session
from flask_security import login_user
from flask_social.views import connect, connect_handler
from flask.ext.babel import refresh
from application.core import babel, cache
from application.services import users
from application.frontend import route
from application.api_v1 import login_required
from application.form.users import RegistrationForm
from werkzeug.datastructures import MultiDict
from flask_social.utils import get_provider_or_404
from datetime import datetime
from application.properties import STATIC_GUID

bp = Blueprint('main', __name__)


@route(bp, '/locales/<locale>', methods=['GET'])
def change_locales(locale):
    babel.app.config['BABEL_DEFAULT_LOCALE'] = locale
    refresh()
    return redirect('/', 302)

def get_this_year():
    return datetime.now().year

# @cache.cached(timeout=86400, key_prefix='content')
def get_content():
    current_app.logger.debug("get contents called")
    return render_template('main.jade', lang=babel.app.config['BABEL_DEFAULT_LOCALE'], this_year=get_this_year(), static_guid=STATIC_GUID)

@route(bp, '/')
def index():
    """
    Returns the main page.

    :return:
    """
    return get_content()

@route(bp, '/users', methods=['POST'])
def registration():
    """
    Register user.

    :return:
    """
    provider_id = request.form.get('provider_id', None)
    data = request.form
    data = MultiDict()
    for k in request.form:
        data.add(k, request.form.get(k, None))
    print("provider_id : "+str(provider_id))
    if provider_id:
        data.pop('provider_id')
        provider = get_provider_or_404(provider_id)
        connection_values = session.get('failed_login_connection', None)
    else:
        provider = None
        connection_values = None
    if data:
        form = RegistrationForm(MultiDict(data))
    else:
        form = RegistrationForm()

    if users.is_authenticated():
        return jsonify(), 400

    if form.validate_on_submit():
        user = users.create_user(**data)
        # See if there was an attempted social login prior to registering
        # and if so use the provider connect_handler to save a connection
        connection_values = session.pop('failed_login_connection', None)
        if connection_values and provider_id:
            connection_values['user_id'] = user.id
            connect_handler(connection_values, provider)
        if user:
            login_user(user)
    status = users.is_authenticated()
    email = users.me().email if status else ""
    return jsonify(status=status, email=email)

#@route(bp, '/users', methods=['POST'])
#def registration():
#    """
#    Register user.
#
#    :return:
#    """
#
#    if request.form:
#        form = RegistrationForm(MultiDict(request.form))
#    else:
#        form = RegistrationForm()
#
#    if users.is_authenticated():
#        return jsonify(), 400
#
#    if form.validate_on_submit():
#        user = users.create_user(**request.form)
#        if user:
#            login_user(user)
#    status = users.is_authenticated()
#    email = users.me().email if status else ""
#    return jsonify(status=status, email=email)


@route(bp, '/connections/facebook', methods=['GET'])
@login_required
def connect_to_facebook():
    """
    Connect to facebook.

    :return:
    """
    return connect('facebook')
