/*global define*/
define(['can', 'can/model'], function (can, Model) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace search_user_email
     */

    /**
     * FilterUserEmail model.
     *  @constructor
     * @type {*}
     * @name search_user_email#FilterUserEmail
     */
    var FilterUserEmail = Model({
        findOne: 'GET /api/v1/filters/user/email/{email}'
    }, {
    });
    return FilterUserEmail;
});
