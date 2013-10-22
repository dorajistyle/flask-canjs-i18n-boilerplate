/*global define*/
define(['can', 'app/models/model'], function (can, Model) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace users
     */

    /**
     * User model.
     * @constructor
     * @type {*}
     * @name users#User
     */
    var User = Model({
        findAll: 'GET /api/v1/users',
        findOne: 'GET /api/v1/users/{id}',
        create: 'POST /users',
        update: 'PUT /api/v1/users/{id}',
        destroy: 'DELETE /api/v1/users/{id}'
    }, {
    });
    return User;
});
