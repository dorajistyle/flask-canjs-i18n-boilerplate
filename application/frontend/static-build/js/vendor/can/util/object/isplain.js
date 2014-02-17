/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(t){var e=Object.prototype.hasOwnProperty,n=function(t){return null!==t&&t==t.window},r=function(t){if(!t||"object"!=typeof t||t.nodeType||n(t))return!1;try{if(t.constructor&&!e.call(t,"constructor")&&!e.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}var i;for(i in t);return void 0===i||e.call(t,i)};return t.isPlainObject=r,t});