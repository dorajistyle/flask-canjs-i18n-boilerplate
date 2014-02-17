/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(t){var e=/^\s*<(\w+)[^>]*>/,n=function(n,i){void 0===i&&(i=e.test(n)&&RegExp.$1),n&&t.isFunction(n.replace)&&(n=n.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var r=document.createElement("div"),o=document.createElement("div");"tbody"===i||"tfoot"===i||"thead"===i?(o.innerHTML="<table>"+n+"</table>",r=3===o.firstChild.nodeType?o.lastChild:o.firstChild):"tr"===i?(o.innerHTML="<table><tbody>"+n+"</tbody></table>",r=3===o.firstChild.nodeType?o.lastChild:o.firstChild.firstChild):"td"===i||"th"===i?(o.innerHTML="<table><tbody><tr>"+n+"</tr></tbody></table>",r=3===o.firstChild.nodeType?o.lastChild:o.firstChild.firstChild.firstChild):"option"===i?(o.innerHTML="<select>"+n+"</select>",r=3===o.firstChild.nodeType?o.lastChild:o.firstChild):r.innerHTML=""+n;var a={},s=r.childNodes;a.length=s.length;for(var u=0;u<s.length;u++)a[u]=s[u];return[].slice.call(a)};return t.buildFragment=function(e){var i=n(e),r=document.createDocumentFragment();return t.each(i,function(t){r.appendChild(t)}),r},t});