import { p as promiseResolve, b as bootstrapLazy } from './index-0b121673.js';
export { s as setNonce } from './index-0b121673.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.17.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["login-form_2",[[1,"login-form",{"email":[32],"password":[32],"code":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

//# sourceMappingURL=stencil-project.js.map