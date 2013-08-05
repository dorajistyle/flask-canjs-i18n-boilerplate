# coding=UTF-8
"""
    application.frontend.main
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    main frontend module

"""
from flask import Blueprint, render_template, jsonify, request, redirect
from flask_security import login_user
from flask_social.views import connect
from flask.ext.babel import refresh
from application.core import babel
from application.services import users
from application.frontend import route
from application.api_v1 import login_required

bp = Blueprint('main', __name__)


@route(bp, '/locales/<locale>', methods=['GET'])
def change_locales(locale):
    babel.app.config['BABEL_DEFAULT_LOCALE'] = locale
    refresh()
    return redirect('/', 302)


@route(bp, '/')
def index():
    """
    Returns the main page.

    :return:
    """
    return render_template('main.jade', lang=babel.app.config['BABEL_DEFAULT_LOCALE'])


@route(bp, '/users', methods=['POST'])
def registration():
    """
    Register user.

    :return:
    """
    if users.is_authenticated():
        return jsonify(), 400
    user = users.create_user(**request.form)
    if user:
        login_user(user)
    status = users.is_authenticated()
    email = users.me().email if status else ""
    return jsonify(status=status, email=email)


@route(bp, '/connections/facebook', methods=['GET'])
@login_required
def connect_to_facebook():
    """
    Connect to facebook.

    :return:
    """
    return connect('facebook')
