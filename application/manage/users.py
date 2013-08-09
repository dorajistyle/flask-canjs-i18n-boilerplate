# coding=UTF-8
"""
    application.manage.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    __init__ module of manage

"""

from flask_script import Command
from application.services import users, roles
from werkzeug.datastructures import MultiDict


class InitUserCommand(Command):
    """Init a admin user"""

    def run(self):
        kwargs = MultiDict(dict(name='admin', description='webmaster'))
        role = roles.create_role(**kwargs)
        kwargs = MultiDict(dict(registrationEmail='admin@github.com', registrationPassword='password'))
        user = users.create_user(**kwargs)
        if users.add_role_to_user(user, role):
            print 'admin@techstilus.com got admin role successfully.'
            return
        print 'Init user failed.'
