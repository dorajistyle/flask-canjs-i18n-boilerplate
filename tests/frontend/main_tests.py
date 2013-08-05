# coding=UTF-8
"""
    tests.api.user_tests
    ~~~~~~~~~~~~~~~~~~~~

    api user tests module
"""

from . import ApplicationFrontendTestCase


class MainTestCase(ApplicationFrontendTestCase):
#
    def test_authenticated_access(self):
        r = self.get('/')
        self.assertOk(r)
        self.assertIn('dorajistyle', r.data)
#
    def test_unauthenticated_access(self):
        self.get('/logout')
        r = self.get('/')
        self.assertOk(r)
