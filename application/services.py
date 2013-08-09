# coding=UTF-8
"""
    application.services
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    services module

"""
from application.user import UsersService, RoleService

#: An instance of the :class:`UsersService` class
roles = RoleService()
users = UsersService()
