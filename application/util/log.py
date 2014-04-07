# coding=UTF-8
"""
    application.util.log
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    log module
"""
from flask import current_app


def log_exception(err):
    """
    log the exception.
    @param err:
    """
    log_error("Exception : {0}".format(err))


def log_error(text):
    """
    log the error.
    @param text:
    """
    current_app.logger.error(text)


def log_warning(text):
    """
    log the warning.
    @param text:
    """
    current_app.logger.warning(text)


def log_debug(text):
    """
    log the debug.
    @param text:
    """
    current_app.logger.debug(text)

