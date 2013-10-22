define(['can', 'app/models/user/user', 'app/models/user/filter_user_current', 'app/components/navbar', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, User, FilterUserCurrent, Navbar, utils, i18n, $) {
    'use strict';


    /**
     * Instance of User Contorllers.
     * @private
     */
    var destroy;


       /**
     *
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name users#Destroy
     * @constructor
     */
    var Destroy = can.Control({
        init: function () {
            this.isConfirmed = false;
            utils.logInfo('*User/Destroy', 'Initialized');
        },

        load: function (tab) {
            FilterUserCurrent.findOne({}, function (result) {
                utils.logJson('users#Destory load',result);
                destroy.user_data = result.user;
                    destroy.show();
                    destroy.initForm();
                    utils.refreshTitle();
            },function (xhr) {
                utils.handleStatus(xhr);
            });
        },
        /**
         * Show Setting view.
         * @memberof admin#Admin
         */
        show: function () {
            this.element.html(can.view('/static/views/setting/leave_our_service.mustache', {
                user: this.user_data
            }));
        },


        '.leave-our-service-confirm click': function (el, ev) {
            utils.logInfo('*User/Destroy', 'Confirm Clicked in users');
            ev.preventDefault();
            ev.stopPropagation();
            this.performConfirm();
            return false;
        },
        '.leave-our-service-final click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = true;
            can.when($('#leaveOurServiceConfirm').modal('hide')).then(this.performDestroy());
            return false;
        },
        '.cancel-confirm click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.isConfirmed = false;
            this.performCancel();
            return false;
        },

        /**
         * Show confirm modal.
         * @memberof users#Destroy
         */
        performCancel: function () {
//            $('#leaveOurServiceConfirm').addClass('hidden');
        },

        /**
         * Show confirm modal.
         * @memberof users#Destroy
         */
        performConfirm: function () {
//            $('#leaveOurServiceConfirm').removeClass('hidden');
            $('#leaveOurServiceConfirm').modal()
        },
        /**
         * perform Destory action.
         * @memberof users#Destroy
         */
        performDestroy: function () {
            var form = this.element.find('#leaveOurServiceForm');
            var values = can.deparam(form.serialize());
            var $form = $(form);
            if (!$form.data('submitted')) {
                $form.data('submitted', true);
                var destroy_btn = this.element.find('.leave-our-service-final');
                destroy_btn.attr('disabled', 'disabled');
                can.when(User.destroy(values.id)).then(function () {
                    utils.showSuccessMsg(i18n.t('setting.leaveOurService.done'));
                    Navbar.load();
                    utils.replaceHash('');
                }, function (xhr) {
                    destroy_btn.removeAttr('disabled');
                    $form.data('submitted', false);
                    utils.showErrorMsg(i18n.t('setting.leaveOurService.fail'));
                });

            }
        }
    });


 /**
     * Router for leave our service.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name setting#Destory_Router
     * @constructor
     */
     var Router = can.Control({
        defaults: {}
        }, {
            init: function () {
                destroy = undefined;
                utils.logInfo('*setting/Destory/Router', 'Initialized');
            },
            load: function(page) {
                utils.logDebug('*setting/Destory/Router', 'loaded');
                if(destroy == undefined) {
                    var $app = utils.getFreshDiv('setting-leave-our-service');
                    destroy = new Destroy($app);
                }
                destroy.load(page);
            }
        });

return Router;
});