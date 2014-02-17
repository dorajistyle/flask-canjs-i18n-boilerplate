/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map"],function(t){var e=function(t,e){var n,i=t.length,r=0,o=[];for(r;i>r;r++){if(n=e[r],"string"!=typeof n)return null;if("**"===t[r])return e.join(".");if("*"===t[r])o.push(n);else{if(n!==t[r])return null;o.push(n)}}return o.join(".")},n=function(n,i,r,o,a){var s,u,l,c,d,p=i.split("."),f=(this._observe_delegates||[]).slice(0);n.attr=i,n.lastAttr=p[p.length-1];for(var h=0;s=f[h++];)if(!(n.batchNum&&s.batchNum===n.batchNum||s.undelegated)){c=void 0,d=!0;for(var m=0;m<s.attrs.length;m++)u=s.attrs[m],l=e(u.parts,p),l&&(c=l),u.value&&d?d=u.value===""+this.attr(u.attr):d&&s.attrs.length>1&&(d=void 0!==this.attr(u.attr));if(c&&d){var g=i.replace(c+".","");n.batchNum&&(s.batchNum=n.batchNum),"change"===s.event?(i=g,n.curAttr=c,s.callback.apply(this.attr(c),t.makeArray(arguments))):s.event===r?s.callback.apply(this.attr(c),[n,o,a,g]):"set"===s.event&&"add"===r&&s.callback.apply(this.attr(c),[n,o,a,g])}}};return t.extend(t.Map.prototype,{delegate:function(e,i,r){e=t.trim(e);for(var o,a=this._observe_delegates||(this._observe_delegates=[]),s=[],u=/([^\s=,]+)(?:=("[^",]*"|'[^',]*'|[^\s"',]*))?(,?)\s*/g;null!==(o=u.exec(e));)o[2]&&t.inArray(o[2].substr(0,1),['"',"'"])>=0&&(o[2]=o[2].substr(1,-1)),s.push({attr:o[1],parts:o[1].split("."),value:o[2],or:","===o[3]});return a.push({selector:e,attrs:s,callback:r,event:i}),1===a.length&&this.bind("change",n),this},undelegate:function(e,i,r){e=e&&t.trim(e);var o,a=0,s=this._observe_delegates||[];if(e)for(;a<s.length;)o=s[a],o.callback===r||!r&&o.selector===e?(o.undelegated=!0,s.splice(a,1)):a++;else s=[];return s.length||this.unbind("change",n),this}}),t.Map.prototype.delegate.matches=e,t.Map});