/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map","can/list","can/compute"],function(t){return t.extend(t.List.prototype,{filter:function(e){var n=new this.constructor,r=this,i=function(i){var o=function(t,e){var r=n.indexOf(i);e||-1===r||n.splice(r,1),e&&-1===r&&n.push(i)},a=t.compute(function(){return e(i,r.indexOf(i),r)});a.bind("change",o),o(null,a())};return this.bind("add",function(e,n,r){t.each(n,function(t,e){i(t,r+e)})}),this.bind("remove",function(e,r){t.each(r,function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)})}),this.forEach(i),n},map:function(e){var n=new t.List,r=this,i=function(i,o){var a=t.compute(function(){return e(i,o,r)});a.bind("change",function(t,e){n.splice(o,1,e)}),n.splice(o,0,a())};return this.forEach(i),this.bind("add",function(e,n,r){t.each(n,function(t,e){i(t,r+e)})}),this.bind("remove",function(t,e,r){n.splice(r,e.length)}),n}}),t.List});