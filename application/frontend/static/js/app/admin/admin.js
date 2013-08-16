define(['can', 'app/admin/roles', 'app/admin/users', 'app/models/filter_user_current', 'utils', 'i18n', 'jquery', 'jquery.bootstrap'], function (can, Roles, Users, FilterUserCurrent, utils, i18n, $, _bootstrap) {
    'use strict';


    /**
     * Instance of Admin Contorllers.
     * @private
     */
    var admin, roles, users;

    /**
     * Control for Admin
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name admin#Admin
     * @constructor
     */
    var Admin = can.Control({
        init: function () {
            utils.logInfo('*admin/Admin', 'Initialized');
        },
        load: function (tab, page) {
            FilterUserCurrent.findOne({}, function (result) {
                if(!result.is_admin) window.location.hash = '/#!';
                if(!admin.is_reload) {
                  admin.show();
                  admin.is_reload = true;
                  utils.refreshTitle();
                }
                admin.selectTab(tab, page);
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
         * Show
         * @param name
         */
        showTab: function (name) {
            $('#adminWrapper > div').addClass('hidden');
            $('#' + name).removeClass('hidden');
        },
        /**
         * Select tab
         * @param tab_name
         */
        selectTab: function (tab_name, page) {
            if (!tab_name) tab_name = 'basic';
            $('#adminNav > ul > li').removeClass('active');
            $('#adminNav > ul > li.' + tab_name + '-tab').addClass('active');
            switch (tab_name) {
                case 'role':
                    roles.load(page);
                    this.showTab('admin-' + tab_name);
                    break;
                case 'user':
                    users.load(page);
                    this.showTab('admin-' + tab_name);
                    break;
                default:
                    this.showTab('admin-role');
                    break;
            }
        },
        '#adminNav > ul > li > a click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var target = ev.target;
            window.location.hash = '#!admin/'+target.getAttribute('class');
            return false;
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
   var Router = can.Control({
        defaults: {}
   }, {
       init: function () {
           admin = new Admin(utils.getFreshApp());
           roles = new Roles();
           users = new Users();
           utils.logInfo('*admin/Router', 'Initialized')
       },
       'admin route': function () {
           window.location.hash='#!admin/role'
       },
       'admin/:tab/:page route': function (data) {
           if(admin == undefined) {
             this.init();
           }
           admin.load(data.tab, data.page);
       },
       'admin/:tab route': function (data) {
           this.init();
           admin.is_reload = false;
           admin.load(data.tab);
       }
   });

   return Router;
});