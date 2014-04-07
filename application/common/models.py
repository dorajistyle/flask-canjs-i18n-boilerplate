# coding=UTF-8
"""
    application.common.models
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    Models of module

"""

import datetime
from flask_security import current_user
from sqlalchemy.ext.hybrid import hybrid_property

from application.core import db
from application.helpers import JsonSerializer
from application.properties import COMMENT_SUB_PER_PAGE
from application.util.datetime import naturaltime

images_poll_items = db.Table('images_poll_items',
                             db.Column('poll_item_id', db.Integer, db.ForeignKey('poll_item.id', ondelete="CASCADE"), nullable=False),
                             db.Column('image_id', db.Integer, db.ForeignKey('image.id'), nullable=False))


from sqlalchemy.orm.interfaces import PropComparator
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import event
from sqlalchemy import literal_column


class ProxiedDictMixin(object):
    """Adds obj[key] access to a mapped class.

    This class basically proxies dictionary access to an attribute
    called ``_proxied``.  The class which inherits this class
    should have an attribute called ``_proxied`` which points to a dictionary.

    """

    def __len__(self):
        return len(self._proxied)

    def __iter__(self):
        return iter(self._proxied)

    def __getitem__(self, key):
        return self._proxied[key]

    def __contains__(self, key):
        return key in self._proxied

    def __setitem__(self, key, value):
        self._proxied[key] = value

    def __delitem__(self, key):
        del self._proxied[key]


class PolymorphicVerticalProperty(object):
    """A key/value pair with polymorphic value storage.

    The class which is mapped should indicate typing information
    within the "info" dictionary of mapped Column objects; see
    the AnimalFact mapping below for an example.

    """

    def __init__(self, key, value=None):
        self.key = key
        self.value = value

    @hybrid_property
    def value(self):
        fieldname, discriminator = self.type_map[self.type]
        if fieldname is None:
            return None
        else:
            return getattr(self, fieldname)

    @value.setter
    def value(self, value):
        py_type = type(value)
        fieldname, discriminator = self.type_map[py_type]

        self.type = discriminator
        if fieldname is not None:
            setattr(self, fieldname, value)

    @value.deleter
    def value(self):
        self._set_value(None)

    @value.comparator
    class value(PropComparator):
        """A comparator for .value, builds a polymorphic comparison via CASE.

        """
        def __init__(self, cls):
            self.cls = cls

        def _case(self):
            pairs = set(self.cls.type_map.values())
            whens = [
                (
                    literal_column("'%s'" % discriminator),
                    cast(getattr(self.cls, attribute), String)
                ) for attribute, discriminator in pairs
                if attribute is not None
            ]
            return case(whens, self.cls.type, null())
        def __eq__(self, other):
            return self._case() == cast(other, String)
        def __ne__(self, other):
            return self._case() != cast(other, String)

    def __repr__(self):
        return '<%s %r=%r>' % (self.__class__.__name__, self.key, self.value)

@event.listens_for(PolymorphicVerticalProperty, "mapper_configured", propagate=True)
def on_new_class(mapper, cls_):
    """Look for Column objects with type info in them, and work up
    a lookup table."""

    info_dict = {}
    info_dict[type(None)] = (None, 'none')
    info_dict['none'] = (None, 'none')

    for k in mapper.c.keys():
        col = mapper.c[k]
        if 'type' in col.info:
            python_type, discriminator = col.info['type']
            info_dict[python_type] = (k, discriminator)
            info_dict[discriminator] = (k, discriminator)
    cls_.type_map = info_dict


class ImageJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'large', 'medium', 'thumbnail', 'kind']


class TagJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'name']


class CommentJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'content', 'level', 'main_id', 'sub_list', 'username', 'thumbnail', 'date', 'is_own']


class PollJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'name', 'status', 'created_at', 'completed_at']


class PollItemJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'name', 'image']


class AddressBase(object):
    recipient_name = db.Column(db.String(90))
    phone_number = db.Column(db.String(45))
    zip = db.Column(db.String(45))
    address_line1 = db.Column(db.String(255))
    address_line2 = db.Column(db.String(255))


class Poll(PollJsonSerializer, db.Model):
    """Poll model
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    status = db.Column(db.SmallInteger, default=0)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)
    completed_at = db.Column(db.DateTime)


class PollItem(PollItemJsonSerializer, db.Model):
    """PollItem model
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    poll_id = db.Column(db.Integer, db.ForeignKey('poll.id'), nullable=False)
    images = db.relationship('Image', secondary=images_poll_items, lazy='dynamic',
                             backref=db.backref('poll_item', uselist=False), cascade="all, delete-orphan",
                             passive_deletes=True, single_parent=True)
    description = db.Column(db.Text)


class Image(ImageJsonSerializer, db.Model):
    """Image model
    kind [0 : main | 1 : sub_first | 2: sub_second | 3 : sub_third]
    """
    id = db.Column(db.Integer, primary_key=True)
    large = db.Column(db.String(512))
    medium = db.Column(db.String(512))
    thumbnail = db.Column(db.String(512))
    kind = db.Column(db.SmallInteger(), default=0)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)


class Tag(TagJsonSerializer, db.Model):
    """Tag model"""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)


class Comment(CommentJsonSerializer, db.Model):
    """Comment model"""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'), nullable=False)
    main_id = db.Column(db.Integer, db.ForeignKey('comment.id'))
    level = db.Column(db.SmallInteger, default=0)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)
    main = db.relationship('Comment', remote_side=[id], uselist=False,
                           backref=db.backref('subs', lazy='dynamic', cascade="all, delete-orphan", single_parent=True,
                                              order_by='desc(Comment.created_at)'))

    @hybrid_property
    def date(self):
        return naturaltime(self.created_at)

    def sub_paginate(self, current_page):
        subs = self.subs.paginate(current_page, COMMENT_SUB_PER_PAGE)
        return subs.items, subs.has_prev, subs.has_next

    @hybrid_property
    def sub_list(self):
        subs = []
        has_next = False
        has_prev = False
        if self.main_id is None:
            subs, has_prev, has_next = self.sub_paginate(1)
            return {'replies': subs, 'has_prev': has_prev, 'has_next': has_next, 'current_page': 1}
        else:
            return {}

    @hybrid_property
    def username(self):
        if self.user is not None:
            return self.user.username
        return ''

    @hybrid_property
    def thumbnail(self):
        if self.user is not None:
            return self.user.thumbnail
        return ''

    @hybrid_property
    def is_own(self):
        if current_user.is_authenticated():
            return self.user == current_user._get_current_object()
        return False
    #updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.now)