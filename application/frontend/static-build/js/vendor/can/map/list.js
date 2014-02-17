/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map","can/list","can/compute"],function(t){return t.extend(t.List.prototype,{filter:function(e){var n=new this.constructor,i=this,r=function(r){var o=function(t,e){var i=n.indexOf(r);e||-1===i||n.splice(i,1),e&&-1===i&&n.push(r)},a=t.compute(function(){return e(r,i.indexOf(r),i)});a.bind("change",o),o(null,a())};return this.bind("add",function(e,n,i){t.each(n,function(t,e){r(t,i+e)})}),this.bind("remove",function(e,i){t.each(i,function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}),this.forEach(r),n},map:function(e){var n=new t.List,i=this,r=function(r,o){var a=t.compute(function(){return e(r,o,i)});a.bind("change",function(t,e){n.splice(o,1,e)}),n.splice(o,0,a())};return this.forEach(r),this.bind("add",function(e,n,i){t.each(n,function(t,e){r(t,i+e)})}),this.bind("remove",function(t,e,i){n.splice(i,e.length)}),n}}),t.List});