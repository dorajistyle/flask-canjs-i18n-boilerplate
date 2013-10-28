define(['can', 'app/admin/roles', 'app/admin/users', 'app/models/user/filter_user_current',
    'app/share/tab', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'],
    function (can, Roles, Users, FilterUserCurrent, Tab, utils, i18n, $) {
    'use strict';


    /**
     * Instance of Admin Contorllers.
     * @private
     */
    var admin, tab, roles, users;

    /**
     * Control for Admin
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#Admin
     * @constructor
     */
    var Admin = can.Control.extend({
        init: function () {
            utils.logInfo('*admin/Admin', 'Initialized');
        },
        load: function (tab, page) {
            FilterUserCurrent.findOne({}, function (result) {
                if(!result.has_admin) {
                    utils.replaceHash('');
                }  else {
                    if(!admin.is_reload) {
                      admin.show();
                      admin.is_reload = true;
                      utils.refreshTitle();
                    }
                    admin.selectTab(tab, page);
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
            this.element.html(can.view('/static/views/admin/admin.mustache', {
            }));
        },
        /**
         * Select tab
         * @param tab_name
         */
        selectTab: function (tab_name, page) {
            if (!tab_name) tab_name = 'basic';
            tab.activeTab(tab_name);
            switch (tab_name) {
                case 'role':
                    roles.load(page);
                    tab.showTab(tab_name);
                    break;
                case 'user':
                    users.load(page);
                    tab.showTab(tab_name);
                    break;
                default:
                    tab.showTab('role');
                    break;
            }
        }
    });

   /**
     * Router for user.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name users#Router
     * @constructor
     */
   var Router = can.Control.extend({
        defaults: {}
   }, {
       init: function () {
           utils.logInfo('*admin/Router', 'Initialized')
       },
       allocate: function () {
           var $app = utils.getFreshApp();
           tab = new Tab($app,{route: 'admin'});
           admin = new Admin($app);
           roles = new Roles();
           users = new Users();
       },
       'admin route': function () {
           can.route.attr('tab', 'role');
       },
       'admin/:tab/:page route': function (data) {
          if(admin.is_reload === undefined) {
             utils.allocate(this, admin);
           }
           admin.load(data.tab, data.page);
       },
       'admin/:tab route': function (data) {
            utils.allocate(this, admin);
           admin.is_reload = false;
           admin.load(data.tab);
       }
   });

   return Router;
});