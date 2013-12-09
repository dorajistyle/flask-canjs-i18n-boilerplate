/*global define*/
define(['can', 'app/models/model', 'app/models/api_path'], function (can, Model, API) {
    'use strict';

    /**
     * User related
     * @author dorajistyle
     * @namespace user_current
     */

    /**
     * UserCurrent model.
     *  @constructor
     * @type {*}
     * @name user_current#UserCurrent
     */
    var UserCurrent = Model({
        findOne: 'GET '+API+'/users/current'
    }, {
    });

    return UserCurrent;
});
