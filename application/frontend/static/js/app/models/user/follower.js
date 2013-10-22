/*global define*/
define(['can', 'app/models/model'], function (can, Model) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace follower
     */

    /**
     * User model.
     *  @constructor
     * @type {*}
     * @name follower#Follower
     */
    var Follower = Model({
        create: 'POST /api/v1/followers',
        destroy: 'DELETE /api/v1/followers/{id}',
        findAll: 'GET /api/v1/followers'
    }, {
    });
    return Follower;
});
