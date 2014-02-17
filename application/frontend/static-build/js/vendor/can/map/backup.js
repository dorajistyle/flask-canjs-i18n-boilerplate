/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map","can/util/object"],function(t){var e=function(t,e){var n={};for(var i in t)n[i]="object"!=typeof t[i]||null===t[i]||t[i]instanceof Date?t[i]:e.attr(i);return n};return t.extend(t.Map.prototype,{backup:function(){return this._backupStore=this._attrs(),this},isDirty:function(e){return this._backupStore&&!t.Object.same(this._attrs(),this._backupStore,void 0,void 0,void 0,!!e)},restore:function(t){var n=t?this._backupStore:e(this._backupStore,this);return this.isDirty(t)&&this._attrs(n,!0),this}}),t.Map});