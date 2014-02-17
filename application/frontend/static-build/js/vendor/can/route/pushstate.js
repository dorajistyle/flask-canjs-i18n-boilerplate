/*!
 * CanJS - 2.0.5
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Tue, 04 Feb 2014 22:36:26 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */

define(["can/util/library","can/route"],function(t){if(window.history&&history.pushState){t.route.bindings.pushstate={root:"/",paramsMatcher:/^\?(?:[^=]+=[^&]*&)*[^=]+=[^&]*/,querySeparator:"?",bind:function(){t.delegate.call(t.$(document.documentElement),"a","click",e),t.each(["pushState","replaceState"],function(e){i[e]=window.history[e],window.history[e]=function(n,r,o){var a=0===o.indexOf("http"),s=window.location.search+window.location.hash;(!a&&o!==window.location.pathname+s||a&&o!==window.location.href+s)&&(i[e].apply(window.history,arguments),t.route.setState())}}),t.bind.call(window,"popstate",t.route.setState)},unbind:function(){t.undelegate.call(t.$(document.documentElement),"click","a",e),t.each(["pushState","replaceState"],function(t){window.history[t]=i[t]}),t.unbind.call(window,"popstate",t.route.setState)},matchingPartOfURL:function(){var t=n(),e=location.pathname+location.search,i=e.indexOf(t);return e.substr(i+t.length)},setURL:function(e){r&&-1===e.indexOf("#")&&window.location.hash&&(e+=window.location.hash),window.history.pushState(null,null,t.route._call("root")+e)}};var e=function(e){if(!(e.isDefaultPrevented?e.isDefaultPrevented():e.defaultPrevented===!0)){var n=this._node||this,i=n.host||window.location.host;if(window.location.host===i){var o=t.route._call("root");if(0===n.pathname.indexOf(o)){var a=(n.pathname+n.search).substr(o.length),s=t.route.deparam(a);s.hasOwnProperty("route")&&(r=!0,window.history.pushState(null,null,n.href),e.preventDefault&&e.preventDefault())}}}},n=function(){var e=location.protocol+"//"+location.host,n=t.route._call("root"),i=n.indexOf(e);return 0===i?t.route.root.substr(e.length):n},i={},r=!1;t.route.defaultBinding="pushstate"}return t});