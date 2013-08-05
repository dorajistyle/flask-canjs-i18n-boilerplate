# coding=UTF-8
"""
    application.api_v1.users
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    users API module

"""
from flask import request, Blueprint
from flask_security.utils import encrypt_password, verify_password, logout_user
from application.api_v1 import route, login_required
from application.services import users
from application.core import gravatar

bp = Blueprint('users', __name__, url_prefix='/users')


@route(bp, '/<user_id>', methods=['GET'])
def find_one(user_id):
    """
    Get one user by user's id.
    :param user_id: user's id(INT)
    :return: user, is_current, is_following, followers_cnt, following_cnt
    """
    user = users.get_or_404(user_id)
    return {'user': user, "is_current": users.is_current(user), "is_following": users.is_following(user),
            "followers_cnt": users.followers_count(user), "following_cnt": users.following_count(user),
            "gravatar": gravatar.__call__(user.email)}


@route(bp, '', methods=['GET'])
def find_all():
    """
    Get All users with pagination.

    :return: users, has_next, has_prev, current_page
    """
    current_page = int(request.values.get('current_page', 1))
    user_items, has_next, has_prev = users.paginate(current_page)
    return {'users': user_items, 'has_next': has_next, 'has_prev': has_prev, 'current_page': current_page}


@route(bp, '/<user_id>', methods=['PUT'])
@login_required
def update(user_id):
    """
    Update user information.

    @login_required

    :param user_id:
    :return: user, password_incorrect, status
    """
    user = users.get_or_404(user_id)
    password_incorrect = False
    status = False
    if verify_password(request.form.get('currentPassword'), user.password):
        user.password = encrypt_password(request.form.get('newPassword'))
        users.save(user)
        status = True
    else:
        password_incorrect = True
    return {'user': user, 'password_incorrect': password_incorrect, 'status': status}


@route(bp, '/<user_id>', methods=['DELETE'])
@login_required
def destroy(user_id):
    """
    Delete user.

    @login_required

    :param user_id:
    :return:
    """
    user = users.get_or_404(user_id)
    users.delete_user(user)
    logout_user()
    return {}


