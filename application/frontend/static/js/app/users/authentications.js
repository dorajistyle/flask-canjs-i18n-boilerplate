define(['can', 'app/models/authentication', 'app/models/filter_user_current', 'utils', 'i18n', 'jquery'], function (can, Authentication, FilterUserCurrent, utils, i18n, $) {
    'use strict';
    /**
     * Control for new propose
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name authentications#Create
     * @constructor
     */
    var create;
    var Create = can.Control({
        init: function () {
            utils.logInfo('*Authentications/Create', 'Initialized');

        },
        /**
         * Show login view.
         * @memberof authentications#Create
         */
        show: function () {
            this.element.html(can.view('/static/views/user/login.mustache', {}));
            utils.refreshTitle();
        },

        '.perform-login click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performLogin();
            return false;
        },
        /**
         * Validate a form.
         * @memberof autentications#Create
         */
        validate: function () {
            return utils.validateEmail('loginEmail') && utils.minLength('loginPassword', 6, 'validation.password');
        },
        /**
         * Perform login action.
         * @memberof authentications#Create
         */
        performLogin: function () {
            if (this.validate()) {
                var form = this.element.find('#loginForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var login_btn = this.element.find('.perform-login');
                    login_btn.attr('disabled', 'disabled');
                    utils.logDebug("performLogin", JSON.stringify(values));
                    can.when(Authentication.create(values)).then(function (result) {
                        if (result.status) {
                            can.route.attr({route: 'refresh/navbar', url: document.referrer});
                            utils.showSuccessMsg(i18n.t('login.welcome', result.email));
                            utils.logDebug(JSON.stringify(this), JSON.stringify(result));
                        } else {
                            login_btn.removeAttr('disabled');
                            $form.data('submitted', false);
                            utils.showErrorMsg(i18n.t('login.failed'));
                        }

                    }, function (xhr) {
                        utils.handleStatusWithErrorMsg(xhr, i18n.t('login.already'));
                    });
                }
            } else {
                utils.showMessages();
            }
        },
        /**
         * Perform logout action
         * @memberof authentications#Create
         */
        performLogout: function () {
            can.when(Authentication.destroy()).then(function () {
                can.when(Authentication.findAll()).then(function () {
                    utils.showErrorMsg(i18n.t('logout.error'));
                }, function (xhr) {
                    utils.deleteCookie('session');
                    utils.deleteCookie('remember_token');
                    utils.showSuccessMsg(i18n.t('logout.success'));
                    can.route.attr({route: 'refresh/navbar', url: 'login'});
                });
            }, function (xhr) {
                utils.handleStatusWithErrorMsg(xhr, i18n.t('logout.alreadyDone'));
            });
        }
    });

    /**
     * Router for authentication.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name authentications#Router
     * @constructor
     */
    var Router = can.Control({
        defaults: {}
    }, {
        init: function (target) {
            create = new Create(target);
            utils.logInfo('*Authentications/Router', 'Initialized')
        },
        'login route': function () {
            create.show();
        },
        'logout route': function () {
            create.performLogout();
        }
    });

    return Router;


});