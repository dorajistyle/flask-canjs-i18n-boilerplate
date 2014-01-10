/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["jquery","can/util/library","can/control"],function(t,e){var n,r=function(t,e){var r=t.constructor.pluginName||t.constructor._shortName;for(n=0;n<e.length;n++)if("string"==typeof e[n]?r==e[n]:t instanceof e[n])return!0;return!1},i=e.makeArray,o=e.Control.setup;return e.Control.setup=function(){if(this!==e.Control){var t=this.pluginName||this._fullName;"can_control"!==t&&this.plugin(t),o.apply(this,arguments)}},t.fn.extend({controls:function(){var t,n,o=i(arguments),a=[];return this.each(function(){if(t=e.$(this).data("controls"))for(var i=0;i<t.length;i++)n=t[i],(!o.length||r(n,o))&&a.push(n)}),a},control:function(){return this.controls.apply(this,arguments)[0]}}),e.Control.plugin=function(n){var r=this;t.fn[n]||(t.fn[n]=function(n){var o,a=i(arguments),s="string"==typeof n&&t.isFunction(r.prototype[n]),u=a[0];return this.each(function(){var t=e.$(this).control(r);t?s?o=t[u].apply(t,a.slice(1)):t.update.apply(t,a):r.newInstance.apply(r,[this].concat(a))}),void 0!==o?o:this})},e.Control.prototype.update=function(t){e.extend(this.options,t),this.on()},e});