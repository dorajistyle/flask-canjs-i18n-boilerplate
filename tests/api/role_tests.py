# coding=UTF-8
"""
    tests.api.filter_tests
    ~~~~~~~~~~~~~~~~~~~~

    api filter tests module
"""

from . import ApplicationApiTestCase


class RolesApiTestCase(ApplicationApiTestCase):

    def test_get_roles(self):
        r = self.jget('/roles')
        self.assertOkJson(r)

    def test_get_one_role(self):
        r = self.jget('/roles/'+str(self.role.id))
        self.assertOkJson(r)

    def test_create_role(self):
        r = self.xpost('/roles', data='name=testRole&description=testrole')
        self.assertOkJson(r)

    def test_update_role(self):
        r = self.xput('/roles/'+str(self.role.id), data='name=testRole&description=It is test role update.')
        self.assertOkJson(r)

    def test_delete_role(self):
        r = self.xdelete('/roles/'+str(self.role.id))
        self.assertOkJson(r)

