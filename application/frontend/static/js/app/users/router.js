define(['can', 'app/users/authentications', 'app/users/users'], function (can, Authentications, Users) {
    'use strict';

    /**
     * Router for users.
     * @author dorajistyle
     * @param {string} target
     * @function Router
     * @name users#Routers
     * @constructor
     */

    var Routers = function (target) {
        new Authentications(target);
        new Users(target);
    };


    return Routers;
});
