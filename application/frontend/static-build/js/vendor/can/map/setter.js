/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map/attributes"],function(t){t.classize=function(e,n){for(var i=e.split(t.undHash),r=0;r<i.length;r++)i[r]=t.capitalize(i[r]);return i.join(n||"")};var e=t.classize,n=t.Map.prototype,i=n.__set;return n.__set=function(n,r,o,a,s){var u=e(n),l="set"+u,c=function(e){var i=s&&s.call(d,e);return i!==!1&&t.trigger(d,"error",[n,e],!0),!1},d=this;if(!this[l]||void 0!==(r=this[l](r,function(t){i.call(d,n,t,o,a,c)},c)))return i.call(d,n,r,o,a,c),this},t.Map});