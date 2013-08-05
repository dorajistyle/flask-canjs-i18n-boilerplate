# coding=UTF-8
"""
    application.api_v1.filters
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    filters API module

"""
from flask import Blueprint
from application.api_v1 import route
from application.services import users

bp = Blueprint('filters', __name__, url_prefix='/filters')


@route(bp, '/user/email/<email>', methods=['GET'])
def filter_user_email(email):
    """
    Filter user by email for check exist user.
    :param email: valid email.
    :return: email that requested, status(True : user exist, False : user not exist)
    """
    user = users.first(email=email)
    status = False
    if user:
        status = True
    return {'email': email, 'status': status}


@route(bp, '/user/current', methods=['GET'])
def filter_user_current():
    """
    Returns current user or empty object.

    :return: user

    """
    if users.is_authenticated():
        return {'user': users.me()}
    return {}