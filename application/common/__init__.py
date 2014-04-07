# coding=UTF-8
"""
    application.common.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    __init__ common module

"""

from application.core import Service, DictEncoder
from models import *


class TagsService(Service):
    __model__ = Tag

    def find_or_create(self, name, **kwargs):
        """
        Find or create
        :param name:
        :param kwargs:
        :return:
        """
        kwargs['name'] = name
        return self.first(name=name) or self.create(**kwargs)


class CommentsService(Service):
    __model__ = Comment




