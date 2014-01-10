/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/construct"],function(t){var e=(t.isFunction,t.isArray),n=t.makeArray,r=function(t){var r,i=n(arguments);return t=i.shift(),e(t)||(t=[t]),r=this,function(){for(var o,a,s=i.concat(n(arguments)),u=t.length,l=0;u>l;l++)a=t[l],a&&(o="string"==typeof a,s=(o?r[a]:a).apply(r,s||[]),u-1>l&&(s=!e(s)||s._use_call?[s]:s));return s}};t.Construct.proxy=t.Construct.prototype.proxy=r;for(var i=[t.Map,t.Control,t.Model],o=0;o<i.length;o++)i[o]&&(i[o].proxy=r);return t});