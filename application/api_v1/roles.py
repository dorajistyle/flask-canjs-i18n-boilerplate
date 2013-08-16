# coding=UTF-8
"""
    application.api_v1.roles
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    roles API module

"""
from flask import request, Blueprint
from flask_security import roles_accepted
from application.api_v1 import route, login_required
from application.services import roles
from application.form.roles import RoleForm
from werkzeug.datastructures import MultiDict

bp = Blueprint('roles', __name__, url_prefix='/roles')


@route(bp, '', methods=['GET'])
@login_required
@roles_accepted('admin')
def find_all():
    """
    Get All roles with pagination.

    :return: roles, has_next, has_prev, current_page
    """
    page = int(request.values.get('page', 1))
    role_items, has_prev, has_next = roles.paginate(page)
    return {'roles': role_items, 'has_prev': has_prev, 'has_next': has_next, 'current_page': page}


@route(bp, '/<role_id>', methods=['GET'])
@login_required
@roles_accepted('admin')
def find_one(role_id):
    """
    Get All roles with pagination.

    :return: roles, has_next, has_prev, current_page
    """
    role = roles.get_or_404(role_id)
    return {'role': role}

@route(bp, '', methods=['POST'])
@login_required
@roles_accepted('admin')
def create():
    """
    Create role.

    :return:
    """

    if request.form:
        form = RoleForm(MultiDict(request.form))
    else:
        form = RoleForm()

    if form.validate_on_submit():
        roles.create_role(**request.form)
    else:
        return {}, 500
    return {}

@route(bp, '/<role_id>', methods=['PUT'])
@login_required
@roles_accepted('admin')
def update(role_id):
    """
    Update role information.

    @login_required

    :param role_id:
    :return: role, password_incorrect, status
    """

    if request.form:
        form = RoleForm(MultiDict(request.form))
    else:
        form = RoleForm()

    role = roles.get_or_404(role_id)
    if form.validate_on_submit():
        roles.update_role(role, **request.form)
    else:
        return {}, 500

    return {'role': role}


@route(bp, '/<role_id>', methods=['DELETE'])
@login_required
@roles_accepted('admin')
def destroy(role_id):
    """
    Delete role.

    @login_required

    :param role_id:
    :return:
    """
    role = roles.get_or_404(role_id)
    if not roles.delete_role(role):
        return {}, 500
    return {}


