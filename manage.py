# coding=UTF-8
"""
    manage
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    Manager module

"""

from flask_script import Manager

from application.api_v1 import create_app
from application.manage import InitUserCommand
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


manager = Manager(create_app())
manager.add_command('init_user', InitUserCommand())

if __name__ == "__main__":
    manager.run()