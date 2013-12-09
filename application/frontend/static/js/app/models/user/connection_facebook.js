/*global define*/
define(['can', 'app/models/model', 'app/models/api_path'], function (can, Model, API) {
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
        create: 'POST '+API+'/connections/facebook',
        destroy: 'DELETE '+API+'/connections/facebook',
        findAll: 'GET '+API+'/connections/facebook'
    }, {
    });

    return Facebook;
});
