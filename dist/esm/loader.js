import { b as bootstrapLazy } from './index-0b121673.js';
export { s as setNonce } from './index-0b121673.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["login-form_2",[[1,"login-form",{"email":[32],"password":[32],"code":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map