# coding=UTF-8
"""
    application.form.users
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    Form of users

"""

from flask_security.utils import verify_password
from wtforms import PasswordField
from wtforms.validators import Length, Email, Required, EqualTo
from flask_wtf.html5 import EmailField

from application.services import users
from application.form import Form


class RegistrationForm(Form):
    """The registration form"""

    registrationEmail = EmailField('registrationEmail', [Email()])
    registrationPassword = PasswordField('registrationPassword', [Length(8, 20)])

    def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)

    def validate(self):
        if not super(RegistrationForm, self).validate():
            return False
        if self.registrationEmail.data.strip() == '':
            return False
        if self.registrationPassword.data.strip() == '':
            return False
        return True


class UpdateForm(Form):
    """The update form"""


    def __init__(self, *args, **kwargs):
        super(UpdateForm, self).__init__(*args, **kwargs)

    def validate(self):
        if not super(UpdateForm, self).validate():
            return False
        return True

class UpdatePasswordForm(Form):
    """The update form"""

    email = EmailField('email')
    currentPassword = PasswordField('currentPassword', [Required()])
    newPassword = PasswordField('newPassword', [Required(), Length(8, 20), EqualTo('newPasswordConfirm')])
    newPasswordConfirm = PasswordField('newPasswordConfirm')

    def __init__(self, *args, **kwargs):
        super(UpdatePasswordForm, self).__init__(*args, **kwargs)

    def validate(self):

        if not super(UpdatePasswordForm, self).validate():
            return False
        if self.currentPassword.data.strip() == '':
            return False
        if self.newPassword.data.strip() == '':
            return False
        if self.newPasswordConfirm.data.strip() == '':
            return False
        self.user = users.first(email=self.email.data)
        if self.user is None:
            return False
        if not verify_password(self.currentPassword.data, self.user.password):
            return False
        return True