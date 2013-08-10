# coding=UTF-8
"""
    application.frontend.__init__
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by dorajistyle

    frontend application asset "pipeline"


"""
from flask_assets import Environment, Bundle


#: application css bundle
css_application = Bundle("scss/main.scss", "scss/http-errors.scss",
                         filters="pyscss", output="css/main.css",
                         debug=False)

#: consolidated css bundle
css_all = Bundle("css/bootstrap.min.css", css_application,
                 'css/font-awesome.min.css', filters="cssmin", output="css/application.min.css")


def init_app(app):
    """
    Initilize assets.
    :param app:
    """
    webassets = Environment(app)
    webassets.url = app.static_url_path
    webassets.register('css_all', css_all)
    webassets.manifest = 'cache' if not app.debug else False
    webassets.cache = not app.debug
    webassets.debug = app.debug
