/*!
 * CanJS - 2.0.0
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Wed, 16 Oct 2013 20:40:41 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/model","can/map/backup"],function(t){var e=function(e,n){var r,i,o=t.extend(!0,{},n);if(e)for(var a=0;a<e.length;a++){for(r=o,i=e[a].split(".");i.length>1;)r=r&&r[i.shift()];r&&delete r[i.shift()]}return o},n=function(e,n,r,i){this._changedAttrs=this._changedAttrs||[];var o,a,s=new t.Deferred,u=this,l=this.attr(),c=this._requestQueue,p=this._changedAttrs;return o=function(t,e,n,r){return function(){return t.constructor._makeRequest([t,l],e||(t.isNew()?"create":"update"),n,r,i)}}(this,r,function(){s.resolveWith(u,arguments),c.splice(0,1),c.length>0?c[0]=c[0]():p.splice(0)},function(){s.rejectWith(u,arguments),c.splice(0),p.splice(0)}),a=c.push(o)-1,1===c.length&&(c[0]=c[0]()),s.abort=function(){var t;return t=c[a].abort&&c[a].abort(),c.splice(a),0===c.length&&p.splice(0),t},s.then(e,n),s},r=t.Model.prototype._changes,i=t.Model.prototype.destroy,o=t.Model.prototype.setup;return t.each(["created","updated","destroyed"],function(n){var r=t.Model.prototype[n];t.Model.prototype[n]=function(t){t&&"object"==typeof t&&(t=t.attr?t.attr():t,this._backupStore=t,t=e(this._changedAttrs||[],t)),r.call(this,t)}}),t.extend(t.Model.prototype,{setup:function(){o.apply(this,arguments),this._requestQueue=new t.List},_changes:function(t,e){this._changedAttrs&&this._changedAttrs.push(e),r.apply(this,arguments)},hasQueuedRequests:function(){return this._requestQueue.attr("length")>1},save:function(){return n.apply(this,arguments)},destroy:function(t,e){return this.isNew()?i.call(this,t,e):n.call(this,t,e,"destroy","destroyed")}}),t});