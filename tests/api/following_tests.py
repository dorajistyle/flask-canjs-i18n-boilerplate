# coding=UTF-8
"""
    tests.api.following_tests
    ~~~~~~~~~~~~~~~~~~~~

    api following tests module
"""

from . import ApplicationApiTestCase


class FollowingApiTestCase(ApplicationApiTestCase):

    def test_following(self):
        r = self.xget('/following', data='id='+str(self.user.id)+'&current_page=1')
        self.assertOkJson(r)

