/*global define*/
define(['can', 'app/models/model'], function (can, Model) {
    'use strict';

    /**
     * Authentication
     * @author dorajistyle
     * @namespace authentications
     */

    /**
     * Authentication model.
     *  @constructor
     * @type {*}
     * @name authentications#Authentication
     */
    var Authentication = Model({
        findAll: 'GET /api/v1/authentications',
        create: 'POST /api/v1/authentications',
        destroy: 'DELETE /api/v1/authentications'
    }, {
    });
    return Authentication;
});
