/*global define*/
define(['can', 'app/models/model', 'app/models/api_path'], function (can, Model, API) {
    'use strict';

    /**
     * UserAdmin related
     * @author dorajistyle
     * @namespace users
     */

    /**
     * UserAdmin model.
     * @constructor
     * @type {*}
     * @name users#UserAdmin
     */
    var UserAdmin = Model({
        findAll: 'GET '+API+'/users/admin',
        findOne: 'GET '+API+'/users/admin/{id}'
    }, {
    });
    return UserAdmin;
});
