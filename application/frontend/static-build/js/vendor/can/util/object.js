/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library"],function(t){var e=t.isArray,n=function(t){var e=0;for(var n in t)e++;return e};t.Object={};var r=t.Object.same=function(n,o,a,s,u,l){var c,d=typeof n,f=e(n),p=typeof a;if(("string"==p||null===a)&&(a=i[a],p="function"),"function"==p)return a(n,o,s,u);if(a=a||{},n instanceof Date)return n===o;if(-1===l)return"object"===d||n===o;if(d!==typeof o||f!==e(o))return!1;if(n===o)return!0;if(f){if(n.length!==o.length)return!1;for(var h=0;h<n.length;h++)if(c=void 0===a[h]?a["*"]:a[h],!r(n[h],o[h],n,o,c))return!1;return!0}if("object"===d||"function"===d){var g=t.extend({},o);for(var m in n){if(c=void 0===a[m]?a["*"]:a[m],!r(n[m],o[m],c,n,o,l===!1?-1:void 0))return!1;delete g[m]}for(m in g)if(void 0===a[m]||!r(void 0,o[m],a[m],n,o,l===!1?-1:void 0))return!1;return!0}return!1};t.Object.subsets=function(e,r,i){var o=r.length,a=[];n(e);for(var s=0;o>s;s++){var u=r[s];t.Object.subset(e,u,i)&&a.push(u)}return a},t.Object.subset=function(t,e,n){var n=n||{};for(var i in e)if(!r(t[i],e[i],n[i],t,e))return!1;return!0};var i={"null":function(){return!0},i:function(t,e){return(""+t).toLowerCase()==(""+e).toLowerCase()}};return t.Object});