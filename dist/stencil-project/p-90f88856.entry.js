import{r as s,d as t,w as i,i as e,h,e as n,H as a}from"./p-df30d222.js";import{a as o,p as r,g as l}from"./p-16592453.js";import{g as c}from"./p-64733d3b.js";import"./p-f5e0d65c.js";import"./p-bd6f674d.js";const f="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";const d=f;const p=class{constructor(i){s(this,i);this.ionInfinite=t(this,"ionInfinite",7);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.onScroll=()=>{const s=this.scrollEl;if(!s||!this.canStart()){return 1}const t=this.el.offsetHeight;if(t===0){return 2}const i=s.scrollTop;const e=s.scrollHeight;const h=s.offsetHeight;const n=this.thrPc!==0?h*this.thrPc:this.thrPx;const a=this.position==="bottom"?e-t-i-n-h:i-t-n;if(a<0){if(!this.didFire){this.isLoading=true;this.didFire=true;this.ionInfinite.emit();return 3}}return 4};this.isLoading=false;this.threshold="15%";this.disabled=false;this.position="bottom"}thresholdChanged(){const s=this.threshold;if(s.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(s)/100}else{this.thrPx=parseFloat(s);this.thrPc=0}}disabledChanged(){const s=this.disabled;if(s){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(!s)}async connectedCallback(){const s=o(this.el);if(!s){r(this.el);return}this.scrollEl=await l(s);this.thresholdChanged();this.disabledChanged();if(this.position==="top"){i((()=>{if(this.scrollEl){this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight}}))}}disconnectedCallback(){this.enableScrollEvents(false);this.scrollEl=undefined}async complete(){const s=this.scrollEl;if(!this.isLoading||!s){return}this.isLoading=false;if(this.position==="top"){this.isBusy=true;const t=s.scrollHeight-s.scrollTop;requestAnimationFrame((()=>{e((()=>{const e=s.scrollHeight;const h=e-t;requestAnimationFrame((()=>{i((()=>{s.scrollTop=h;this.isBusy=false;this.didFire=false}))}))}))}))}else{this.didFire=false}}canStart(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading}enableScrollEvents(s){if(this.scrollEl){if(s){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}}render(){const s=c(this);const t=this.disabled;return h(a,{key:"e844956795f69be33396ce4480aa7a54ad01b28c",class:{[s]:true,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!t}})}get el(){return n(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};p.style=d;export{p as ion_infinite_scroll};
//# sourceMappingURL=p-90f88856.entry.js.map