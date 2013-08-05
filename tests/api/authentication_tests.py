# coding=UTF-8
"""
    tests.api.authentication_tests
    ~~~~~~~~~~~~~~~~~~~~

    api authentication tests module
"""

from . import ApplicationApiTestCase


class AuthenticationApiTestCase(ApplicationApiTestCase):

    def test_get_authentication(self):
        r = self.jget('/authentications')
        self.assertOkJson(r)

    def test_login(self):
        self._logout()
        r = self.xpost('/authentications', data='loginEmail='+self.user.email+'&loginPassword=password')
        self.assertOkJson(r)

    def test_logout(self):
        r = self.jdelete('/authentications')
        self.assertOkJson(r)