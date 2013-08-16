# coding=UTF-8
"""
    application.api_v1.users
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    users API module

"""
from flask import request, Blueprint
from flask_security.utils import encrypt_password, logout_user
from flask_security import roles_accepted
from application.api_v1 import route, login_required
from application.services import users, roles
from application.core import gravatar
from application.form.users import UpdateForm
from werkzeug.datastructures import MultiDict

bp = Blueprint('user_role', __name__, url_prefix='/user_role')

@route(bp, '', methods=['POST'])
@login_required
@roles_accepted('admin')
def add_role():
    """
    Add role to user.

    :return:
    """
    role = roles.find_or_create_role(request.values.get('role_name', ''))
    user = users.get_or_404(int(request.values.get('user_id', '')))
    if not users.add_role_to_user(user, role):
        return {}, 500
    return {}

@route(bp, '/<user_id>', methods=['PUT'])
@login_required
@roles_accepted('admin')
def remove_role(user_id):
    """
    Remove role to user.

    :return:
    """
    role = roles.get_or_404(int(request.values.get('role_id', None)))
    user = users.get_or_404(user_id)
    if not users.remove_role_from_user(user, role):
        return {}, 500
    return {}
