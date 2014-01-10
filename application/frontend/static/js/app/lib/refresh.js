define(['app/components/navbar', 'utils', 'settings', 'jquery'],
    function (Navbar, utils) {
    'use strict';

    return {
       /**
         * Refresh navbar and replace hash.
         * @param hash
       */
       load: function(hash){
           Navbar.load();
           utils.replaceHash(hash);
       },
        /**
         * Refresh navbar and replace hash. If failed show error message on the screen.
         * @param hash
         * @param control
         */
       loadWithException: function(hash, xhr){
           utils.handleStatus(xhr);
       }
    };
});
