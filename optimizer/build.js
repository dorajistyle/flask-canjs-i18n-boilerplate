{
    appDir: '../application/frontend/static',
    baseUrl: 'js/vendor',
    mainConfigFile: '../application/frontend/static/js/app.js',
    paths: {
        app: '../app',
        "utils": "../app/lib/utils",
        "loglevel": "loglevel.min",
        "jquery": "jquery-1.10.1.min",
        "can": "can",
        "i18n": "i18next.amd.withJQuery-1.6.3.min",
        "spin": "spin.min",
        "placeholders": "Placeholders.min",
        "jquery.bootstrap": "bootstrap.min",
        "jquery.typeahead": "typeahead.min",
        "settings": "../settings" 
    },
    dir: '../application/frontend/static-build',
    optimize: "uglify2",
    optimizeCss: "standard",
    removeCombined: true,
    preserveLicenseComments: false,
    modules: [
        {
            name: '../app'
        }
    ]
}
