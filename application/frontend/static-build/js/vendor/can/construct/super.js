/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/construct"],function(e){var t=e.isFunction,n=/xyz/.test(function(){return this.xyz})?/\b_super\b/:/.*/;return e.Construct._overwrite=function(e,i,r,o){e[r]=t(o)&&t(i[r])&&n.test(o)?function(e,t){return function(){var n,r=this._super;return this._super=i[e],n=t.apply(this,arguments),this._super=r,n}}(r,o):o},e.Construct._inherit=function(t,n,i){i=i||t;for(var r in t)e.Construct._overwrite(i,n,r,t[r])},e});