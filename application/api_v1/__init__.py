# coding=UTF-8
"""
    application.api_v1.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    __init__ API module

"""

from functools import wraps

from flask import jsonify
from flask_security import current_user

from application import factory
from application.helpers import JSONEncoder
from application.core import ApplicationError


def create_app(settings_override=None, register_security_blueprint=False):
    """Returns the Service API application instance
    :param settings_override:
    :param register_security_blueprint:
    """

    app = factory.create_app(__name__, __path__, settings_override,
                             register_security_blueprint=register_security_blueprint)

    # Set the default JSON encoder
    app.json_encoder = JSONEncoder

    # Register custom error handlers
    app.errorhandler(ApplicationError)(on_application_error)
    app.errorhandler(404)(on_404)
    return app


def route(bp, *args, **kwargs):
    """
    A decorator that jsonify response as default.
    :param bp: blueprint
    :param args:
    :param kwargs:
    :return:
    """
    kwargs.setdefault('strict_slashes', False)

    def decorator(f):
        @bp.route(*args, **kwargs)
        @wraps(f)
        def wrapper(*args, **kwargs):
            sc = 200
            rv = f(*args, **kwargs)
            if isinstance(rv, tuple):
                sc = rv[1]
                rv = rv[0]
            return jsonify(dict(rv)), sc

        return f

    return decorator


def on_application_error(e):
    """
    An application error handler
    :param e:
    :return:
    """
    return jsonify(dict(error=e.msg)), 400


def on_error(e):
    """
    An error handler
    :param e:
    :return:
    """
    return jsonify(dict(error=e.msg)), 400


def on_404(e):
    """
    A 404 error handler.
    :param e:
    :return:
    """
    return jsonify(dict(error='Not found')), 404


def login_required(f):
    """
    A decorator return is authenticated.
    :param f:
    :return:
    """

    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not current_user.is_authenticated():
            return {}, 401
        return f(*args, **kwargs)

    return decorated_function
