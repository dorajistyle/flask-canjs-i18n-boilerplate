# coding=UTF-8
"""
    profile
    ~~~~

    Run the application with profile
"""
from werkzeug.serving import run_simple
from wsgi import application
from werkzeug.contrib.profiler import ProfilerMiddleware
from werkzeug.wsgi import DispatcherMiddleware



from application import frontend, api_v1

frontend_app = frontend.create_app()
api_app = api_v1.create_app()
frontend_app.config['PROFILE'] = True
api_app.config['PROFILE'] = True

application = ProfilerMiddleware(DispatcherMiddleware(frontend_app, {
    '/api/v1': api_app}), restrictions=[30])

if __name__ == "__main__":
    run_simple('0.0.0.0', 5000, application, use_reloader=True, use_debugger=True,)
