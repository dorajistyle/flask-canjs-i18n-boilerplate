define(['can', 'app/users/router', 'app/setting/router', 'app/admin/router', 'app/models/user/user', 'app/components/navbar', 'utils'],
    function (can, Users, Setting, Admin, User, Navbar, utils) {
    'use strict';

    /**
     * Router for feedbacks.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name feedback#Router
     * @constructor
     */


    var Main = can.Control.extend({
        defaults: {}
    }, {
        init: function () {
            utils.logInfo('*Router/Main', 'initialized');
        },
        'route': function () {
            if (can.route.attr('_') == '_') {
                Navbar.load();
                utils.replaceHash('setting/connection');
                return false;
            }
            this.show();
        },
        show: function () {
            User.findAll({}, function (data) {
                utils.logJson('data', data);
                $(utils.getFreshApp()).html(can.view('/static/views/main.mustache', {
                    users: data.users
                }));
               utils.refreshTitle();
            })
        }
    });

    var Routers = function (target) {
        new Users(target);
        new Setting(target);
        new Admin(target);
        new Main(target);
    };


    return Routers;
});
