/*global define*/
define(['can', 'can/model'], function (can, Model) {
    'use strict';

    /**
     * Admin related
     * @author dorajistyle
     * @namespace admin
     */

    /**
     * Role model.
     *  @constructor
     * @type {*}
     * @name admin#Role
     */
    var Role = Model({
        create: 'POST /api/v1/roles',
        update: 'PUT /api/v1/roles/{id}',
        destroy: 'DELETE /api/v1/roles/{id}',
        findOne: 'GET /api/v1/roles/{id}',
        findAll: 'GET /api/v1/roles'
    }, {
    });
    return Role;
});
