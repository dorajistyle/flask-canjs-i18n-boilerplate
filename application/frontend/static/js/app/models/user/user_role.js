/*global define*/
define(['can', 'app/models/model'], function (can, Model) {
    'use strict';

    /**
     * Role model.
     * @constructor
     * @type {*}
     * @name admin#UserRole
     */
    var UserRole = Model({
        update: 'PUT /api/v1/user_role/{id}',
        create: 'POST /api/v1/user_role'
    }, {
    });
    return UserRole;
});
