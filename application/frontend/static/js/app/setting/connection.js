define(['can', 'app/models/user/connection_facebook',
    'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, Facebook, utils, i18n, $) {
    'use strict';


    /**
     * Instance of Setting Contorllers.
     * @private
     */
    var connection;

    /**
     * Control for Setting Profile
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name setting#Connection
     * @constructor
     */
    var Connection = can.Control.extend({
        init: function () {
            utils.logInfo('*Setting/Connection', 'Initialized');
        },
        load: function (page) {
            Facebook.findAll({}, function (facebook){
                connection.has_facebook_connection = facebook.has_facebook_connection;
                connection.show();
                utils.refreshTitle();
            },function (xhr) {
                utils.handleStatus(xhr);
            });
        },
        /**
         * Show Setting view.
         * @memberof setting#Connection
         */
        show: function () {
            this.element.html(can.view('/static/views/setting/connection.mustache', {
                has_facebook_connection: this.has_facebook_connection
            }));
        },
        '.send-to-facebook click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performSendToFacebook();
            return false;
        },
        '.disconnect-to-facebook click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.performDisconnectToFacebook();
            return false;
        },
        validateSendtoFB: function () {
            return utils.minLengthTextarea('content', 3, 'validation.contentTooShort')
        },
        performDisconnectToFacebook: function () {
            Facebook.destroy(function () {
                connection.load('connection');
                window.location.reload(true);
//            $('#sendToFacebookForm').addClass('hidden');
//            $('.disconnect-to-facebook-wrapper').addClass('hidden');
//            $('.connect-to-facebook-wrapper').removeClass('hidden');
            });
        },
        performSendToFacebook: function () {
            if (this.validateSendtoFB()) {
                var form = this.element.find('#sendToFacebookForm');
                var values = can.deparam(form.serialize());
                var $form = $(form);
                if (!$form.data('submitted')) {
                    $form.data('submitted', true);
                    var send_btn = this.element.find('.send-to-facebook');
                    send_btn.attr('disabled', 'disabled');
                    can.when(Facebook.create(values)).then(function (result) {
                        send_btn.removeAttr('disabled');
                        $form.data('submitted', false);
                        if (result.status) {
                            utils.showSuccessMsg(i18n.t('facebook.send.done'));
                            $('#content').val('');
                        } else {
                            utils.showErrorMsg(i18n.t('facebook.send.fail'));
                        }
                    }, function () {
                        connection.performDisconnectToFacebook();
                        utils.showErrorMsg(i18n.t('facebook.send.connectionFailed'));
                    });
                }
            } else {
                utils.showMessages();
            }
        }
    });

    /**
     * Router for setting connection.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name setting#Connection_Router
     * @constructor
     */
     var Router = can.Control.extend({
        defaults: {}
        }, {
            init: function () {
                connection = undefined;
                utils.logInfo('*setting/Connection/Router', 'Initialized');
            },
            allocate: function () {
                var $app = utils.getFreshDiv('setting-connection');
                connection = new Connection($app);
            },
            load: function(page) {
                utils.logDebug('*setting/Connection/Router', 'loaded');
                utils.allocate(this, connection);
                connection.load(page);
            }
        });

    return Router;
});