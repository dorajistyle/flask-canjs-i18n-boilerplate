/*global define*/
define(['can', 'app/models/model'], function (can, Model) {
    'use strict';

    /**
     * Facebook related
     * @author dorajistyle
     * @namespace connection
     */

    /**
     * Facebook model.
     *  @constructor
     * @type {*}
     * @name connection#Facebook
     */
    var Facebook = Model({
        create: 'POST /api/v1/connections/facebook',
        destroy: 'DELETE /api/v1/connections/facebook',
        findAll: 'GET /api/v1/connections/facebook'
    }, {
    });

    return Facebook;
});
