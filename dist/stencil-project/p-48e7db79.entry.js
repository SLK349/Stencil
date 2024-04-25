import{r as t,d as o,i,f as s,h as n,H as e,e as r}from"./p-df30d222.js";import{h as a,c as l}from"./p-f5e0d65c.js";import{g as c,a as h}from"./p-64733d3b.js";import{i as d}from"./p-15a24f88.js";import{c as f,h as p}from"./p-100c2286.js";const u=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);box-sizing:border-box;overflow:hidden;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:flex;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;transform:translateZ(0)}';const b=u;const v=class{constructor(i){t(this,i);this.ionScrollStart=o(this,"ionScrollStart",7);this.ionScroll=o(this,"ionScroll",7);this.ionScrollEnd=o(this,"ionScrollEnd",7);this.watchDog=null;this.isScrolling=false;this.lastScroll=0;this.queued=false;this.cTop=-1;this.cBottom=-1;this.isMainContent=true;this.resizeTimeout=null;this.tabsElement=null;this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:undefined,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:undefined,isScrolling:true};this.color=undefined;this.fullscreen=false;this.forceOverscroll=undefined;this.scrollX=false;this.scrollY=true;this.scrollEvents=false}connectedCallback(){this.isMainContent=this.el.closest("ion-menu, ion-popover, ion-modal")===null;if(a(this.el)){const t=this.tabsElement=this.el.closest("ion-tabs");if(t!==null){this.tabsLoadCallback=()=>this.resize();t.addEventListener("ionTabBarLoaded",this.tabsLoadCallback)}}}disconnectedCallback(){this.onScrollEnd();if(a(this.el)){const{tabsElement:t,tabsLoadCallback:o}=this;if(t!==null&&o!==undefined){t.removeEventListener("ionTabBarLoaded",o)}this.tabsElement=null;this.tabsLoadCallback=undefined}}onResize(){if(this.resizeTimeout){clearTimeout(this.resizeTimeout);this.resizeTimeout=null}this.resizeTimeout=setTimeout((()=>{if(this.el.offsetParent===null){return}this.resize()}),100)}shouldForceOverscroll(){const{forceOverscroll:t}=this;const o=c(this);return t===undefined?o==="ios"&&h("ios"):t}resize(){{if(this.fullscreen){i((()=>this.readDimensions()))}else if(this.cTop!==0||this.cBottom!==0){this.cTop=this.cBottom=0;s(this)}}}readDimensions(){const t=m(this.el);const o=Math.max(this.el.offsetTop,0);const i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);const n=o!==this.cTop||i!==this.cBottom;if(n){this.cTop=o;this.cBottom=i;s(this)}}onScroll(t){const o=Date.now();const s=!this.isScrolling;this.lastScroll=o;if(s){this.onScrollStart()}if(!this.queued&&this.scrollEvents){this.queued=true;i((o=>{this.queued=false;this.detail.event=t;x(this.detail,this.scrollEl,o,s);this.ionScroll.emit(this.detail)}))}}async getScrollElement(){if(!this.scrollEl){await new Promise((t=>l(this.el,t)))}return Promise.resolve(this.scrollEl)}async getBackgroundElement(){if(!this.backgroundContentEl){await new Promise((t=>l(this.el,t)))}return Promise.resolve(this.backgroundContentEl)}scrollToTop(t=0){return this.scrollToPoint(undefined,0,t)}async scrollToBottom(t=0){const o=await this.getScrollElement();const i=o.scrollHeight-o.clientHeight;return this.scrollToPoint(undefined,i,t)}async scrollByPoint(t,o,i){const s=await this.getScrollElement();return this.scrollToPoint(t+s.scrollLeft,o+s.scrollTop,i)}async scrollToPoint(t,o,i=0){const s=await this.getScrollElement();if(i<32){if(o!=null){s.scrollTop=o}if(t!=null){s.scrollLeft=t}return}let n;let e=0;const r=new Promise((t=>n=t));const a=s.scrollTop;const l=s.scrollLeft;const c=o!=null?o-a:0;const h=t!=null?t-l:0;const d=t=>{const o=Math.min(1,(t-e)/i)-1;const r=Math.pow(o,3)+1;if(c!==0){s.scrollTop=Math.floor(r*c+a)}if(h!==0){s.scrollLeft=Math.floor(r*h+l)}if(r<1){requestAnimationFrame(d)}else{n()}};requestAnimationFrame((t=>{e=t;d(t)}));return r}onScrollStart(){this.isScrolling=true;this.ionScrollStart.emit({isScrolling:true});if(this.watchDog){clearInterval(this.watchDog)}this.watchDog=setInterval((()=>{if(this.lastScroll<Date.now()-120){this.onScrollEnd()}}),100)}onScrollEnd(){if(this.watchDog)clearInterval(this.watchDog);this.watchDog=null;if(this.isScrolling){this.isScrolling=false;this.ionScrollEnd.emit({isScrolling:false})}}render(){const{isMainContent:t,scrollX:o,scrollY:i,el:s}=this;const r=d(s)?"rtl":"ltr";const a=c(this);const l=this.shouldForceOverscroll();const h=a==="ios";this.resize();return n(e,{key:"98e9658e69c0bbe0113e4c1b89dd7b240334c039",role:t?"main":undefined,class:f(this.color,{[a]:true,"content-sizing":p("ion-popover",this.el),overscroll:l,[`content-${r}`]:true}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},n("div",{key:"e89aa6ea09625846db52d63bdbf06c3c279a5ba4",ref:t=>this.backgroundContentEl=t,id:"background-content",part:"background"}),n("div",{key:"37925cf9d898ede58d5ac7b5a650c648033602a3",class:{"inner-scroll":true,"scroll-x":o,"scroll-y":i,overscroll:(o||i)&&l},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):undefined,part:"scroll"},n("slot",{key:"a40f964cacf0c2e2bdcf962791aaadb386d44323"})),h?n("div",{class:"transition-effect"},n("div",{class:"transition-cover"}),n("div",{class:"transition-shadow"})):null,n("slot",{key:"d21886cff0bc417e1f5e3a436dddc079e967579b",name:"fixed"}))}get el(){return r(this)}};const g=t=>{var o;if(t.parentElement){return t.parentElement}if((o=t.parentNode)===null||o===void 0?void 0:o.host){return t.parentNode.host}return null};const m=t=>{const o=t.closest("ion-tabs");if(o){return o}const i=t.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");if(i){return i}return g(t)};const x=(t,o,i,s)=>{const n=t.currentX;const e=t.currentY;const r=t.currentTime;const a=o.scrollLeft;const l=o.scrollTop;const c=i-r;if(s){t.startTime=i;t.startX=a;t.startY=l;t.velocityX=t.velocityY=0}t.currentTime=i;t.currentX=t.scrollLeft=a;t.currentY=t.scrollTop=l;t.deltaX=a-t.startX;t.deltaY=l-t.startY;if(c>0&&c<100){const o=(a-n)/c;const i=(l-e)/c;t.velocityX=o*.7+t.velocityX*.3;t.velocityY=i*.7+t.velocityY*.3}};v.style=b;export{v as ion_content};
//# sourceMappingURL=p-48e7db79.entry.js.map