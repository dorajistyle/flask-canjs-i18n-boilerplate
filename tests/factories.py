# coding=UTF-8
"""
    tests.factories
    ~~~~~~~~~~~~~~~

    Application test factories module
"""

from datetime import datetime

from factory import Factory, Sequence, LazyAttribute
from flask_security.utils import encrypt_password

from application.core import db
from application.models import *


def create_sqlalchemy_model_function(class_to_create, *args, **kwargs):
    entity = class_to_create(*args, **kwargs)
    db.session.add(entity)
    db.session.commit()
    return entity


class RoleFactory(Factory):
    FACTORY_FOR = Role
    name = Sequence(lambda n: 'admin{0}'.format(n))
    description = 'Administrator'

    @classmethod
    def _create(cls, target_class, *args, **kwargs):
        return create_sqlalchemy_model_function(target_class, *args, **kwargs)


class UserFactory(Factory):
    FACTORY_FOR = User
    id = Sequence(lambda n: '{0}'.format(n))
    email = Sequence(lambda n: 'user{0}@application.com'.format(n))
    password = LazyAttribute(lambda a: encrypt_password('password'))
    last_login_at = datetime.utcnow()
    current_login_at = datetime.utcnow()
    last_login_ip = '127.0.0.1'
    current_login_ip = '127.0.0.1'
    login_count = 1
    roles = LazyAttribute(lambda _: [RoleFactory()])
    active = True

    @classmethod
    def _create(cls, target_class, *args, **kwargs):
        return create_sqlalchemy_model_function(target_class, *args, **kwargs)
