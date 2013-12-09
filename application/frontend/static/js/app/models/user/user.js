/*global define*/
define(['can', 'app/models/model', 'app/models/api_path'], function (can, Model, API) {
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
        findAll: 'GET '+API+'/users',
        findOne: 'GET '+API+'/users/{id}',
        create: 'POST /users',
        update: 'PUT '+API+'/users/{id}',
        destroy: 'DELETE '+API+'/users/{id}'
    }, {
    });
    return User;
});
