# coding=UTF-8
"""
    wsgi
    ~~~~

    Run the application.
"""
from werkzeug.serving import run_simple
from werkzeug.wsgi import DispatcherMiddleware
from application.models import *

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

from application import frontend, api_v1

api_app = api_v1.create_app()


@api_app.before_first_request
def init_db():
    db.create_all()

application = DispatcherMiddleware(frontend.create_app(), {
    '/api/v1': api_app
})

if __name__ == "__main__":
    run_simple('127.0.0.1', 5000, application, use_reloader=True, use_debugger=True)
