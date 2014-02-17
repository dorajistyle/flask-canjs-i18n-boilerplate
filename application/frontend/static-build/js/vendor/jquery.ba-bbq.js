/*!
 * jQuery BBQ: Back Button & Query Library - v1.3pre - 8/26/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery BBQ: Back Button & Query Library
//
// *Version: 1.3pre, Last updated: 8/26/2010*
// 
// Project Home - http://benalman.com/projects/jquery-bbq-plugin/
// GitHub       - http://github.com/cowboy/jquery-bbq/
// Source       - http://github.com/cowboy/jquery-bbq/raw/master/jquery.ba-bbq.js
// (Minified)   - http://github.com/cowboy/jquery-bbq/raw/master/jquery.ba-bbq.min.js (2.2kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// Basic AJAX     - http://benalman.com/code/projects/jquery-bbq/examples/fragment-basic/
// Advanced AJAX  - http://benalman.com/code/projects/jquery-bbq/examples/fragment-advanced/
// jQuery UI Tabs - http://benalman.com/code/projects/jquery-bbq/examples/fragment-jquery-ui-tabs/
// Deparam        - http://benalman.com/code/projects/jquery-bbq/examples/deparam/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-bbq/unit/
// 
// About: Release History
// 
// 1.3pre - (8/26/2010) Integrated <jQuery hashchange event> v1.3, which adds
//         document.title and document.domain support in IE6/7, BlackBerry
//         support, better Iframe hiding for accessibility reasons, and the new
//         <jQuery.fn.hashchange> "shortcut" method. Added the
//         <jQuery.param.sorted> method which reduces the possibility of
//         extraneous hashchange event triggering. Added the
//         <jQuery.param.fragment.ajaxCrawlable> method which can be used to
//         enable Google "AJAX Crawlable mode."
// 1.2.1 - (2/17/2010) Actually fixed the stale window.location Safari bug from
//         <jQuery hashchange event> in BBQ, which was the main reason for the
//         previous release!
// 1.2   - (2/16/2010) Integrated <jQuery hashchange event> v1.2, which fixes a
//         Safari bug, the event can now be bound before DOM ready, and IE6/7
//         page should no longer scroll when the event is first bound. Also
//         added the <jQuery.param.fragment.noEscape> method, and reworked the
//         <hashchange event (BBQ)> internal "add" method to be compatible with
//         changes made to the jQuery 1.4.2 special events API.
// 1.1.1 - (1/22/2010) Integrated <jQuery hashchange event> v1.1, which fixes an
//         obscure IE8 EmulateIE7 meta tag compatibility mode bug.
// 1.1   - (1/9/2010) Broke out the jQuery BBQ event.special <hashchange event>
//         functionality into a separate plugin for users who want just the
//         basic event & back button support, without all the extra awesomeness
//         that BBQ provides. This plugin will be included as part of jQuery BBQ,
//         but also be available separately. See <jQuery hashchange event>
//         plugin for more information. Also added the <jQuery.bbq.removeState>
//         method and added additional <jQuery.deparam> examples.
// 1.0.3 - (12/2/2009) Fixed an issue in IE 6 where location.search and
//         location.hash would report incorrectly if the hash contained the ?
//         character. Also <jQuery.param.querystring> and <jQuery.param.fragment>
//         will no longer parse params out of a URL that doesn't contain ? or #,
//         respectively.
// 1.0.2 - (10/10/2009) Fixed an issue in IE 6/7 where the hidden IFRAME caused
//         a "This page contains both secure and nonsecure items." warning when
//         used on an https:// page.
// 1.0.1 - (10/7/2009) Fixed an issue in IE 8. Since both "IE7" and "IE8
//         Compatibility View" modes erroneously report that the browser
//         supports the native window.onhashchange event, a slightly more
//         robust test needed to be added.
// 1.0   - (10/2/2009) Initial release

/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

!function(e){"$:nomunge";function t(e){return"string"==typeof e}function n(e){var t=x.call(arguments,1);return function(){return e.apply(this,t.concat(x.call(arguments)))}}function r(e){return e.replace(v,"$2")}function i(e){return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function o(n,r,i,o,a){var s,c,f,p,h;return o!==u?(f=i.match(n?v:/^([^#?]*)\??([^#]*)(#?.*)/),h=f[3]||"",2===a&&t(o)?c=o.replace(n?g:L,""):(p=d(f[2]),o=t(o)?d[n?A:N](o):o,c=2===a?o:1===a?e.extend({},o,p):e.extend({},p,o),c=l(c),n&&(c=c.replace(y,_))),s=f[1]+(n?w:c||!f[1]?"?":"")+c+h):s=r(i!==u?i:location.href),s}function a(e,n,r){return n===u||"boolean"==typeof n?(r=n,n=C[e?A:N]()):n=t(n)?n.replace(e?g:L,""):n,d(n,r)}function s(n,r,i,o){return t(i)||"object"==typeof i||(o=i,i=r,r=u),this.each(function(){var t=e(this),a=r||m()[(this.nodeName||"").toLowerCase()]||"",s=a&&t.attr(a)||"";t.attr(a,C[n](s,i,o))})}var u,l,c,d,f,p,h,m,g,v,y,b,w,x=Array.prototype.slice,_=decodeURIComponent,C=e.param,k=e.bbq=e.bbq||{},T=e.event.special,E="hashchange",N="querystring",A="fragment",S="elemUrlAttr",j="href",$="src",L=/^.*\?|#.*$/g,D={};C[N]=n(o,0,i),C[A]=c=n(o,1,r),C.sorted=l=function(t,n){var r=[],i={};return e.each(C(t,n).split("&"),function(e,t){var n=t.replace(/(?:%5B|=).*$/,""),o=i[n];o||(o=i[n]=[],r.push(n)),o.push(t)}),e.map(r.sort(),function(e){return i[e]}).join("&")},c.noEscape=function(t){t=t||"";var n=e.map(t.split(""),encodeURIComponent);y=new RegExp(n.join("|"),"g")},c.noEscape(",/"),c.ajaxCrawlable=function(e){return e!==u&&(e?(g=/^.*(?:#!|#)/,v=/^([^#]*)(?:#!|#)?(.*)$/,w="#!"):(g=/^.*#/,v=/^([^#]*)#?(.*)$/,w="#"),b=!!e),b},c.ajaxCrawlable(0),e.deparam=d=function(t,n){var r={},i={"true":!0,"false":!1,"null":null};return e.each(t.replace(/\+/g," ").split("&"),function(t,o){var a,s=o.split("="),l=_(s[0]),c=r,d=0,f=l.split("]["),p=f.length-1;if(/\[/.test(f[0])&&/\]$/.test(f[p])?(f[p]=f[p].replace(/\]$/,""),f=f.shift().split("[").concat(f),p=f.length-1):p=0,2===s.length)if(a=_(s[1]),n&&(a=a&&!isNaN(a)?+a:"undefined"===a?u:i[a]!==u?i[a]:a),p)for(;p>=d;d++)l=""===f[d]?c.length:f[d],c=c[l]=p>d?c[l]||(f[d+1]&&isNaN(f[d+1])?{}:[]):a;else e.isArray(r[l])?r[l].push(a):r[l]=r[l]!==u?[r[l],a]:a;else l&&(r[l]=n?u:"")}),r},d[N]=n(a,0),d[A]=f=n(a,1),e[S]||(e[S]=function(t){return e.extend(D,t)})({a:j,base:j,iframe:$,img:$,input:$,form:"action",link:j,script:$}),m=e[S],e.fn[N]=n(s,N),e.fn[A]=n(s,A),k.pushState=p=function(e,n){t(e)&&/^#/.test(e)&&n===u&&(n=2);var r=e!==u,i=c(location.href,r?e:{},r?n:2);location.href=i},k.getState=h=function(e,t){return e===u||"boolean"==typeof e?f(e):f(t)[e]},k.removeState=function(t){var n={};t!==u&&(n=h(),e.each(e.isArray(t)?t:arguments,function(e,t){delete n[t]})),p(n,2)},T[E]=e.extend(T[E],{add:function(t){function n(e){var t=e[A]=c();e.getState=function(e,n){return e===u||"boolean"==typeof e?d(t,e):d(t,n)[e]},r.apply(this,arguments)}var r;return e.isFunction(t)?(r=t,n):(r=t.handler,t.handler=n,void 0)}})}(jQuery,this),function(e,t,n){"$:nomunge";function r(e){return e=e||location.href,"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var i,o="hashchange",a=document,s=e.event.special,u=a.documentMode,l="on"+o in t&&(u===n||u>7);e.fn[o]=function(e){return e?this.bind(o,e):this.trigger(o)},e.fn[o].delay=50,s[o]=e.extend(s[o],{setup:function(){return l?!1:(e(i.start),void 0)},teardown:function(){return l?!1:(e(i.stop),void 0)}}),i=function(){function i(){var n=r(),a=p(c);n!==c?(f(c=n,a),e(t).trigger(o)):a!==c&&(location.href=location.href.replace(/#.*/,"")+a),s=setTimeout(i,e.fn[o].delay)}var s,u={},c=r(),d=function(e){return e},f=d,p=d;return u.start=function(){s||i()},u.stop=function(){s&&clearTimeout(s),s=n},(e.browser?e.browser.msie:e.support?0==e.support.leadingWhitespace:null)&&!l&&function(){var t,n;u.start=function(){t||(n=e.fn[o].src,n=n&&n+r(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||f(r()),i()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow,a.onpropertychange=function(){try{"title"===event.propertyName&&(t.document.title=a.title)}catch(e){}})},u.stop=d,p=function(){return r(t.location.href)},f=function(n,r){var i=t.document,s=e.fn[o].domain;n!==r&&(i.title=a.title,i.open(),s&&i.write('<script>document.domain="'+s+'"</script>'),i.close(),t.location.hash=n)}}(),u}()}(jQuery,this);