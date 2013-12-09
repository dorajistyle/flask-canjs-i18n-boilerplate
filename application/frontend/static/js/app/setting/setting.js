define(['can', 'app/setting/basic', 'app/setting/password', 'app/setting/connection', 'app/setting/leave_our_service'
    , 'app/models/user/user_current', 'app/share/tab', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, Basic, Password, Connection, LeaveOurService, UserCurrent, Tab, utils, i18n, $) {
    'use strict';


    /**
     * Instance of User Contorllers.
     * @private
     */
    var tab, setting, basic, password, connection, leave_our_service;


 /**
     * Control for Setting
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name setting#Setting
     * @constructor
     */
    var Setting = can.Control.extend({
        init: function () {
            utils.logInfo('*setting/Setting', 'Initialized');
        },
        load: function (tab, page) {
            UserCurrent.findOne({}, function (result) {
                if(!result.user) {
                    utils.replaceHash('');
                } else {
                    if(!setting.is_reload) {
                      setting.show();
                      utils.logDebug('Setting load', 'it is performed');
                      setting.is_reload = true;
                      utils.refreshTitle();
                      utils.setWrapperInfo(setting, 'settingWrapper');
                    }
                    setting.user = result.user;
                    utils.replaceWrapper(setting, 'settingWrapper');
                    setting.selectTab(tab, page);
                }
            },function (xhr) {
                utils.replaceHash('');
            });
        },
        /**
         * Show Setting view.
         * @memberof admin#Admin
         */
        show: function () {
            utils.logDebug('setting element', this);
            this.element.html(can.view('/static/views/setting/setting.mustache', {
            }));
        },
        /**
         * Select tab
         * @param tab_name
         */
        selectTab: function (tab_name) {
            if (!tab_name) tab_name = 'basic';
            utils.logDebug('selectTab', 'performed');
            tab.activeTab(tab_name);
            switch (tab_name) {
                case 'basic':
                    basic.load(setting.user);
                    tab.showTab(tab_name);
                    break;
                case 'password':
                    password.load(setting.user);
                    tab.showTab(tab_name);
                    break;
                case 'connection':
                    connection.load();
                    tab.showTab(tab_name);
                    break;
                case 'leave-our-service':
                    leave_our_service.load(setting.user);
                    tab.showTab(tab_name);
                    break;
                default:
                    tab.showTab('basic');
                    break;
            }
        }


    });

    /**
     * Router for update.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name users#Update_Router
     * @constructor
     */
    var Router = can.Control.extend({
        defaults: {}
    }, {
        init: function () {
            utils.logInfo('*Users/Setting/Router', 'Initialized');
        },
         allocate: function () {
            var $app = utils.getFreshApp();
            tab = new Tab($app,{route: 'setting'});
            setting = new Setting($app);
            basic = new Basic();
            password = new Password();
            connection = new Connection();
            leave_our_service = new LeaveOurService();
        },
        'setting route': function () {
            can.route.attr('tab', 'basic');
        },
        'setting/:tab route': function (data) {
            utils.allocate(this, setting);
            setting.load(data.tab);
        }
    });

    return Router;
});