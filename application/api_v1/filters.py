# coding=UTF-8
"""
    application.api_v1.filters
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    filters API module

"""
from flask import Blueprint
from application.api_v1 import route, login_required
from application.services import users
from flask_security import roles_accepted
bp = Blueprint('filters', __name__, url_prefix='/filters')


@route(bp, '/users/email/<email>', methods=['GET'])
@login_required
@roles_accepted('admin')
def filter_users_email(email):
    """
    Filter user by email for check exist user.
    :param email: valid email.
    :return: email that requested, status(True : user exist, False : user not exist)
    """
    user_list = users.filter_like_email(email)
    status = False
    if user_list:
        status = True
    return {'users': user_list}


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
    return {'user': user, 'email': email, 'status': status}


@route(bp, '/user/current', methods=['GET'])
def filter_user_current():
    """
    Returns current user or empty object.

    :return: user

    """
    if users.is_authenticated():
        return {'user': users.me(), 'has_admin': users.has_admin()}
    return {}