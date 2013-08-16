# coding=UTF-8
"""
    tests.api.filter_tests
    ~~~~~~~~~~~~~~~~~~~~

    api filter tests module
"""

from . import ApplicationApiTestCase


class UserRoleApiTestCase(ApplicationApiTestCase):

    # def test_create_user_role(self):
    #     r = self.xpost('/user_role', data='role_name=testRole&user_id'+str(self.user.id))
    #     # self.assertOkJson(r)

    def test_delete_user_role(self):
        self.user2.roles.append(self.role)
        r = self.xput('/user_role/'+str(self.user2.id), data='role_id='+str(self.role.id))
        self.assertOkJson(r)


