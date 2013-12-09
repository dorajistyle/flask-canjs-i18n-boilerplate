/*global define*/
define(['can', 'app/models/model', 'app/models/api_path'], function (can, Model, API) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace user_email
     */

    /**
     * UserEmail model.
     *  @constructor
     * @type {*}
     * @name user_email#UserEmail
     */
    var UserEmail = Model({
        findOne: 'GET '+API+'/users/email/{email}'
    }, {
    });
    return UserEmail;
});
