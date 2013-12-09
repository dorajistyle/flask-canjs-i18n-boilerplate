define(['can', 'app/models/user/user', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, User, utils, i18n, $) {
    'use strict';


    /**
     * Instance of User Contorllers.
     * @private
     */
    var password;


    /**
     * Control for Update Password
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name setting#Password
     * @constructor
     */
    var Password = can.Control.extend({
        init: function () {
            utils.logInfo('*User/Password', 'Initialized');
        },
        load: function () {
            password.show();
            utils.refreshTitle();
        },
        /**
         * Show Setting view.
         * @memberof setting#Password
         */
        show: function () {
            this.element.html(can.view('/static/views/setting/password.mustache', {
                user: this.user_data
            }));
        },

        '.update-user-password click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performPassword();
            return false;
        },

        validatePassword: function () {
            return utils.minLength('currentPassword', 8, 'validation.password')
                && utils.minLength('newPassword', 8, 'validation.password')
                && utils.minLength('newPasswordConfirm', 8, 'validation.password')
                && utils.maxLength('currentPassword', 20, 'validation.password')
                && utils.maxLength('newPassword', 20, 'validation.password')
                && utils.maxLength('newPasswordConfirm', 20, 'validation.password')
                && utils.isIdentical('newPassword', 'newPasswordConfirm', 'validation.newPasswordConfirm');
        },
        /**
         * perform the Password password action.
         * @memberof setting#Password
         */
        performPassword: function () {
            if (this.validatePassword()) {
                var form = this.element.find('#passwordForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var update_btn = this.element.find('.update-user-password');
                    update_btn.attr('disabled', 'disabled');
                    User.findOne({id: values.id}, function (user) {
                        user.attr(values);
                        user.save(function (result) {
                            update_btn.removeAttr('disabled');
                            $form.data('submitted', false);
                            if (result.password_incorrect) {
                                utils.showErrorMsg(i18n.t('setting.password.passwordIncorrect'));
                                return false;
                            }
                            utils.showSuccessMsg(i18n.t('setting.password.done'));
                        }, function (xhr) {
                            update_btn.removeAttr('disabled');
                            $form.data('submitted', false);
                            utils.handleStatusWithErrorMsg(xhr, i18n.t('setting.password.fail'));
                        });
                    });
                }
            } else {
                utils.showMessages();
            }
        }
    });

    /**
     * Router for setting password.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name setting#Password_Router
     * @constructor
     */
     var Router = can.Control.extend({
        defaults: {}
        }, {
            init: function () {
                password = undefined;
                utils.logInfo('*setting/Password/Router', 'Initialized');
            },
            allocate: function () {
                var $app = utils.getFreshDiv('setting-password');
                password = new Password($app);
            },
            load: function(user) {
                utils.logDebug('*setting/Password/Router', 'loaded');
                utils.allocate(this, password);
                password.user_data = user;
                password.load();
            }
        });

    return Router;
});