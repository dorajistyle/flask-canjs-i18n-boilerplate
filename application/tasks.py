# -*- coding: utf-8 -*-
"""
    application.tasks
    ~~~~~~~~~~~~~~

    application tasks module
"""

from application.factory import create_celery_app
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)
celery = create_celery_app()


@celery.task
def add(a, b):
    logger.info('Adding %s + %s' % (a, b))
    print("add : %s" % str(a+b))


@celery.task
def sub(a, b):
    logger.info('Sub %s + %s' % (a, b))
    return str(a-b)