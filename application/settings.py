# coding=UTF-8
"""
    application.settings
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    settings module
    It contains setting for flask and extensions.

"""
import os
from application.babel_helper import _
_basedir = os.path.abspath(os.path.dirname(__file__))

DEBUG = False
SECRET_KEY = 'super-secret-key'


# Flask-DebugToolbar
DEBUG_TB_INTERCEPT_REDIRECTS = False

# Flask-WTF
#CSRF_ENABLED = False
WTF_CSRF_ENABLED = False

# Flask-WhooshAlchemy
WHOOSH_BASE = os.path.join(_basedir, '../search_index')
MAX_SEARCH_RESULTS = 30

# Flask-Babel
BABEL_DEFAULT_LOCALE = 'ko'

# Below three lines are just for temporary database.

SQLALCHEMY_DATABASE_URI = 'sqlite:////' + os.path.join(_basedir, 'db/temp.db')
# SQLALCHEMY_DATABASE_URI = 'mysql://user:@localhost/schema'
CELERY_BROKER_URL = 'redis://'

# Celery
CELERY_BROKER_URL = 'redis://'
CELERY_RESULT_BACKEND = 'amqp://'
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Seoul'
CELERY_ENABLE_UTC = True

# Flask-Cache Cache Type
CACHE_TYPE = 'simple'


# Flask-Mail Setting
MAIL_DEFAULT_SENDER = 'no-reply@myservice.com'
# MAIL_SERVER = 'smtp.googlemail.com'
# MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
# MAIL_USERNAME = 'user@mail.com'
# MAIL_PASSWORD = 'my-password'

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

# Flask-Social Setting
SOCIAL_TWITTER = {
    'consumer_key': 'twitter app id',
    'consumer_secret': 'twitter app secret'
}
SOCIAL_FACEBOOK = {
    'consumer_key': 'facebook app id',
    'consumer_secret': 'facebook app secret',
    'request_token_params': {
        'scope': 'email,publish_actions'
    }
}
SOCIAL_FOURSQUARE = {
    'consumer_key': 'foursquare app id',
    'consumer_secret': 'foursquare app secret'
}
SOCIAL_GOOGLE = {
    'consumer_key': 'google app id',
    'consumer_secret': 'google app secret'
}
