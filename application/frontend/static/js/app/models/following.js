/*global define*/
define(['can', 'can/model'], function (can, Model) {
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
     * @name following#User
     */
    var Following = Model({
        findAll: 'GET /api/v1/following'
    }, {
    });
    return Following;
});
