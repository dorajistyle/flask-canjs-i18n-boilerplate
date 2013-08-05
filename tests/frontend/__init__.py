# coding=UTF-8
"""
    tests.frontend
    ~~~~~~~~~~~~~~

    frontend tests package
"""

from application.frontend import create_app

from .. import ApplicationAppTestCase, settings


class ApplicationFrontendTestCase(ApplicationAppTestCase):

    def _create_app(self):
        return create_app(settings)

    def setUp(self):
        super(ApplicationFrontendTestCase, self).setUp()
        self._login()
