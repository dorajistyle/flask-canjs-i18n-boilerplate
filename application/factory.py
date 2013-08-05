# coding=UTF-8
"""
    application.factory
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    factory module

"""

import os

from celery import Celery
from flask import Flask
from flask_security import SQLAlchemyUserDatastore
from flask_social import SQLAlchemyConnectionDatastore
from werkzeug.contrib.fixers import ProxyFix
from flask_debugtoolbar import DebugToolbarExtension

from core import db, mail, security, social, babel, gravatar
from helpers import register_blueprints
from middleware import HTTPMethodOverrideMiddleware
from models import User, Role, Connection


def create_app(package_name, package_path, settings_override=None,
               register_security_blueprint=True):
    """Returns a :class:`Flask` application instance configured with common
    functionality for the Application platform.

    :param package_name: application package name
    :param package_path: application package path
    :param settings_override: a dictionary of settings to override
    :param register_security_blueprint: flag to specify if the Flask-Security
                                        Blueprint should be registered. Defaults
                                        to `True`.
    """

    app = Flask(package_name, instance_relative_config=True)
    app.config.from_object('application.settings')
    app.config.from_pyfile('settings.cfg', silent=True)
    app.config.from_object(settings_override)
    db.init_app(app)
    mail.init_app(app)
    babel.init_app(app)
    DebugToolbarExtension(app)
    user_datastore = SQLAlchemyUserDatastore(db, User, Role)
    security.datastore = user_datastore
    security.init_app(app, user_datastore,
                      register_blueprint=register_security_blueprint)
    social.init_app(app, SQLAlchemyConnectionDatastore(db, Connection))
    gravatar.__init__(app, size=128, rating='g', default='mm', force_default=False,
                      force_lower=False, use_ssl=False)
    register_blueprints(app, package_name, package_path)
    app.wsgi_app = ProxyFix(HTTPMethodOverrideMiddleware(app.wsgi_app))

    if not app.debug:
        import logging
        from logging.handlers import RotatingFileHandler
        file_handler = RotatingFileHandler('logs/errors.log', maxBytes=1024 * 1024 * 100, backupCount=20)
        file_handler.setLevel(logging.WARNING)
        formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
        file_handler.setFormatter(formatter)
        app.logger.addHandler(file_handler)

    return app


def create_celery_app(app=None):
    app = app or create_app('application', os.path.dirname(__file__))
    celery = Celery(__name__, broker=app.config['CELERY_BROKER_URL'])
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
    return celery
