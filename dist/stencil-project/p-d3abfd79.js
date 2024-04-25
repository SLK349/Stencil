import{w as t}from"./p-3647f076.js";import{b as e}from"./p-f5e0d65c.js";import{a as r}from"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(r,n,o)=>{let s;let i;if(t!==undefined&&"MutationObserver"in t){const t=Array.isArray(n)?n:[n];s=new MutationObserver((r=>{for(const n of r){for(const r of n.addedNodes){if(r.nodeType===Node.ELEMENT_NODE&&t.includes(r.slot)){o();e((()=>f(r)));return}}}}));s.observe(r,{childList:true,subtree:true})}const f=t=>{var e;if(i){i.disconnect();i=undefined}i=new MutationObserver((t=>{o();for(const e of t){for(const t of e.removedNodes){if(t.nodeType===Node.ELEMENT_NODE&&t.slot===n){c()}}}}));i.observe((e=t.parentElement)!==null&&e!==void 0?e:t,{subtree:true,childList:true})};const u=()=>{if(s){s.disconnect();s=undefined}c()};const c=()=>{if(i){i.disconnect();i=undefined}};return{destroy:u}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(t,e,n)=>{const o=t==null?0:t.toString().length;const i=s(o,e);if(n===undefined){return i}try{return n(o,e)}catch(t){r("Exception in provided `counterFormatter`.",t);return i}};const s=(t,e)=>`${t} / ${e}`;export{n as c,o as g};
//# sourceMappingURL=p-d3abfd79.js.map