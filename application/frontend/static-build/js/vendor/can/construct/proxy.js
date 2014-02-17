/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/construct"],function(e){var t=(e.isFunction,e.isArray),n=e.makeArray,i=function(e){var i,r=n(arguments);return e=r.shift(),t(e)||(e=[e]),i=this,function(){for(var o,a,s=r.concat(n(arguments)),u=e.length,l=0;u>l;l++)a=e[l],a&&(o="string"==typeof a,s=(o?i[a]:a).apply(i,s||[]),u-1>l&&(s=!t(s)||s._use_call?[s]:s));return s}};e.Construct.proxy=e.Construct.prototype.proxy=i;for(var r=[e.Map,e.Control,e.Model],o=0;o<r.length;o++)r[o]&&(r[o].proxy=i);return e});