{
    appDir: '../application/frontend/static',
    baseUrl: 'js/vendor',
    mainConfigFile: '../application/frontend/static/js/app.js',
    paths: {
        app: '../app',
        "utils": "../app/lib/utils",
        "refresh": "../app/lib/refresh",
        "views": "../views.build",
        "loglevel": "loglevel.min",
        "jquery": "jquery-1.11.0.min",
        "can": "can",
        "i18n": "i18next.amd.withJQuery-1.7.3",
        "spin": "spin.min",
        "google-analytics": "empty:",
        "placeholders": "Placeholders.min",
        "jquery.bootstrap": "empty:",
//        "jquery.bootstrap": "bootstrap.min",
        "jquery.typeahead": "typeahead.min",
        "jquery.ba-bbq": "jquery.ba-bbq.min",
        "settings": "../settings"
    },
    fileExclusionRegExp: /^node_modules$|^views$|^scss$|^test$/,
    dir: '../application/frontend/static-build',
    optimizeAllPluginResources: true,
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
