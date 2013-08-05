# coding=UTF-8
"""
    application.api_v1.connections
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    connections API module

"""
from flask import Blueprint, request
from flask_social.utils import get_provider_or_404

from application.api_v1 import route, login_required
from application.services import users


bp = Blueprint('connections', __name__, url_prefix='/connections')


@route(bp, '/facebook', methods=['POST'])
@login_required
def post_to_facebook():
    """
    Post a message to facebook.

    @login_required

    :return: status(True: when message sent success. | False: when message sent failed.)
    """
    provider = get_provider_or_404('facebook')
    api = provider.get_api()
    callback = api.put_object("me", "feed", message=request.form.get('content'))
    status = False
    if callback is not None:
        status = True
    return {'status': status}


@route(bp, '/facebook', methods=['DELETE'])
@login_required
def delete_facebook_connection():
    """
    Disconnect facebook connection.

    @login_required

    :return: status(True: when disconnection success. | False: when disconnection failed.)
    """
    status = users.remove_connections('facebook')
    return {'status': status}

@route(bp, '/facebook', methods=['GET'])
@login_required
def get_facebook_connection():
    """
    Get facebook connection.

    @login_required

    :return: has_facebkk_connection
    """
    return {'has_facebook_connection': users.has_facebook_connection()}