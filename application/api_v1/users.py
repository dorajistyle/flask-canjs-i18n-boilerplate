# coding=UTF-8
"""
    application.api_v1.users
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    users API module

"""
from flask import request, Blueprint, after_this_request, current_app
from flask_security.utils import encrypt_password, logout_user
from flask_security import roles_accepted
from application.api_v1 import route, login_required
from application.properties import USER_PER_PAGE
from application.services import users
from application.core import gravatar
from application.form.users import UpdateForm, UpdatePasswordForm
from werkzeug.datastructures import MultiDict

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


@route(bp, '/admin/<user_id>', methods=['GET'])
def find_one_for_admin(user_id):
    """
    Get one user with roles by user's id for admin.
    :param user_id: user's id(INT)
    :return: user, is_current, is_following, followers_cnt, following_cnt
    """

    user = users.users_admin.get_or_404(user_id)
    return {'user': user, "is_current": users.is_current(user), "is_following": users.is_following(user),
            "followers_cnt": users.followers_count(user), "following_cnt": users.following_count(user),
            "gravatar": gravatar.__call__(user.email)}

@route(bp, '/current', methods=['GET'])
def find_user_current():
    """
    Returns current user or empty object.
    :return: user
    """
    if users.is_authenticated():
        return {'user': users.me(), 'has_admin': users.has_admin()}
    return {}


@route(bp, '/email/<email>', methods=['GET'])
def find_one_by_email(email):
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


@route(bp, '', methods=['GET'])
def find_all():
    """
    Get All users with pagination.

    :return: users, has_next, has_prev, current_page
    """
    page = int(request.values.get('page', 1))
    user_items, has_prev, has_next = users.paginate(page)

    return {'users': user_items, 'has_prev': has_prev, 'has_next': has_next, 'current_page': page}


@route(bp, '/admin', methods=['GET'])
def find_all_for_admin():
    """
    Get All users with pagination for admin.

    :return: users, has_next, has_prev, current_page
    """
    page = int(request.values.get('page', 1))
    user_items, has_prev, has_next = users.users_admin.paginate(page, USER_PER_PAGE)

    return {'users': user_items, 'has_prev': has_prev, 'has_next': has_next, 'current_page': page}


@route(bp, '/list/email/<email>', methods=['GET'])
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


@route(bp, '/<user_id>', methods=['PUT'])
@login_required
def update(user_id):
    """
    Update user information.
    @login_required

    :param user_id:
    :return: user, password_incorrect, status
    """

    if request.form:
        if request.form.get('newPassword') is not None:
            form = UpdatePasswordForm(MultiDict(request.form))
        else:
            form = UpdateForm(MultiDict(request.form))
    else:
        form = UpdateForm()
    user = users.get_or_404(user_id)
    if users.has_admin() or users.user_equals_me(user):
        password_incorrect = False
        if form.validate_on_submit():
            if isinstance(form, UpdatePasswordForm):
                user.password = encrypt_password(request.form.get('newPassword'))
            # user.active = request.form.get('active')
            users.update(user, **request.form)
        else:
            password_incorrect = True
        return {'user': user, 'password_incorrect': password_incorrect}
    else:
        return {}, 401


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
    if users.user_equals_me(user):
        users.delete_user(user)
        if not current_app.testing:
            logout_user()
        return {}
    if users.has_admin():
        users.delete_user(user)
        return {}
    else:
        return {}, 401

