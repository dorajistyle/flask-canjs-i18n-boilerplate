/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/list"],function(t){var e=t.List.prototype,n=e._changes,i=e.setup;t.extend(e,{comparator:void 0,sortIndexes:[],sortedIndex:function(t){for(var e=t.attr(this.comparator),n=0,i=0,r=this.length;r>i;i++)if(t!==this[i]){if(e<=this[i].attr(this.comparator))return i+n}else n=-1;return i+n},sort:function(e,n){var i=this.comparator,r=i?[function(t,e){return t="function"==typeof t[i]?t[i]():t[i],e="function"==typeof e[i]?e[i]():e[i],t===e?0:e>t?-1:1}]:[e];return n||t.trigger(this,"reset"),Array.prototype.sort.apply(this,r)}});var r=function(e){return e[0]&&t.isArray(e[0])?e[0]:t.makeArray(e)};return t.each({push:"length",unshift:0},function(e,n){var i=t.List.prototype,o=i[n];i[n]=function(){var n=r(arguments),i=e?this.length:0,a=o.apply(this,arguments);return this.comparator&&n.length&&(this.sort(null,!0),t.batch.trigger(this,"reset",[n]),this._triggerChange(""+i,"add",n,void 0)),a}}),e._changes=function(e,i,r,o,a){if(this.comparator&&/^\d+./.test(i)){var s=+/^\d+/.exec(i)[0],u=this[s];if("undefined"!=typeof u){var l=this.sortedIndex(u);if(l!==s)return[].splice.call(this,s,1),[].splice.call(this,l,0,u),t.trigger(this,"move",[u,l,s]),t.trigger(this,"change",[i.replace(/^\d+/,l),r,o,a]),void 0}}n.apply(this,arguments)},e.setup=function(){i.apply(this,arguments),this.comparator&&this.sort()},t.Map});