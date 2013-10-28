/*!
 * CanJS - 2.0.0
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Wed, 16 Oct 2013 20:40:41 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["jquery","can/view"],function(t,e){var n,r,i,o,a,s,u={val:!0,text:!0};return n=function(n){var o=t.fn[n];t.fn[n]=function(){var t,a,l,c=e.makeArray(arguments),d=this;if(e.isDeferred(c[0]))return c[0].done(function(t){r.call(d,[t],o)}),this;if(i(c)){if(t=s(c))return a=c[t],c[t]=function(t){r.call(d,[t],o),a.call(d,t)},e.view.apply(e.view,c),this;if(l=e.view.apply(e.view,c),e.isDeferred(l))return l.done(function(t){r.call(d,[t],o)}),this;c=[l]}return u[n]?o.apply(this,c):r.call(this,c,o)}},r=function(t,n){var r;for(var i in e.view.hookups)break;return i&&t[0]&&o(t[0])&&(t[0]=e.view.frag(t[0]).childNodes),r=n.apply(this,t)},i=function(t){var e=typeof t[1];return"string"==typeof t[0]&&("object"==e||"function"==e)&&!a(t[1])},a=function(t){return t.nodeType||t[0]&&t[0].nodeType},o=function(t){return a(t)?!0:"string"==typeof t?(t=e.trim(t),"<"===t.substr(0,1)&&">"===t.substr(t.length-1,1)&&t.length>=3):!1},s=function(t){return"function"==typeof t[3]?3:"function"==typeof t[2]&&2},t.fn.hookup=function(){return e.view.frag(this),this},e.each(["prepend","append","after","before","text","html","replaceWith","val"],function(t){n(t)}),e});