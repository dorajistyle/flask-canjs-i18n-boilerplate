define(['can', 'utils', 'jquery', 'jquery.bootstrap'],
    function (can, utils, $) {
    'use strict';

    /**
     * Control for Tab
     * @private
     * @author dorajistyle
     * @param {string} target
     * @name share#Tab
     * @constructor
     */
    var Tab = can.Control({
        init: function () {
            this.options.navid = '#'+this.options.route+'Nav';
            utils.logInfo('*share/Tab', 'Initialized');
        },
        /**
         * Show
         * @param name
         */
        showTab: function (tab_name) {
            $('#'+this.options.route+'Wrapper > div').addClass('hidden');
            $('#'+this.options.route+'-'+tab_name).removeClass('hidden');
        },
        activeTab: function (tab_name) {
            $('#'+this.options.route+'Nav > ul > li').removeClass('active');
            $('#'+this.options.route+'Nav > ul > li.' + tab_name + '-tab').addClass('active');
        },
        '#{route}Nav > ul > li > a click': function (el, ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var target = ev.target;
            window.location.hash = '#!'+this.options.route+'/'+target.getAttribute('class');
//            window.location.pathname = "/";
            return false;
        }
    });
    return Tab;
});