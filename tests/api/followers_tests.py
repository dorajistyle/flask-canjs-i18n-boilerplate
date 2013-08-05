# coding=UTF-8
"""
    tests.api.followers_tests
    ~~~~~~~~~~~~~~~~~~~~

    api followers tests module
"""

from . import ApplicationApiTestCase


class FollowersApiTestCase(ApplicationApiTestCase):

    def test_followers(self):
        r = self.xget('/followers', data='id='+str(self.user.id)+'&current_page=1')
        self.assertOkJson(r)

    def test_follow(self):
        r = self.xpost('/followers', data='id='+str(self.user2.id))
        self.assertOkJson(r)
        self.assertIn('"status": true', r.data)

    def test_unfollow(self):
        self.xpost('/followers', data='id='+str(self.user2.id))
        r = self.xdelete('/followers/'+str(self.user2.id))
        self.assertOkJson(r)
        self.assertIn('"status": true', r.data)

