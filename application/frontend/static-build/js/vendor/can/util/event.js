/*!
 * CanJS - 2.0.0
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Wed, 16 Oct 2013 20:40:41 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(t){return t.addEvent=function(t,e){this.__bindEvents||(this.__bindEvents={});var n=t.split(".")[0];return this.__bindEvents[n]||(this.__bindEvents[n]=[]),this.__bindEvents[n].push({handler:e,name:t}),this},t.removeEvent=function(t,e){if(this.__bindEvents){for(var n,r=0,i=this.__bindEvents[t.split(".")[0]]||[];r<i.length;)n=i[r],e&&n.handler===e||!e&&n.name===t?i.splice(r,1):r++;return this}},t.dispatch=function(e){if(this.__bindEvents){var n=e.type.split(".")[0],r=(this.__bindEvents[n]||[]).slice(0),i=this,o=[e].concat(e.data||[]);t.each(r,function(t){e.data=o.slice(1),t.handler.apply(i,o)})}},t});