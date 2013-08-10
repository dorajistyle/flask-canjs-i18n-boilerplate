# coding=UTF-8
"""
    application.form.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    __init__ form module

"""

from flask_wtf import Form as BaseForm

from flask import current_app

class Form(BaseForm):
    def __init__(self, *args, **kwargs):
        if current_app.testing:
            self.TIME_LIMIT = None
        super(Form, self).__init__(*args, **kwargs)

