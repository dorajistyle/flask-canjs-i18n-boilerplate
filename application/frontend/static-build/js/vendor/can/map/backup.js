/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map","can/util/object"],function(t){var e=function(t,e){var n={};for(var r in t)n[r]="object"!=typeof t[r]||null===t[r]||t[r]instanceof Date?t[r]:e.attr(r);return n};return t.extend(t.Map.prototype,{backup:function(){return this._backupStore=this._attrs(),this},isDirty:function(e){return this._backupStore&&!t.Object.same(this._attrs(),this._backupStore,void 0,void 0,void 0,!!e)},restore:function(t){var n=t?this._backupStore:e(this._backupStore,this);return this.isDirty(t)&&this._attrs(n,!0),this}}),t.Map});