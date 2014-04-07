# coding=UTF-8
"""
    application.util.datetime
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    datetime module

"""
from flask import current_app

from application.core import babel
import humanize


def naturaltime(datetime):
    try:
        locale = babel.app.config['BABEL_DEFAULT_LOCALE']
        humanize.activate(locale)
        return humanize.naturaltime(datetime)
    except IOError as ioe:
        current_app.logger.error("An exception raised from the datetime util." + str(ioe))
        return humanize.naturaltime(datetime)
    except Exception as e:
        current_app.logger.error("An exception raised from the datetime util." + str(e))