require.config({
    "baseUrl": "/static/js",
    "paths": {
        "utils": "app/lib/utils",
        "refresh": "app/lib/refresh",
        "loglevel": "vendor/loglevel.min",
        "jquery": [
            "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
            "vendor/jquery-1.11.0.min"
        ],
        "can": "vendor/can",
        "i18n": "vendor/i18next.amd.withJQuery-1.7.1.min",
        "spin": "vendor/spin.min",
        "placeholders": "vendor/Placeholders.min",
        "jquery.bootstrap": [
            "//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min",
            "vendor/bootstrap.min"
        ],
        "jquery.typeahead": "vendor/typeahead.min",
        "jquery.ba-bbq": "vendor/jquery.ba-bbq.min"
    },
    shim: {
          "jquery.typeahead": {
              deps: ["jquery"],
              exports: '$.fn.typeahead'
          },
          "jquery.bootstrap": {
              deps: ["jquery"],
              exports: '$.fn.bootstrap'
          },
          "jquery.ba-bbq": {
            deps: ["jquery"]
          },
          "utils": {
              deps: ["jquery"]
          },
          enforceDefine: true
    }
});
/**
 * @requires jquery
 * @requires util
 * @requires i18n
 * @requires can
 * @requires settings
 * @requires spin
 * @requires app/components/navbar
 * @requires app/routers
 * @requires can/view/mustache
 */
requirejs(['can', 'jquery', 'utils', 'i18n', 'settings', 'app/components/navbar', 'refresh', 'app/routers', 'can/view/mustache','placeholders', 'jquery.ba-bbq'],
    function (can, $, utils, i18n, settings, Navbar, Refresh, Routers) {
        'use strict';

        $(document).ready(function () {
            var lang = $('html').attr('lang');
            var i18n_option = settings.i18n_options;
            lang != undefined
                ? i18n_option.lng = lang
                : i18n_option.lng = 'ko';
            settings.use_logger ? utils.enableLog() : utils.disableLog();
            can.when(i18n.init(i18n_option)).then(function () {
                // View helper for pluralizing strings
//                can.Mustache.registerHelper('feedbackPlural', function (str, attr) {
//                    return str + (attr.call(this.feedbacks) !== 1 ? 's' : '');
//                });

                can.Mustache.registerHelper('i18n', function (str, options) {
                    return i18n != undefined
                        ? i18n.t(str)
                        : str;
                });
                Navbar.load();
                new Routers(document.getElementById('appWrapper'));
                var target = document.getElementById('ajaxProgress');
//                var spinner = new Spin(settings.spin_options);
//                var $document = $(document);
//                $document.ajaxStart(function () {
//                    spinner.spin(target);
//                    $(target).removeClass('hidden');
//                });
//                $document.ajaxStop(function () {
//                    spinner.stop();
//                    $(target).addClass('hidden');
//                });
                var $document = $(document);
                $document.ajaxStart(function () {
                    $(target).removeClass('hidden');
                });
                $document.ajaxStop(function () {
                    $(target).addClass('hidden');
                });
                $document.ajaxError(function(event, xhr, settings, exception) {
                    Refresh.loadWithException('', xhr);
                });

                $document.on("keypress", 'form', function (e) {
                    var code = e.keyCode || e.which;
                    if (code == 13) {
                        e.preventDefault();
                        $(this).closest('form').find(':submit').not('.hidden').click();
                        return false;
                    }
                });
                can.route.ready();
            });
        });
    });
