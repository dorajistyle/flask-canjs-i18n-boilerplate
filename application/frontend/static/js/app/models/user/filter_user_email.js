/*global define*/
define(['can', 'app/models/model'], function (can, Model) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace filter_user_email
     */

    /**
     * FilterUserEmail model.
     *  @constructor
     * @type {*}
     * @name filter_user_email#FilterUserEmail
     */
    var FilterUserEmail = Model({
        findOne: 'GET /api/v1/filters/user/email/{email}'
    }, {
    });
    return FilterUserEmail;
});
