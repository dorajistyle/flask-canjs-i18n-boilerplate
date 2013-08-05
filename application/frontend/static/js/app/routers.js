define(['can', 'app/users/router', 'app/models/filter_user_current', 'app/models/user', 'utils'], function (can, Users, FilterUserCurrent, User, utils) {
    'use strict';

    /**
     * Router for feedbacks.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name feedback#Router
     * @constructor
     */


    var Main = can.Control({
        defaults: {}
    }, {
        init: function () {
            utils.logInfo('*Router/Main', 'initialized');
        },
        'route': function () {
            if (can.route.attr('_') == '_') {
                can.route.attr({route: 'refresh/navbar', url: '#!setting/connection'});
                return false;
            }
            var element = this.element;
            User.findAll({}, function (data) {
                utils.logDebug('data', JSON.stringify(data));
                element.html(can.view('/static/views/main.mustache', {
                    users: data.users
                }));
               utils.refreshTitle();
            })

        },
        show: function () {

        }
    });

    var Routers = function (target) {
        new Users(target);
        new Main(target);
    };


    return Routers;
});
