define(['can', 'i18n', 'utils', 'app/feedbacks', 'app/models/feedback', 'can/view/mustache'], function (can, i18n, utils, Feedbacks, Feedback) {
    buster.testCase("something test", {
        setUp: function () {
            var lang = utils.getParam('lang');
            var i18n_option = {debug: true, resGetPath: 'locales/__lng__/__ns__.json'};
            lang != undefined
                ? i18n_option.lng = lang
                : i18n_option.lng = "en";
            utils.enableLog();
            //        utils.disableLog();
            can.when(i18n.init(i18n_option)).then(function () {
                can.route.ready(false);

                can.Mustache.registerHelper('i18n', function (str, options) {
                    return i18n != undefined
                        ? i18n.t(str)
                        : str;
                });

                new Feedbacks.router(document);
                can.route.ready(true);
            });
            var self = this;
            this.timeout = 7000;
//            var spy = this.spy();
//            this.server = this.useFakeServer();
//            this.server = this.fakeServer.create();

        }



    });
});