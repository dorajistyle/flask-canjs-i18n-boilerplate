# coding=UTF-8
import logging
import sys
from webassets import Environment
from webassets.script import CommandLineEnvironment
# from application.properties import STATIC_FOLDER
from assets import css_all


def scss_compile(static_path):
    webassets = Environment()
    webassets.directory = static_path
    webassets.url = static_path
    webassets.register('css_all', css_all)
    #webassets.manifest = 'cache' if not app.debug else False
    webassets.manifest = False
    webassets.cache = False
    webassets.debug = False
    log = logging.getLogger('webassets')
    log.addHandler(logging.StreamHandler())
    log.setLevel(logging.DEBUG)
    cmdenv = CommandLineEnvironment(webassets, log)
    # This would also work
    cmdenv.build()

if __name__ == "__main__":
    path = './static'
    if len(sys.argv) > 1:
        path = sys.argv[1]
    scss_compile(path)