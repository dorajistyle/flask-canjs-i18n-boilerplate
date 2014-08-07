# coding=UTF-8
"""
    application.settings
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    settings module
    It contains setting for flask and extensions.

"""
import os
from datetime import timedelta
from application.babel_helper import _
from application.config.debug_flag import DEBUG
from application.config.database import *
from application.config.celery import *
from application.config.flask_cache import *
from application.config.sentry import *
from application.config.flask_mail import *
from application.config.flask_social import *

_basedir = os.path.abspath(os.path.dirname(__file__))

# Flask-WTF
#CSRF_ENABLED = False
WTF_CSRF_ENABLED = False

# Flask-Babel
BABEL_DEFAULT_LOCALE = 'ko'

# Database & Session Control
SECRET_KEY = 'dorajistyle-flask-canjs-i18n-boilerplate-is-the-grand'
#SECRET_KEY = os.urandom(24)
#PERMANENT_SESSION_LIFETIME = timedelta(seconds=10)
#session.permanent = True

PERMANENT_SESSION_LIFETIME = timedelta(days=1000)
if DEBUG:
    #SQLALCHEMY_ECHO = True
    SQLALCHEMY_RECORD_QUERIES = True
    DATABASE_QUERY_TIMEOUT = 0.5

# Flask-Security Setting
SECURITY_EMAIL_SENDER = 'no-reply@myservice.com'
SECURITY_POST_LOGIN_URL = '/'
SECURITY_PASSWORD_HASH = 'bcrypt'
SECURITY_PASSWORD_SALT = 'flask_canjs_i18n_password_salt'
SECURITY_REMEMBER_SALT = 'flask_canjs_i18n_remember_salt'
SECURITY_RESET_SALT = 'flask_canjs_i18n_reset_salt'
SECURITY_RESET_WITHIN = '5 days'
SECURITY_CONFIRM_WITHIN = '5 days'
SECURITY_REGISTERABLE = False
SECURITY_CHANGEABLE = False
SECURITY_PASSWORDLESS = False
SECURITY_CONFIRMABLE = False
SECURITY_DEFAULT_REMEMBER_ME = False
SECURITY_TRACKABLE = True
SECURITY_RECOVERABLE = True
SECURITY_SEND_REGISTER_EMAIL = False
SECURITY_EMAIL_SUBJECT_REGISTER = _('Welcome')
SECURITY_EMAIL_SUBJECT_CONFIRM = _('Please confirm your email')
SECURITY_EMAIL_SUBJECT_PASSWORDLESS = _('Login instructions')
SECURITY_EMAIL_SUBJECT_PASSWORD_NOTICE = _('Your password has been reset')
SECURITY_EMAIL_SUBJECT_PASSWORD_CHANGE_NOTICE = _('Your password has been changed')
SECURITY_EMAIL_SUBJECT_PASSWORD_RESET = _('Password reset instructions')

