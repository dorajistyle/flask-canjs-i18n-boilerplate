/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/construct"],function(t){var e=t.isFunction,n=/xyz/.test(function(){})?/\b_super\b/:/.*/;return t.Construct._overwrite=function(t,r,i,o){t[i]=e(o)&&e(r[i])&&n.test(o)?function(t,e){return function(){var n,i=this._super;return this._super=r[t],n=e.apply(this,arguments),this._super=i,n}}(i,o):o},t.Construct._inherit=function(e,n,r){r=r||e;for(var i in e)t.Construct._overwrite(r,n,i,e[i])},t});