# coding=UTF-8
"""
    application.api_v1.authentications
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    authentications API module

"""

from flask_security import logout_user
from flask import request, Blueprint
from flask_security.utils import verify_password

from application.api_v1 import route, login_required
from application.services import users


bp = Blueprint('authentications', __name__, url_prefix='/authentications')


@route(bp, '', methods=['GET'])
@login_required
def is_authenticated():
    """
    Get an authenticated status.

    @login_required

    :return:
    """
    return {}


@route(bp, '', methods=['POST'])
def login():
    """
    Login user.

    :return: status(True : Login Success | False : Login Failed)
        email(user's email when status is True.)
    """
    if users.is_authenticated():
        return {}, 400
    user = users.first(email=request.form.get('loginEmail'), active=1)
    if user and verify_password(request.form.get('loginPassword'), user.password):
        remember = True if request.form.get('rememberMe') else False
        users.login_user(user, remember)
    status = users.is_authenticated()
    email = users.me().email if status else ""
    # print(verify_password(request.form.get('loginPassword'), user.password))
    # for h in request.headers:
    #     print(h)
    # for k in request.form:
    #     print(k)
    return {'email': email}


@route(bp, '', methods=['DELETE'])
@login_required
def logout():
    """
    Logout user.

    @login_required

    :return:
    """
    logout_user()
    return {}