/*!
 * CanJS - 2.0.4
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Mon, 23 Dec 2013 19:49:14 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/route"],function(t){if(window.history&&history.pushState){t.route.bindings.pushstate={root:"/",paramsMatcher:/^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,querySeparator:"?",bind:function(){t.delegate.call(t.$(document.documentElement),"a","click",e),t.each(["pushState","replaceState"],function(e){r[e]=window.history[e],window.history[e]=function(){var n=r[e].apply(window.history,arguments);return t.route.setState(),n}}),t.bind.call(window,"popstate",t.route.setState)},unbind:function(){t.undelegate.call(t.$(document.documentElement),"click","a",e),t.each(["pushState","replaceState"],function(t){window.history[t]=r[t]}),t.unbind.call(window,"popstate",t.route.setState)},matchingPartOfURL:function(){var t=n(),e=location.pathname+location.search,r=e.indexOf(t);return e.substr(r+t.length)},setURL:function(e){i&&-1==e.indexOf("#")&&window.location.hash&&(e+=window.location.hash),window.history.pushState(null,null,t.route._call("root")+e)}};var e=function(e){if(!(e.isDefaultPrevented?e.isDefaultPrevented():e.defaultPrevented===!0)){var n=this._node||this,r=n.host||window.location.host;if(window.location.host==r){var o=t.route.deparam(n.pathname+n.search);o.hasOwnProperty("route")&&(i=!0,window.history.pushState(null,null,n.href),e.preventDefault&&e.preventDefault())}}},n=function(){var e=location.protocol+"//"+location.host,n=t.route._call("root"),r=n.indexOf(e);return 0==r?t.route.root.substr(e.length):n},r={},i=!1;t.route.defaultBinding="pushstate"}return t});