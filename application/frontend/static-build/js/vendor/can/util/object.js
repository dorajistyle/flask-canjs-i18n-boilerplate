/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library"],function(t){var e=t.isArray;t.Object={};var n=t.Object.same=function(i,o,a,s,u,l){var c,d=typeof i,f=e(i),p=typeof a;if(("string"===p||null===a)&&(a=r[a],p="function"),"function"===p)return a(i,o,s,u);if(a=a||{},i instanceof Date)return i===o;if(-1===l)return"object"===d||i===o;if(d!==typeof o||f!==e(o))return!1;if(i===o)return!0;if(f){if(i.length!==o.length)return!1;for(var h=0;h<i.length;h++)if(c=void 0===a[h]?a["*"]:a[h],!n(i[h],o[h],i,o,c))return!1;return!0}if("object"===d||"function"===d){var g=t.extend({},o);for(var m in i){if(c=void 0===a[m]?a["*"]:a[m],!n(i[m],o[m],c,i,o,l===!1?-1:void 0))return!1;delete g[m]}for(m in g)if(void 0===a[m]||!n(void 0,o[m],a[m],i,o,l===!1?-1:void 0))return!1;return!0}return!1};t.Object.subsets=function(e,n,r){for(var i=n.length,o=[],a=0;i>a;a++){var s=n[a];t.Object.subset(e,s,r)&&o.push(s)}return o},t.Object.subset=function(t,e,r){r=r||{};for(var i in e)if(!n(t[i],e[i],r[i],t,e))return!1;return!0};var r={"null":function(){return!0},i:function(t,e){return(""+t).toLowerCase()===(""+e).toLowerCase()}};return t.Object});