# coding=UTF-8
"""
    application.user.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    __init__ user module

"""

from flask_security.registerable import register_user
from flask_security import current_user, login_user, AnonymousUser

from application.core import Service, db, DictEncoder, security
from models import User, Connection, followers
from application.settings import USER_FOLLOWERS_PER_PAGE, USER_FOLLOWING_PER_PAGE, USER_PER_PAGE

class ConnectionService(Service):
    __model__ = Connection


class UsersService(Service):
    __model__ = User

    def __init__(self, *args, **kwargs):
        super(UsersService, self).__init__(*args, **kwargs)
        self.connections = ConnectionService()

    def _preprocess_params(self, kwargs):
        kwargs = super(UsersService, self)._preprocess_params(kwargs)
        connections = kwargs.get('connections', [])
        if connections and all(isinstance(c, int) for c in connections):
            kwargs['connections'] = self.connections.get_all(*connections)
        return kwargs

    def me(self):
        """
        Return current user object.

        :return: user
        """
        return current_user._get_current_object()

    def remove_connections(self, provider_id):
        """
        Remove social connections (Disconnection)
        :param provider_id:
        :return:
        """
        me = self.me()
        connections = me.connections.filter_by(provider_id=provider_id)
        for c in connections:
            self.connections.delete(c)
        return True

    def create_user(self, **kwargs):
        """
        Create a new user. (Registration)
        :param kwargs:
        :return:
        """
        kwargs = DictEncoder.encode(kwargs)
        kwargs['email'] = kwargs.pop('registrationEmail')
        kwargs['password'] = kwargs.pop('registrationPassword')
        # for k in kwargs:
        #     print(k)
        user = register_user(**kwargs)
        db.session.commit()
        return user

    def delete_user(self, user):
        """
        Delete a user.
        :param user:
        :return:
        """
        if current_user._get_current_object() is user:
            security.datastore.delete_user(user)
            db.session.commit()
        return True

    def login_user(self, user, remember):
        """
        Login user
        :param user:
        :param remember:
        :return:
        """
        login_user(user, remember=remember)
        db.session.commit()
        return True

    def is_current(self, user):
        """
        Check user is current user.
        :param user:
        :return:
        """
        me = self.me()
        return user is me

    def is_anonymous(self):
        """
        Check current user is anonymous.

        :return:
        """
        me = self.me()
        if isinstance(me, AnonymousUser):
            return True
        return False

    def is_authenticated(self):
        """
        Check user is authenticated.

        :return:
        """
        return current_user.is_authenticated()

    def paginate(self, page):
        """
        Get users with pagination.
        :param page:
        :return:
        """
        users_page = self.__model__.query.paginate(page, USER_PER_PAGE, False)
        return users_page.items, users_page.has_next, users_page.has_prev

    def is_following(self, user):
        """
        Check current user is following target user.
        :param user:
        :return:
        """
        me = self.me()
        if not self.is_authenticated():
            return False
        return me.following.filter(followers.c.following_id == user.id).count() > 0

    def followers_count(self, user):
        """
        Get followers count.
        :param user:
        :return:
        """
        return user.followers.count()

    def followers(self, user, page):
        """
        Get followers with pagination.
        :param user:
        :param page:
        :return:
        """
        followers_page = user.followers.paginate(page, USER_FOLLOWERS_PER_PAGE)
        return followers_page.items, followers_page.has_next

    def following_count(self, user):
        """
        Get following count.
        :param user:
        :return:
        """
        return user.following.count()

    def following(self, user, page):
        """
        Get following with pagination.
        :param user:
        :param page:
        :return:
        """
        following_page = user.following.paginate(page, USER_FOLLOWING_PER_PAGE)
        return following_page.items, following_page.has_next

    def follow(self, user):
        """
        Current user follow target user.
        :param user:
        :return:
        """
        me = self.me()
        if not self.is_following(user):
            me.following.append(user)
            db.session.commit()
            return True
        return False

    def unfollow(self, user):
        """
        Current user unfollow target user.
        :param user:
        :return:
        """
        me = self.me()
        if self.is_following(user):
            me.following.remove(user)
            db.session.commit()
            return True
        return False

    def has_facebook_connection(self):
        """
        Check current user has facebook connection.

        :return:
        """
        connections = self.me().connections.all()
        for c in connections:
            if (c.provider_id == 'facebook'):
                return True
        return False




