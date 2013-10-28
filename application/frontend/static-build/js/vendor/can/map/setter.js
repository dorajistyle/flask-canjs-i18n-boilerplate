/*!
 * CanJS - 2.0.0
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Wed, 16 Oct 2013 20:40:41 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map/attributes"],function(t){t.classize=function(e,n){for(var r=e.split(t.undHash),i=0;i<r.length;i++)r[i]=t.capitalize(r[i]);return r.join(n||"")};var e=t.classize,n=t.Map.prototype,r=n.__set;return n.__set=function(n,i,o,a,s){var u=e(n),l="set"+u,c=function(e){var r=s&&s.call(f,e);return r!==!1&&t.trigger(f,"error",[n,e],!0),!1},f=this;if(!this[l]||void 0!==(i=this[l](i,function(t){r.call(f,n,t,o,a,c)},c)))return r.call(f,n,i,o,a,c),this},t.Map});