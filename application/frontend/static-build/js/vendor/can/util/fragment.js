/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/can"],function(t){var e=/^\s*<(\w+)[^>]*>/,n=function(n,r){void 0===r&&(r=e.test(n)&&RegExp.$1),n&&t.isFunction(n.replace)&&(n=n.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>"));var i=document.createElement("div"),o=document.createElement("div");"tbody"===r||"tfoot"===r||"thead"===r?(o.innerHTML="<table>"+n+"</table>",i=3===o.firstChild.nodeType?o.lastChild:o.firstChild):"tr"===r?(o.innerHTML="<table><tbody>"+n+"</tbody></table>",i=3===o.firstChild.nodeType?o.lastChild:o.firstChild.firstChild):"td"===r||"th"===r?(o.innerHTML="<table><tbody><tr>"+n+"</tr></tbody></table>",i=3===o.firstChild.nodeType?o.lastChild:o.firstChild.firstChild.firstChild):"option"===r?(o.innerHTML="<select>"+n+"</select>",i=3===o.firstChild.nodeType?o.lastChild:o.firstChild):i.innerHTML=""+n;var a={},s=i.childNodes;a.length=s.length;for(var u=0;u<s.length;u++)a[u]=s[u];return[].slice.call(a)};return t.buildFragment=function(e){var r=n(e),i=document.createDocumentFragment();return t.each(r,function(t){i.appendChild(t)}),i},t});