# coding=UTF-8
"""
    application.user.models
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    Models of user module

"""

from flask.ext.security import UserMixin, RoleMixin
from application.core import db
from application.helpers import JsonSerializer


roles_users = db.Table('roles_users',
                       db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
                       db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))

followers = db.Table('followers',
                     db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
                     db.Column('following_id', db.Integer, db.ForeignKey('user.id')))


class RoleJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'name', 'description']


class Role(RoleJsonSerializer, db.Model, RoleMixin):
    """Role model"""
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255), default='')


class UserJsonSerializer(JsonSerializer):
    __json_public__ = ['id', 'email', 'active']


class UserAdminJsonSerializer(JsonSerializer):
    """Json Serializer for admin user"""
    __json_public__ = ['id', 'email', 'active', 'roles']


class User(UserJsonSerializer, db.Model, UserMixin):
    """User model"""
    # __searchable__ = ['email']
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    last_login_at = db.Column(db.DateTime())
    current_login_at = db.Column(db.DateTime())
    last_login_ip = db.Column(db.String(100))
    current_login_ip = db.Column(db.String(100))
    login_count = db.Column(db.Integer)
    roles = db.relationship('Role', secondary=roles_users,
                            backref=db.backref('users', lazy='dynamic'))
    connections = db.relationship('Connection', lazy='dynamic',
                                  backref=db.backref('user'), cascade="all")
    following = db.relationship('User', secondary=followers, primaryjoin=(followers.c.follower_id == id),
                                secondaryjoin=(followers.c.following_id == id),
                                backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')


class UserAdmin(UserAdminJsonSerializer, User):
    """User with Roles model for admin"""


class Connection(db.Model):
    """Connection model"""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    provider_id = db.Column(db.String(255))
    provider_user_id = db.Column(db.String(255))
    access_token = db.Column(db.String(255))
    secret = db.Column(db.String(255))
    full_name = db.Column(db.String(255))
    display_name = db.Column(db.String(255))
    profile_url = db.Column(db.String(512))
    image_url = db.Column(db.String(512))
    rank = db.Column(db.Integer)