SECURITY_MSG_UNAUTHORIZED = (_('You do not have permission to view this resource.'), 'error')
SECURITY_MSG_CONFIRM_REGISTRATION = (_('Thank you. Confirmation instructions have been sent.'), 'success')
# SECURITY_MSG_CONFIRM_REGISTRATION = (_('Thank you. Confirmation instructions have been sent to %(email)s.'), 'success')
SECURITY_MSG_EMAIL_CONFIRMED = (_('Thank you. Your email has been confirmed.'), 'success')
SECURITY_MSG_ALREADY_CONFIRMED = (_('Your email has already been confirmed.'), 'info')
SECURITY_MSG_INVALID_CONFIRMATION_TOKEN = (_('Invalid confirmation token.'), 'error')
SECURITY_MSG_EMAIL_ALREADY_ASSOCIATED = (_('Your email is already associated with an account.'), 'error')
# SECURITY_MSG_EMAIL_ALREADY_ASSOCIATED = (_('%(email)s is already associated with an account.'), 'error')
SECURITY_MSG_PASSWORD_MISMATCH = (_('Password does not match'), 'error')
SECURITY_MSG_RETYPE_PASSWORD_MISMATCH = (_('Passwords do not match'), 'error')
SECURITY_MSG_INVALID_REDIRECT = (_('Redirections outside the domain are forbidden'), 'error')
SECURITY_MSG_PASSWORD_RESET_REQUEST = (_('Instructions to reset your password have been sent.'), 'info')
# SECURITY_MSG_PASSWORD_RESET_REQUEST = (_('Instructions to reset your password have been sent to %(email)s.'), 'info')
SECURITY_MSG_PASSWORD_RESET_EXPIRED = (_('You did not reset your password. New instructions have been sent.'), 'error')
# SECURITY_MSG_PASSWORD_RESET_EXPIRED = (_('You did not reset your password within %(within)s. New instructions have been sent to %(email)s.'), 'error')
SECURITY_MSG_INVALID_RESET_PASSWORD_TOKEN = (_('Invalid reset password token.'), 'error')
SECURITY_MSG_CONFIRMATION_REQUIRED = (_('Email requires confirmation.'), 'error')
SECURITY_MSG_CONFIRMATION_REQUEST = (_('Confirmation instructions have been sent.'), 'info')
# SECURITY_MSG_CONFIRMATION_REQUEST = (_('Confirmation instructions have been sent to %(email)s.'), 'info')
SECURITY_MSG_CONFIRMATION_EXPIRED = (
_('You did not confirm your email. New instructions to confirm your email have been sent.'), 'error')
# SECURITY_MSG_CONFIRMATION_EXPIRED = (_('You did not confirm your email within %(within)s. New instructions to confirm your email have been sent to %(email)s.'), 'error')
SECURITY_MSG_LOGIN_EXPIRED = (_('You did not login. New instructions to login have been sent.'), 'error')
# SECURITY_MSG_LOGIN_EXPIRED = (_('You did not login within %(within)s. New instructions to login have been sent to %(email)s.'), 'error')
SECURITY_MSG_LOGIN_EMAIL_SENT = (_('Instructions to login have been sent.'), 'success')
# SECURITY_MSG_LOGIN_EMAIL_SENT = (_('Instructions to login have been sent to %(email)s.'), 'success')
SECURITY_MSG_INVALID_LOGIN_TOKEN = (_('Invalid login token.'), 'error')
SECURITY_MSG_DISABLED_ACCOUNT = (_('Account is disabled.'), 'error')
SECURITY_MSG_EMAIL_NOT_PROVIDED = (_('Email not provided'), 'error')
SECURITY_MSG_INVALID_EMAIL_ADDRESS = (_('Invalid email address'), 'error')
SECURITY_MSG_PASSWORD_NOT_PROVIDED = (_('Password not provided'), 'error')
SECURITY_MSG_PASSWORD_INVALID_LENGTH = (_('Password must be at least 6 characters'), 'error')
SECURITY_MSG_USER_DOES_NOT_EXIST = (_('Specified user does not exist'), 'error')
SECURITY_MSG_INVALID_PASSWORD = (_('Invalid password'), 'error')
SECURITY_MSG_PASSWORDLESS_LOGIN_SUCCESSFUL = (_('You have successfuly logged in.'), 'success')
SECURITY_MSG_PASSWORD_RESET = (
_('You successfully reset your password and you have been logged in automatically.'), 'success')
SECURITY_MSG_PASSWORD_CHANGE = (_('You successfully changed your password.'), 'success')
SECURITY_MSG_LOGIN = (_('Please log in to access this page.'), 'info')
SECURITY_MSG_REFRESH = (_('Please reauthenticate to access this page.'), 'info')

SECURITY_LOGIN_URL = '/#!login'
SECURITY_LOGOUT_URL = '/#!logout'

SECURITY_FORGOT_PASSWORD_TEMPLATE = 'security/forgot_password.jade'
SECURITY_RESET_PASSWORD_TEMPLATE = 'security/reset_password.jade'
SECURITY_SEND_CONFIRMATION_TEMPLATE = 'security/send_confirmation.jade'


