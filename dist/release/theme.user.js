// ==UserScript==
// @name          Boilerplate for Userstyles
// @description   Boilerplate to create userstyles with LiveReload feature.
// @version       0.0.2
// @author        Thiago Braga <contato@thiagobraga.org>
// @license       MIT
// @namespace     https://github.com/thiagobraga
// @homepageURL   https://github.com/thiagobraga/boilerplate-userstyles
// @supportURL    https://github.com/thiagobraga/boilerplate-userstyles/issues
// @updateURL     https://github.com/thiagobraga/boilerplate-userstyles/raw/master/release/theme.meta.js
// @downloadURL   https://github.com/thiagobraga/boilerplate-userstyles/raw/master/release/theme.user.js
// @run-at        document-start
// @include       http://localhost/*
// @include       https://localhost/*
// @include       http://*.localhost/*
// @include       https://*.localhost/*
// ==/UserScript==
(function() {var css = [
  ""
].join("\n");
if (typeof GM_addStyle != "undefined") {
  GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
  PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
  addStyle(css);
} else {
  var node = document.createElement("style");
  node.type = "text/css";
  node.appendChild(document.createTextNode(css));
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
}
})();
