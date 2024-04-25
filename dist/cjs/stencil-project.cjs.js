'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713f5fda.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.17.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-project.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["login-form_2.cjs",[[1,"login-form",{"email":[32],"password":[32],"code":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=stencil-project.cjs.js.map