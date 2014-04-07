define(['can', 'app/models/user/authentication', 'app/models/user/user', 'app/models/user/user_email', 'refresh', 'utils', 'i18n', 'jquery'],
    function (can, Authentication, User, UserEmail, Refresh, utils, i18n, $) {
    'use strict';
    /**
     * Control for new propose
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name authentications#Create
     * @constructor
     */
    var create_auth, create_user;
    var CreateAuth = can.Control.extend({
        init: function () {
            utils.logInfo('*Authentications/Create', 'Initialized');

        },
        /**
         * Show login view.
         * @memberof authentications#Create
         */
        show: function () {
            this.element.html(can.view('views_user_login_mustache', {registration_message : create_auth.registration_message}));
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
            return utils.validateEmail('loginEmail') && utils.minLength('loginPassword', 8, 'validation.password') && utils.maxLength('loginPassword', 20, 'validation.password');
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
                    utils.logJson("performLogin", values);
                    can.when(Authentication.create(values)).then(function (result) {
                        utils.logJson("performLogin Response", result);
                        if (result.status) {
                            Refresh.load('');
                            utils.showSuccessMsg(i18n.t('login.welcome', result.email));
                        } else {
                            login_btn.removeAttr('disabled');
                            $form.data('submitted', false);
                            utils.showErrorMsg(i18n.t(result.msg));
                        }

                    }, function (xhr) {
                       var msg = 'login.failed';
                       if(xhr.responseJSON) msg = xhr.responseJSON.msg;
                        utils.handleStatusWithErrorMsg(xhr, i18n.t(msg));
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
                utils.deleteCookie('session');
                utils.deleteCookie('remember_token');
                can.when(Authentication.findAll()).then(function () {
                    utils.showErrorMsg(i18n.t('logout.error'));
                }, function (xhr) {
                    utils.showSuccessMsg(i18n.t('logout.success'));
                    Refresh.load('login');
                });
            }, function (xhr) {
                utils.handleStatusWithErrorMsg(xhr, i18n.t('logout.alreadyDone'));
            });
        }
    });

     /**
     *
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name users#Create
     * @constructor
     */
    var CreateUser = can.Control.extend({
        init: function () {
            utils.logInfo('*User/Create', 'Initialized');
        },
        '.register-user click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performRegister();
            return false;
        },
        '#registrationEmail focusout': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.checkEmailAlreadyTaken();
            return false;
        },
        /**
         * Validate a form.
         * @memberof users#Create
         */
        validate: function () {
            return utils.validateEmail('registrationEmail') && utils.minLength('registrationPassword', 8, 'validation.password') && utils.maxLength('registrationPassword', 20, 'validation.password');
        },
        /**
         * perform Register action.
         * @memberof users#Create
         */
        performRegister: function () {
            if (this.validate()) {
                var form = this.element.find('#registrationForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var register_btn = this.element.find('.register-user');
                    register_btn.attr('disabled', 'disabled');
                    if(create_user.provider_id != undefined) values.provider_id = create_user.provider_id;
                    can.when(User.create(values)).then(function (result) {
                        utils.logJson('register', result);
                        register_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        if (result.status) {
                            utils.showSuccessMsg(i18n.t('registration.welcome', result.email));
                            Refresh.load('');
                        } else {
                            utils.showErrorMsg(i18n.t('registration.failed'));
                        }

                    }, function (xhr) {
                        register_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        utils.handleStatusWithErrorMsg(xhr, i18n.t('registration.failed'));
                    });
                }
            } else {
                utils.showMessages();
            }
        },
        /**
         * Check a email that is already taken.
         * @memberof users#Create
         */
        checkEmailAlreadyTaken: function () {
            if (utils.validateEmail('registrationEmail', true)) {
                var $registration_email = $('#registrationEmail');
                UserEmail.findOne({email: $registration_email.val()}, function (result) {
                        if (result.status) {
                            utils.showWarningMsg(i18n.t('registration.already', result.email));
                            $registration_email.val('');
                            return false;
                        } else {
                            utils.showSuccessMsg(i18n.t('registration.available', result.email));
                        }
                        return true;
                    }
                );
            } else {
                utils.clearMessages();
                return true;
            }
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
    var Router = can.Control.extend({
        defaults: {}
    }, {
        init: function (target) {
            utils.logInfo('*Authentications/Router', 'Initialized')
        },
        allocate: function() {
            var $app = utils.getFreshApp();
            create_auth = new CreateAuth($app);
            create_user = new CreateUser($app);
        },
        'login route': function () {
            this.allocate();
            create_auth.show();
        },
        'login/provider/:id route': function (data) {
            this.allocate();
            create_user.provider_id = data.id;
            create_auth.registration_message = i18n.t('user.view.oauth.ifYouRegister') +
                i18n.t('user.view.oauth.'+create_user.provider_id) +
                i18n.t('user.view.oauth.willConnectAutomatically');
            create_auth.show();
        },
        'logout route': function () {
            this.allocate();
            create_auth.performLogout();
        }
    });

    return Router;


});