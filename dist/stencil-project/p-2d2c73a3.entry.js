import{r as t,i as n,w as o,h as a,e,H as s}from"./p-df30d222.js";import{g as i}from"./p-64733d3b.js";const r=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}";const c=r;const f=class{constructor(n){t(this,n);this.type="bounded"}async addRipple(t,a){return new Promise((e=>{n((()=>{const n=this.el.getBoundingClientRect();const s=n.width;const i=n.height;const r=Math.sqrt(s*s+i*i);const c=Math.max(i,s);const f=this.unbounded?c:r+m;const p=Math.floor(c*d);const u=f/p;let h=t-n.left;let b=a-n.top;if(this.unbounded){h=s*.5;b=i*.5}const y=h-p*.5;const g=b-p*.5;const v=s*.5-h;const w=i*.5-b;o((()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=g+"px";n.left=y+"px";n.width=n.height=p+"px";n.setProperty("--final-scale",`${u}`);n.setProperty("--translate-end",`${v}px, ${w}px`);const o=this.el.shadowRoot||this.el;o.appendChild(t);setTimeout((()=>{e((()=>{l(t)}))}),225+100)}))}))}))}get unbounded(){return this.type==="unbounded"}render(){const t=i(this);return a(s,{key:"7ae559bda5d2c1856a45bfa150c2cb4f83373f8e",role:"presentation",class:{[t]:true,unbounded:this.unbounded}})}get el(){return e(this)}};const l=t=>{t.classList.add("fade-out");setTimeout((()=>{t.remove()}),200)};const m=10;const d=.5;f.style=c;export{f as ion_ripple_effect};
//# sourceMappingURL=p-2d2c73a3.entry.js.map