/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can","zepto","can/util/object/isplain","can/util/event","can/util/fragment","can/util/deferred","can/util/array/each","can/util/inserted"],function(t){function e(t,e){var a=t[s],u=a&&i[a];return void 0===e?u||n(t):u&&u[e]||o.call(r(t),e)}function n(t,e,n){var r=t[s]||(t[s]=++a),o=i[r]||(i[r]={});return void 0!==e&&(o[e]=n),o}var r=Zepto,i={},o=r.fn.data,a=r.uuid=+new Date,s=r.expando="Zepto"+a;r.fn.data=function(t,i){return void 0===i?0==this.length?void 0:e(this[0],t):this.each(function(o){n(this,t,r.isFunction(i)?i.call(this,o,e(this,t)):i)})},r.cleanData=function(e){for(var n,r=0;void 0!==(n=e[r]);r++)t.trigger(n,"removed",[],!1);for(var n,r=0;void 0!==(n=e[r]);r++){var o=n[s];delete i[o]}};var u=t.each;r.extend(t,Zepto),t.each=u;var l=function(t,e){return t[0]&&t[0][e]||t[e]};t.trigger=function(e,n,i,o){e.trigger?e.trigger(n,i):l(e,"dispatchEvent")?o===!1?r([e]).triggerHandler(n,i):r([e]).trigger(n,i):("string"==typeof n&&(n={type:n}),n.target=n.target||e,t.dispatch.call(e,n,i))},t.$=Zepto,t.bind=function(e,n){return this.bind?this.bind(e,n):l(this,"addEventListener")?r([this]).bind(e,n):t.addEvent.call(this,e,n),this},t.unbind=function(e,n){return this.unbind?this.unbind(e,n):l(this,"addEventListener")?r([this]).unbind(e,n):t.removeEvent.call(this,e,n),this},t.on=t.bind,t.off=t.unbind,t.delegate=function(t,e,n){this.delegate?this.delegate(t,e,n):r([this]).delegate(t,e,n)},t.undelegate=function(t,e,n){this.undelegate?this.undelegate(t,e,n):r([this]).undelegate(t,e,n)},r.each(["append","filter","addClass","remove","data","has"],function(e,n){t[n]=function(e){return e[n].apply(e,t.makeArray(arguments).slice(1))}}),t.makeArray=function(e){var n=[];return t.each(e,function(t,e){n[e]=t}),n},t.proxy=function(t,e){return function(){return t.apply(e,arguments)}};var c=r.ajaxSettings.xhr;r.ajaxSettings.xhr=function(){var t=c(),e=t.open;return t.open=function(t,n){e.call(this,t,n,void 0===d?!0:d)},t};var d,f=r.ajax,p=function(t,e){for(var n in t)e[n]="function"==typeof e[n]?function(){t[n].apply(t,arguments)}:n[t]};return t.ajax=function(e){var n=e.success,r=e.error,i=t.Deferred();e.success=function(t){p(o,i),i.resolve.call(i,t),n&&n.apply(this,arguments)},e.error=function(){p(o,i),i.reject.apply(i,arguments),r&&r.apply(this,arguments)},e.async===!1&&(d=!1);var o=f(e);return d=void 0,p(o,i),i},r.fn.empty=function(){return this.each(function(){r.cleanData(this.getElementsByTagName("*")),this.innerHTML=""})},r.fn.remove=function(){return this.each(function(){this.getElementsByTagName&&r.cleanData([this].concat(t.makeArray(this.getElementsByTagName("*")))),null!=this.parentNode&&this.parentNode.removeChild(this)}),this},t.trim=function(t){return t.trim()},t.isEmptyObject=function(t){var e;for(e in t);return void 0===e},t.extend=function(e){if(e===!0){var n=t.makeArray(arguments);return n.shift(),r.extend.apply(r,n)}return r.extend.apply(r,arguments)},t.get=function(t,e){return t[e]},t.each(["after","prepend","before","append","html"],function(e){var n=Zepto.fn[e];Zepto.fn[e]=function(){var e,i=t.makeArray(arguments);null!=i[0]&&("string"==typeof i[0]&&(i[0]=r.zepto.fragment(i[0])),e=11===i[0].nodeType?t.makeArray(i[0].childNodes):[i[0]]);var o=n.apply(this,i);return t.inserted(e),o}}),t});