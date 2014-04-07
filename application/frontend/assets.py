# coding=UTF-8
"""
    application.frontend.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    frontend application asset "pipeline"


"""
from flask import logging
from flask_assets import Environment, Bundle


#: application css bundle
from webassets.script import CommandLineEnvironment

css_application = Bundle("scss/main.scss", "scss/http-errors.scss",
                         filters="pyscss", output="css/main.css",
                         debug=False)

#: consolidated css bundle
css_all = Bundle("css/bootstrap.min.css", css_application, "css/typeahead.js-bootstrap.css",
                 "css/font-awesome.min.css", output="css/application.css")


def init_app(app):
    """
    Initilize assets.
    :param app:
    """
    if app.debug:
        webassets = Environment(app)
        webassets.url = app.static_url_path
        webassets.register('css_all', css_all)
        webassets.manifest = False
        webassets.cache = False
        webassets.debug = False
        webassets.cache = not app.debug
        webassets.debug = app.debug
        log = logging.getLogger('webassets')
        log.addHandler(logging.StreamHandler())
        log.setLevel(logging.DEBUG)
        cmdenv = CommandLineEnvironment(webassets, log)
        cmdenv.build()
