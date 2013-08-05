/*global define*/
define(['can', 'can/model'], function (can, Model) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace search_user_current
     */

    /**
     * FilterUserCurrent model.
     *  @constructor
     * @type {*}
     * @name search_user_current#FilterUserCurrent
     */
    var FilterUserCurrent = Model({
        findOne: 'GET /api/v1/filters/user/current'
    }, {
    });

    return FilterUserCurrent;
});
