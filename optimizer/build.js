{
    appDir: '../application/frontend/static',
    baseUrl: 'js/vendor',
    mainConfigFile: '../application/frontend/static/js/app.js',
    paths: {
        app: '../app',
        "utils": "../app/lib/utils",
        "refresh": "../app/lib/refresh",
        "loglevel": "loglevel.min",
        "jquery": "jquery-1.11.0.min",
        "can": "can",
        "i18n": "i18next.amd.withJQuery-1.7.1.min",
        "spin": "spin.min",
        "placeholders": "Placeholders.min",
        "jquery.bootstrap": "bootstrap.min",
        "jquery.typeahead": "typeahead.min",
        "jquery.ba-bbq": "jquery.ba-bbq.min",
        "settings": "../settings"
    },
    dir: '../application/frontend/static-build',
    optimize: "uglify2",
    optimizeCss: "standard.keepLines",
    removeCombined: true,
    preserveLicenseComments: true,
    modules: [
        {
            name: '../app'
        }
    ]
}
