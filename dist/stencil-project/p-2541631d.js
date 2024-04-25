import{i as o,w as s}from"./p-df30d222.js";import{a as t,s as r}from"./p-16592453.js";import{c as n}from"./p-f5e0d65c.js";import"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const a=()=>{const a=window;a.addEventListener("statusTap",(()=>{o((()=>{const o=a.innerWidth;const i=a.innerHeight;const c=document.elementFromPoint(o/2,i/2);if(!c){return}const f=t(c);if(f){new Promise((o=>n(f,o))).then((()=>{s((async()=>{f.style.setProperty("--overflow","hidden");await r(f,300);f.style.removeProperty("--overflow")}))}))}}))}))};export{a as startStatusTap};
//# sourceMappingURL=p-2541631d.js.map