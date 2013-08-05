# coding=UTF-8
"""
    tests
    ~~~~~

    tests package
"""

from unittest import TestCase

from application.core import db

from .factories import UserFactory, RoleFactory
from .utils import FlaskTestCaseMixin


class ApplicationTestCase(TestCase):
    pass


class ApplicationAppTestCase(FlaskTestCaseMixin, ApplicationTestCase):

    def _create_app(self):
        raise NotImplementedError

    def _create_fixtures(self):
        self.role = RoleFactory()
        self.user = UserFactory()
        self.user2 = UserFactory()

    def setUp(self):
        super(ApplicationAppTestCase, self).setUp()
        self.app = self._create_app()
        self.client = self.app.test_client()
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()
        self._create_fixtures()
        self._create_csrf_token()

    def tearDown(self):
        super(ApplicationAppTestCase, self).tearDown()
        db.drop_all()
        self.app_context.pop()

    def _login(self, email=None, password=None):
        with self.client.session_transaction() as session:
            session['user_id'] = '1'
            session['_fresh'] = True
        email = email or self.user.email
        password = password or 'password'
        return self.xpost('/authentications', data='loginEmail='+email+'&loginPassword='+password)

    def _logout(self):
        with self.client.session_transaction() as session:
            session['user_id'] = '1'
            session['_fresh'] = True
        return self.jdelete('/authentications')
