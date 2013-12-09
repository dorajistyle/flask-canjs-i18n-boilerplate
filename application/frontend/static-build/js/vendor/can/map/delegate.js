/*!
 * CanJS - 2.0.0
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Wed, 16 Oct 2013 20:40:41 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/map"],function(t){var e=function(t,e){var n,r=t.length,i=0,o=[];for(i;r>i;i++){if(n=e[i],"string"!=typeof n)return null;if("**"==t[i])return e.join(".");if("*"==t[i])o.push(n);else{if(n!==t[i])return null;o.push(n)}}return o.join(".")},n=function(n,r,i,o,a){var s,u,l,c,p,f=r.split("."),d=(this._observe_delegates||[]).slice(0);n.attr=r,n.lastAttr=f[f.length-1];for(var h=0;s=d[h++];)if(!(n.batchNum&&s.batchNum===n.batchNum||s.undelegated)){c=void 0,p=!0;for(var m=0;m<s.attrs.length;m++)u=s.attrs[m],(l=e(u.parts,f))&&(c=l),u.value&&p?p=u.value===""+this.attr(u.attr):p&&s.attrs.length>1&&(p=void 0!==this.attr(u.attr));if(c&&p){var g=r.replace(c+".","");n.batchNum&&(s.batchNum=n.batchNum),"change"===s.event?(arguments[1]=g,n.curAttr=c,s.callback.apply(this.attr(c),t.makeArray(arguments))):s.event===i?s.callback.apply(this.attr(c),[n,o,a,g]):"set"===s.event&&"add"==i&&s.callback.apply(this.attr(c),[n,o,a,g])}}};return t.extend(t.Map.prototype,{delegate:function(e,r,i){e=t.trim(e);for(var o,a=this._observe_delegates||(this._observe_delegates=[]),s=[],u=/([^\s=,]+)(?:=("[^",]*"|'[^',]*'|[^\s"',]*))?(,?)\s*/g;o=u.exec(e);)o[2]&&t.inArray(o[2].substr(0,1),['"',"'"])>=0&&(o[2]=o[2].substr(1,-1)),s.push({attr:o[1],parts:o[1].split("."),value:o[2],or:","===o[3]});return a.push({selector:e,attrs:s,callback:i,event:r}),1===a.length&&this.bind("change",n),this},undelegate:function(e,r,i){e=e&&t.trim(e);var o,a=0,s=this._observe_delegates||[];if(e)for(;a<s.length;)o=s[a],o.callback===i||!i&&o.selector===e?(o.undelegated=!0,s.splice(a,1)):a++;else s=[];return s.length||this.unbind("change",n),this}}),t.Map.prototype.delegate.matches=e,t.Map});