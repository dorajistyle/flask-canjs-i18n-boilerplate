# coding=UTF-8
"""
    wsgi
    ~~~~

    Run the application.
"""
from werkzeug.serving import run_simple
from werkzeug.wsgi import DispatcherMiddleware
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

from application import frontend, api_v1

application = DispatcherMiddleware(frontend.create_app(), {
    '/api/v1': api_v1.create_app()
})

if __name__ == "__main__":
    run_simple('0.0.0.0', 5000, application, use_reloader=True, use_debugger=True)

