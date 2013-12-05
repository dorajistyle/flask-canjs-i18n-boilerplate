# coding=UTF-8
"""
    application.form.roles
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    Form of roles

"""

from wtforms import TextField
from wtforms.validators import Required
from application.form import Form


class RoleForm(Form):
    """The role form"""
    name = TextField('name', [Required()])
    description = TextField('description')

    def __init__(self, *args, **kwargs):
        super(RoleForm, self).__init__(*args, **kwargs)

    def validate(self):
        if not super(RoleForm, self).validate():
            return False
        return True
