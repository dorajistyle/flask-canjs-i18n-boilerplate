# coding=UTF-8
"""
    tests.api
    ~~~~~~~~~

    api tests package
"""

from application.api_v1 import create_app

from .. import ApplicationAppTestCase, settings


class ApplicationApiTestCase(ApplicationAppTestCase):

    def _create_app(self):
        return create_app(settings, register_security_blueprint=True)

    def setUp(self):
        super(ApplicationApiTestCase, self).setUp()
        self._login()
