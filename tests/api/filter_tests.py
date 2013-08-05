# coding=UTF-8
"""
    tests.api.filter_tests
    ~~~~~~~~~~~~~~~~~~~~

    api filter tests module
"""

from . import ApplicationApiTestCase


class FilterApiTestCase(ApplicationApiTestCase):

    def test_filter_user_email(self):
        r = self.jget('/filters/user/email/'+self.user.email)
        self.assertOkJson(r)

    def test_filter_user_current(self):
        r = self.jget('/filters/user/current')
        self.assertOkJson(r)

