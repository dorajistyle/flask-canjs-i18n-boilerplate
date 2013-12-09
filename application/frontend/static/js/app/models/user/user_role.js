/*global define*/
define(['can', 'app/models/model', 'app/models/api_path'], function (can, Model, API) {
    'use strict';

    /**
     * Role model.
     * @constructor
     * @type {*}
     * @name admin#UserRole
     */
    var UserRole = Model({
        update: 'PUT '+API+'/user_role/{id}',
        create: 'POST '+API+'/user_role'
    }, {
    });
    return UserRole;
});
