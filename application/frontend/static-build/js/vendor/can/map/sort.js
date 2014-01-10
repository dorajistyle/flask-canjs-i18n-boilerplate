/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/list"],function(t){var e=t.List.prototype,n=e._changes,r=e.setup;t.extend(e,{comparator:void 0,sortIndexes:[],sortedIndex:function(t){for(var e,n=t.attr(this.comparator),r=0,e=0,i=this.length;i>e;e++)if(t!==this[e]){if(n<=this[e].attr(this.comparator))return e+r}else r=-1;return e+r},sort:function(e,n){var r=this.comparator,i=r?[function(t,e){return t="function"==typeof t[r]?t[r]():t[r],e="function"==typeof e[r]?e[r]():e[r],t===e?0:e>t?-1:1}]:[e];[].sort.apply(this,i),!n&&t.trigger(this,"reset")}});var i=function(e){return e[0]&&t.isArray(e[0])?e[0]:t.makeArray(e)};return t.each({push:"length",unshift:0},function(e,n){var r=t.List.prototype,o=r[n];r[n]=function(){var n=i(arguments),r=e?this.length:0,a=o.apply(this,arguments);return this.comparator&&n.length&&(this.sort(null,!0),t.batch.trigger(this,"reset",[n]),this._triggerChange(""+r,"add",n,void 0)),a}}),e._changes=function(e,r,i,o,a){if(this.comparator&&/^\d+./.test(r)){var s=+/^\d+/.exec(r)[0],u=this[s];if("undefined"!=typeof u){var l=this.sortedIndex(u);if(l!==s)return[].splice.call(this,s,1),[].splice.call(this,l,0,u),t.trigger(this,"move",[u,l,s]),t.trigger(this,"change",[r.replace(/^\d+/,l),i,o,a]),void 0}}n.apply(this,arguments)},e.setup=function(){r.apply(this,arguments),this.comparator&&this.sort()},t.Map});