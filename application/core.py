# coding=UTF-8
"""
    application.core
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    core module

"""

from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security
from flask_social import Social
from flask.ext.babel import Babel
from flask.ext.gravatar import Gravatar
from flask_cache import Cache
from sqlalchemy_fulltext import FullTextSearch
import sqlalchemy_fulltext.modes as FulltextMode
from raven.contrib.flask import Sentry

#: Flask-SQLAlchemy extension instance
db = SQLAlchemy()

#: Flask-Mail extension instance
mail = Mail()

#: Flask-Security extension instance
security = Security()

#: Flask-Social extension instance
social = Social()

#: Flask-Babel extension instance
babel = Babel()

#: Flask-Gravatar extension instance
gravatar = Gravatar()

#: Flask-Cache extension instance
cache = Cache()

#: Sentry extension instance
sentry = Sentry()

class ApplicationError(Exception):
    """Base application error class."""

    def __init__(self, msg):
        self.msg = msg


class SocialLoginError(Exception):
    def __init__(self, provider):
        self.provider = provider


class DictEncoder():
    @staticmethod
    def encode(kwargs):
        encodedDict = {}
        for (k, v) in kwargs.iteritems():
            encodedDict[k] = str(v[0]).encode('utf-8')
        return encodedDict


class Service(object):
    """A :class:`Service` instance encapsulates common SQLAlchemy model
    operations in the context of a :class:`Flask` application.
    """
    __model__ = None

    def _isinstance(self, model, raise_error=True):
        """Checks if the specified model instance matches the service's model.
        By default this method will raise a `ValueError` if the model is not the
        expected type.

        :param model: the model instance to check
        :param raise_error: flag to raise an error on a mismatch
        """
        rv = isinstance(model, self.__model__)
        if not rv and raise_error:
            raise ValueError('%s is not of type %s' % (model, self.__model__))
        return rv

    def _preprocess_params(self, kwargs):
        """Returns a preprocessed dictionary of parameters. Used by default
        before creating a new instance or updating an existing instance.

        :param kwargs: a dictionary of parameters
        """
        kwargs.pop('csrf_token', None)
        return DictEncoder.encode(kwargs)


    def save(self, model):
        """Commits the model to the database and returns the model

        :param model: the model to save
        """
        self._isinstance(model)
        db.session.add(model)
        db.session.commit()
        return model

    def searched_paginate(self, page, per_page, text):
        paginated = self.__model__.query.filter(FullTextSearch(text, self.__model__, FulltextMode.BOOLEAN)).paginate(page, per_page, False)
        return paginated.items, paginated.has_prev, paginated.has_next

    def paginate(self, page, per_page):
        """Returns a paginate containing all instances of the service's model.
        """
        pagenated = self.__model__.query.paginate(page, per_page, False)
        return pagenated.items, pagenated.has_prev, pagenated.has_next

    def all(self):
        """Returns a generator containing all instances of the service's model.
        """
        return self.__model__.query.all()

    def get(self, id):
        """Returns an instance of the service's model with the specified id.
        Returns `None` if an instance with the specified id does not exist.

        :param id: the instance id
        """
        return self.__model__.query.get(id)

    def get_all(self, *ids):
        """Returns a list of instances of the service's model with the specified
        ids.

        :param *ids: instance ids
        """
        return self.__model__.query.filter(self.__model__.id.in_(ids)).all()

    def search(self, text, limit):
        """
        Fulltext Search models.
        :param text:
        :param limit:
        :return:
        """
        return self.__model__.query.filter(FullTextSearch(text, self.__model__))

    def find(self, **kwargs):
        """Returns a list of instances of the service's model filtered by the
        specified key word arguments.

        :param **kwargs: filter parameters
        """
        return self.__model__.query.filter_by(**kwargs)

    def first(self, **kwargs):
        """Returns the first instance found of the service's model filtered by
        the specified key word arguments.

        :param **kwargs: filter parameters
        """
        return self.find(**kwargs).first()

    def order_by(self, order):
        """Returns a list of instances of the service's model filtered by the
        specified order arguments.

        :param **kwargs: order parameters
        """
        return self.__model__.query.order_by(order)

    def get_or_404(self, id):
        """Returns an instance of the service's model with the specified id or
        raises an 404 error if an instance with the specified id does not exist.

        :param id: the instance id
        """
        return self.__model__.query.get_or_404(id)

    def new(self, **kwargs):
        """Returns a new, unsaved instance of the service's model class.

        :param **kwargs: instance parameters
        """
        return self.__model__(**self._preprocess_params(kwargs))

    def create(self, **kwargs):
        """Returns a new, saved instance of the service's model class.

        :param **kwargs: instance parameters
        """
        return self.save(self.new(**kwargs))

    def update(self, model, **kwargs):
        """Returns an updated instance of the service's model class.

        :param model: the model to update
        :param **kwargs: update parameters
        """
        self._isinstance(model)
        for k, v in self._preprocess_params(kwargs).items():
            setattr(model, k, v)
        self.save(model)
        return model

    def delete(self, model):
        """Immediately deletes the specified model instance.

        :param model: the model instance to delete
        """
        self._isinstance(model)
        db.session.delete(model)
        db.session.commit()
