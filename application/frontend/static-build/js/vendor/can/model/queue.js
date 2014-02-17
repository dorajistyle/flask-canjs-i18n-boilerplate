/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/model","can/map/backup"],function(t){var e=function(e,n){var i,r,o=t.extend(!0,{},n);if(e)for(var a=0;a<e.length;a++){for(i=o,r=e[a].split(".");r.length>1;)i=i&&i[r.shift()];i&&delete i[r.shift()]}return o},n=function(e,n,i,r){this._changedAttrs=this._changedAttrs||[];var o,a,s=new t.Deferred,u=this,l=this.serialize(),c=this._requestQueue,d=this._changedAttrs;return o=function(t,e,n,i){return function(){return t.constructor._makeRequest([t,l],e||(t.isNew()?"create":"update"),n,i,r)}}(this,i,function(){s.resolveWith(u,arguments),c.splice(0,1),c.length>0?c[0]=c[0]():d.splice(0)},function(){s.rejectWith(u,arguments),c.splice(0),d.splice(0)}),a=c.push(o)-1,1===c.length&&(c[0]=c[0]()),s.abort=function(){var t;return t=c[a].abort&&c[a].abort(),c.splice(a),0===c.length&&d.splice(0),t},s.then(e,n),s},i=t.Model.prototype._changes,r=t.Model.prototype.destroy,o=t.Model.prototype.setup;return t.each(["created","updated","destroyed"],function(n){var i=t.Model.prototype[n];t.Model.prototype[n]=function(t){t&&"object"==typeof t&&(t=t.attr?t.attr():t,this._backupStore=t,t=e(this._changedAttrs||[],t)),i.call(this,t)}}),t.extend(t.Model.prototype,{setup:function(){o.apply(this,arguments),this._requestQueue=new t.List},_changes:function(t,e){this._changedAttrs&&this._changedAttrs.push(e),i.apply(this,arguments)},hasQueuedRequests:function(){return this._requestQueue.attr("length")>1},save:function(){return n.apply(this,arguments)},destroy:function(t,e){return this.isNew()?r.call(this,t,e):n.call(this,t,e,"destroy","destroyed")}}),t});