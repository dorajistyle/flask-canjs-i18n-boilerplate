# coding=UTF-8
"""
    tests.factory.fixtures
    ~~~~~~~~~

    api factory fixtures
"""
from .user_factories import UserFactory, RoleFactory


def user_fixtures(cls):
    cls.role = RoleFactory()
    cls.user = UserFactory(roles=[RoleFactory(name='admin')])
    cls.user2 = UserFactory()

