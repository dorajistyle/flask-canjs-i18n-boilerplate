/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["jquery","can/util/library","can/control"],function(e,t){var n,i=function(e,t){var i=e.constructor.pluginName||e.constructor._shortName;for(n=0;n<t.length;n++)if("string"==typeof t[n]?i===t[n]:e instanceof t[n])return!0;return!1},r=t.makeArray,o=t.Control.setup;return t.Control.setup=function(){if(this!==t.Control){var e=this.pluginName||this._fullName;"can_control"!==e&&this.plugin(e),o.apply(this,arguments)}},e.fn.extend({controls:function(){var e,n,o=r(arguments),a=[];return this.each(function(){if(e=t.$(this).data("controls"))for(var r=0;r<e.length;r++)n=e[r],(!o.length||i(n,o))&&a.push(n)}),a},control:function(){return this.controls.apply(this,arguments)[0]}}),t.Control.plugin=function(n){var i=this;e.fn[n]||(e.fn[n]=function(n){var o,a=r(arguments),s="string"==typeof n&&e.isFunction(i.prototype[n]),u=a[0];return this.each(function(){var e=t.$(this).control(i);e?s?o=e[u].apply(e,a.slice(1)):e.update.apply(e,a):i.newInstance.apply(i,[this].concat(a))}),void 0!==o?o:this})},t.Control.prototype.update=function(e){t.extend(this.options,e),this.on()},t});