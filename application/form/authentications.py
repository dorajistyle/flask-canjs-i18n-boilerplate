# coding=UTF-8
"""
    application.form.authentications
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    Form of authentications

"""

from flask_security.utils import verify_password
from wtforms import PasswordField, BooleanField
from wtforms.validators import Email, Length
from flask_wtf.html5 import EmailField

from application.services import users
from application.form import Form


class LoginForm(Form):
    """The login form"""

    rememberMe = BooleanField('rememberMe')
    loginEmail = EmailField('loginEmail', [Email()])
    loginPassword = PasswordField('loginPassword', [Length(8, 20)])

    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)

    def validate(self):
        if not super(LoginForm, self).validate():
            self.errors[0] = 'login.failed'
            return False
        if self.loginEmail.data.strip() == '':
            return False
        if self.loginPassword.data.strip() == '':
            return False
        self.user = users.first(email=self.loginEmail.data)
        if self.user is None:
            self.errors[0] = 'login.userNotFound'
            return False
        if not verify_password(self.loginPassword.data, self.user.password):
            self.errors[0] = 'login.passwordIncorrect'
            return False
        if not self.user.is_active():
            self.errors[0] = 'login.userDisabled'
            return False
        self.errors[0] = 'login.welcome'
        return True