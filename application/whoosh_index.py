# coding=UTF-8
"""
    application.whoosh_index
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    generate whoosh index

"""

from application.flask_whooshalchemy import whoosh_index
from application.models import User
from application.core import db


def init_whoosh_index():
    whoosh_index(db.app, User)
