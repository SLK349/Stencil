import{r as t,d as e,h as o,H as r,e as i}from"./p-df30d222.js";import{B as s,p as n,s as a,b as p,f as c,d,e as h}from"./p-853b70d2.js";import{C as l,a as f,d as v}from"./p-62e7c4b4.js";import{b as u,g,a as m,h as b}from"./p-f5e0d65c.js";import{c as x}from"./p-25ec5224.js";import{p as w}from"./p-bd6f674d.js";import{g as k,a as y}from"./p-64733d3b.js";import{g as P}from"./p-100c2286.js";import{d as D,w as T}from"./p-0c5e4162.js";import{c as $}from"./p-1fd4aad1.js";import"./p-3647f076.js";import"./p-11462911.js";import"./p-c7ee7cfe.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const I=t=>{if(!t){return{arrowWidth:0,arrowHeight:0}}const{width:e,height:o}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:o}};const j=(t,e,o)=>{const r=e.getBoundingClientRect();const i=r.height;let s=r.width;if(t==="cover"&&o){const t=o.getBoundingClientRect();s=t.width}return{contentWidth:s,contentHeight:i}};const A=(t,e,o,r)=>{let i=[];const s=g(r);const n=s.querySelector(".popover-content");switch(e){case"hover":i=[{eventName:"mouseenter",callback:e=>{const r=document.elementFromPoint(e.clientX,e.clientY);if(r===t){return}o.dismiss(undefined,undefined,false)}}];break;case"context-menu":case"click":default:i=[{eventName:"click",callback:e=>{const r=e.target;const i=r.closest("[data-ion-popover-trigger]");if(i===t){e.stopPropagation();return}o.dismiss(undefined,undefined,false)}}];break}i.forEach((({eventName:t,callback:e})=>n.addEventListener(t,e)));return()=>{i.forEach((({eventName:t,callback:e})=>n.removeEventListener(t,e)))}};const L=(t,e,o)=>{let r=[];switch(e){case"hover":let t;r=[{eventName:"mouseenter",callback:async e=>{e.stopPropagation();if(t){clearTimeout(t)}t=setTimeout((()=>{u((()=>{o.presentFromTrigger(e);t=undefined}))}),100)}},{eventName:"mouseleave",callback:e=>{if(t){clearTimeout(t)}const r=e.relatedTarget;if(!r){return}if(r.closest("ion-popover")!==o){o.dismiss(undefined,undefined,false)}}},{eventName:"click",callback:t=>t.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:t=>o.presentFromTrigger(t,true)}];break;case"context-menu":r=[{eventName:"contextmenu",callback:t=>{t.preventDefault();o.presentFromTrigger(t)}},{eventName:"click",callback:t=>t.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:t=>o.presentFromTrigger(t,true)}];break;case"click":default:r=[{eventName:"click",callback:t=>o.presentFromTrigger(t)},{eventName:"ionPopoverActivateTrigger",callback:t=>o.presentFromTrigger(t,true)}];break}r.forEach((({eventName:e,callback:o})=>t.addEventListener(e,o)));t.setAttribute("data-ion-popover-trigger","true");return()=>{r.forEach((({eventName:e,callback:o})=>t.removeEventListener(e,o)));t.removeAttribute("data-ion-popover-trigger")}};const N=(t,e)=>{if(!e||e.tagName!=="ION-ITEM"){return-1}return t.findIndex((t=>t===e))};const W=(t,e)=>{const o=N(t,e);return t[o+1]};const O=(t,e)=>{const o=N(t,e);return t[o-1]};const C=t=>{const e=g(t);const o=e.querySelector("button");if(o){u((()=>o.focus()))}};const z=t=>t.hasAttribute("data-ion-popover-trigger");const X=t=>{const e=async e=>{var o;const r=document.activeElement;let i=[];const s=(o=e.target)===null||o===void 0?void 0:o.tagName;if(s!=="ION-POPOVER"&&s!=="ION-ITEM"){return}try{i=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(t){}switch(e.key){case"ArrowLeft":const o=await t.getParentPopover();if(o){t.dismiss(undefined,undefined,false)}break;case"ArrowDown":e.preventDefault();const s=W(i,r);if(s!==undefined){C(s)}break;case"ArrowUp":e.preventDefault();const n=O(i,r);if(n!==undefined){C(n)}break;case"Home":e.preventDefault();const a=i[0];if(a!==undefined){C(a)}break;case"End":e.preventDefault();const p=i[i.length-1];if(p!==undefined){C(p)}break;case"ArrowRight":case" ":case"Enter":if(r&&z(r)){const t=new CustomEvent("ionPopoverActivateTrigger");r.dispatchEvent(t)}break}};t.addEventListener("keydown",e);return()=>t.removeEventListener("keydown",e)};const Y=(t,e,o,r,i,s,n,a,p,c,d)=>{var h;let l={top:0,left:0,width:0,height:0};switch(s){case"event":if(!d){return p}const t=d;l={top:t.clientY,left:t.clientX,width:1,height:1};break;case"trigger":default:const e=d;const o=c||((h=e===null||e===void 0?void 0:e.detail)===null||h===void 0?void 0:h.ionShadowTarget)||(e===null||e===void 0?void 0:e.target);if(!o){return p}const r=o.getBoundingClientRect();l={top:r.top,left:r.left,width:r.width,height:r.height};break}const f=V(n,l,e,o,r,i,t);const v=B(a,n,l,e,o);const u=f.top+v.top;const g=f.left+v.left;const{arrowTop:m,arrowLeft:b}=S(n,r,i,u,g,e,o,t);const{originX:x,originY:w}=E(n,a,t);return{top:u,left:g,referenceCoordinates:l,arrowTop:m,arrowLeft:b,originX:x,originY:w}};const E=(t,e,o)=>{switch(t){case"top":return{originX:H(e),originY:"bottom"};case"bottom":return{originX:H(e),originY:"top"};case"left":return{originX:"right",originY:M(e)};case"right":return{originX:"left",originY:M(e)};case"start":return{originX:o?"left":"right",originY:M(e)};case"end":return{originX:o?"right":"left",originY:M(e)}}};const H=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}};const M=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}};const S=(t,e,o,r,i,s,n,a)=>{const p={arrowTop:r+n/2-e/2,arrowLeft:i+s-e/2};const c={arrowTop:r+n/2-e/2,arrowLeft:i-e*1.5};switch(t){case"top":return{arrowTop:r+n,arrowLeft:i+s/2-e/2};case"bottom":return{arrowTop:r-o,arrowLeft:i+s/2-e/2};case"left":return p;case"right":return c;case"start":return a?c:p;case"end":return a?p:c;default:return{arrowTop:0,arrowLeft:0}}};const V=(t,e,o,r,i,s,n)=>{const a={top:e.top,left:e.left-o-i};const p={top:e.top,left:e.left+e.width+i};switch(t){case"top":return{top:e.top-r-s,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+s,left:e.left};case"left":return a;case"start":return n?p:a;case"end":return n?a:p}};const B=(t,e,o,r,i)=>{switch(t){case"center":return K(e,o,r,i);case"end":return R(e,o,r,i);case"start":default:return{top:0,left:0}}};const R=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r-e.height),left:0};case"top":case"bottom":default:return{top:0,left:-(o-e.width)}}};const K=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r/2-e.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(o/2-e.width/2)}}};const F=(t,e,o,r,i,s,n,a,p,c,d,h,l=0,f=0,v=0)=>{let u=l;const g=f;let m=o;let b=e;let x;let w=c;let k=d;let y=false;let P=false;const D=h?h.top+h.height:s/2-a/2;const T=h?h.height:0;let $=false;if(m<r+p){m=r;y=true;w="left"}else if(n+r+m+p>i){P=true;m=i-n-r;w="right"}if(D+T+a>s&&(t==="top"||t==="bottom")){if(D-a>0){b=Math.max(12,D-a-T-(v-1));u=b+a;k="bottom";$=true}else{x=r}}return{top:b,left:m,bottom:x,originX:w,originY:k,checkSafeAreaLeft:y,checkSafeAreaRight:P,arrowTop:u,arrowLeft:g,addPopoverBottomClass:$}};const U=(t,e=false,o,r)=>{if(!o&&!r){return false}if(t!=="top"&&t!=="bottom"&&e){return false}return true};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const _=5;const q=(t,e)=>{var o;const{event:r,size:i,trigger:s,reference:n,side:a,align:p}=e;const c=t.ownerDocument;const d=c.dir==="rtl";const h=c.defaultView.innerWidth;const l=c.defaultView.innerHeight;const f=g(t);const v=f.querySelector(".popover-content");const u=f.querySelector(".popover-arrow");const m=s||((o=r===null||r===void 0?void 0:r.detail)===null||o===void 0?void 0:o.ionShadowTarget)||(r===null||r===void 0?void 0:r.target);const{contentWidth:b,contentHeight:x}=j(i,v,m);const{arrowWidth:w,arrowHeight:k}=I(u);const y={top:l/2-x/2,left:h/2-b/2,originX:d?"right":"left",originY:"top"};const P=Y(d,b,x,w,k,n,a,p,y,s,r);const D=i==="cover"?0:_;const T=i==="cover"?0:25;const{originX:A,originY:L,top:N,left:W,bottom:O,checkSafeAreaLeft:C,checkSafeAreaRight:z,arrowTop:X,arrowLeft:E,addPopoverBottomClass:H}=F(a,P.top,P.left,D,h,l,b,x,T,P.originX,P.originY,P.referenceCoordinates,P.arrowTop,P.arrowLeft,k);const M=$();const S=$();const V=$();S.addElement(f.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);V.addElement(f.querySelector(".popover-arrow")).addElement(f.querySelector(".popover-content")).fromTo("opacity",.01,1);return M.easing("ease").duration(100).beforeAddWrite((()=>{if(i==="cover"){t.style.setProperty("--width",`${b}px`)}if(H){t.classList.add("popover-bottom")}if(O!==undefined){v.style.setProperty("bottom",`${O}px`)}const e=" + var(--ion-safe-area-left, 0)";const o=" - var(--ion-safe-area-right, 0)";let n=`${W}px`;if(C){n=`${W}px${e}`}if(z){n=`${W}px${o}`}v.style.setProperty("top",`calc(${N}px + var(--offset-y, 0))`);v.style.setProperty("left",`calc(${n} + var(--offset-x, 0))`);v.style.setProperty("transform-origin",`${L} ${A}`);if(u!==null){const t=P.top!==N||P.left!==W;const e=U(a,t,r,s);if(e){u.style.setProperty("top",`calc(${X}px + var(--offset-y, 0))`);u.style.setProperty("left",`calc(${E}px + var(--offset-x, 0))`)}else{u.style.setProperty("display","none")}}})).addAnimation([S,V])};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const G=t=>{const e=g(t);const o=e.querySelector(".popover-content");const r=e.querySelector(".popover-arrow");const i=$();const s=$();const n=$();s.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(e.querySelector(".popover-arrow")).addElement(e.querySelector(".popover-content")).fromTo("opacity",.99,0);return i.easing("ease").afterAddWrite((()=>{t.style.removeProperty("--width");t.classList.remove("popover-bottom");o.style.removeProperty("top");o.style.removeProperty("left");o.style.removeProperty("bottom");o.style.removeProperty("transform-origin");if(r){r.style.removeProperty("top");r.style.removeProperty("left");r.style.removeProperty("display")}})).duration(300).addAnimation([s,n])};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const J=12;const Q=(t,e)=>{var o;const{event:r,size:i,trigger:s,reference:n,side:a,align:p}=e;const c=t.ownerDocument;const d=c.dir==="rtl";const h=c.defaultView.innerWidth;const l=c.defaultView.innerHeight;const f=g(t);const v=f.querySelector(".popover-content");const u=s||((o=r===null||r===void 0?void 0:r.detail)===null||o===void 0?void 0:o.ionShadowTarget)||(r===null||r===void 0?void 0:r.target);const{contentWidth:m,contentHeight:b}=j(i,v,u);const x={top:l/2-b/2,left:h/2-m/2,originX:d?"right":"left",originY:"top"};const w=Y(d,m,b,0,0,n,a,p,x,s,r);const k=i==="cover"?0:J;const{originX:y,originY:P,top:D,left:T,bottom:I}=F(a,w.top,w.left,k,h,l,m,b,0,w.originX,w.originY,w.referenceCoordinates);const A=$();const L=$();const N=$();const W=$();const O=$();L.addElement(f.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);N.addElement(f.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1);W.addElement(v).beforeStyles({top:`calc(${D}px + var(--offset-y, 0px))`,left:`calc(${T}px + var(--offset-x, 0px))`,"transform-origin":`${P} ${y}`}).beforeAddWrite((()=>{if(I!==undefined){v.style.setProperty("bottom",`${I}px`)}})).fromTo("transform","scale(0.8)","scale(1)");O.addElement(f.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return A.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((()=>{if(i==="cover"){t.style.setProperty("--width",`${m}px`)}if(P==="bottom"){t.classList.add("popover-bottom")}})).addAnimation([L,N,W,O])};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Z=t=>{const e=g(t);const o=e.querySelector(".popover-content");const r=$();const i=$();const s=$();i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return r.easing("ease").afterAddWrite((()=>{t.style.removeProperty("--width");t.classList.remove("popover-bottom");o.style.removeProperty("top");o.style.removeProperty("left");o.style.removeProperty("bottom");o.style.removeProperty("transform-origin")})).duration(150).addAnimation([i,s])};const tt=':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:flex;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports (backdrop-filter: blur(0)){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}';const et=tt;const ot=":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:flex;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;transform-origin:left top}:host-context([dir=rtl]) .popover-content{transform-origin:right top}[dir=rtl] .popover-content{transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){transform-origin:right top}}.popover-viewport{transition-delay:100ms}.popover-wrapper{opacity:0}";const rt=ot;const it=class{constructor(o){t(this,o);this.didPresent=e(this,"ionPopoverDidPresent",7);this.willPresent=e(this,"ionPopoverWillPresent",7);this.willDismiss=e(this,"ionPopoverWillDismiss",7);this.didDismiss=e(this,"ionPopoverDidDismiss",7);this.didPresentShorthand=e(this,"didPresent",7);this.willPresentShorthand=e(this,"willPresent",7);this.willDismissShorthand=e(this,"willDismiss",7);this.didDismissShorthand=e(this,"didDismiss",7);this.ionMount=e(this,"ionMount",7);this.parentPopover=null;this.coreDelegate=l();this.lockController=x();this.inline=false;this.focusDescendantOnPresent=false;this.onBackdropTap=()=>{this.dismiss(undefined,s)};this.onLifecycle=t=>{const e=this.usersElement;const o=st[t.type];if(e&&o){const r=new CustomEvent(o,{bubbles:false,cancelable:false,detail:t.detail});e.dispatchEvent(r)}};this.configureTriggerInteraction=()=>{const{trigger:t,triggerAction:e,el:o,destroyTriggerInteraction:r}=this;if(r){r()}if(t===undefined){return}const i=this.triggerEl=t!==undefined?document.getElementById(t):null;if(!i){w(`A trigger element with the ID "${t}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el);return}this.destroyTriggerInteraction=L(i,e,o)};this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:t,el:e}=this;if(t){t()}this.destroyKeyboardInteraction=X(e)};this.configureDismissInteraction=()=>{const{destroyDismissInteraction:t,parentPopover:e,triggerAction:o,triggerEl:r,el:i}=this;if(!e||!r){return}if(t){t()}this.destroyDismissInteraction=A(r,o,i,e)};this.presented=false;this.hasController=false;this.delegate=undefined;this.overlayIndex=undefined;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.component=undefined;this.componentProps=undefined;this.keyboardClose=true;this.cssClass=undefined;this.backdropDismiss=true;this.event=undefined;this.showBackdrop=true;this.translucent=false;this.animated=true;this.htmlAttributes=undefined;this.triggerAction="click";this.trigger=undefined;this.size="auto";this.dismissOnSelect=false;this.reference="trigger";this.side="bottom";this.alignment=undefined;this.arrow=true;this.isOpen=false;this.keyboardEvents=false;this.keepContentsMounted=false}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){if(t===true&&e===false){this.present()}else if(t===false&&e===true){this.dismiss()}}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;n(e);t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;if(t){t()}}componentWillLoad(){const{el:t}=this;const e=a(t);this.parentPopover=t.closest(`ion-popover:not(#${e})`);if(this.alignment===undefined){this.alignment=k(this)==="ios"?"center":"start"}}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;if(e===true){u((()=>this.present()))}if(t){m(t,"ionPopoverWillDismiss",(()=>{this.dismiss(undefined,undefined,false)}))}this.configureTriggerInteraction()}async presentFromTrigger(t,e=false){this.focusDescendantOnPresent=e;await this.present(t);this.focusDescendantOnPresent=false}getDelegate(t=false){if(this.workingDelegate&&!t){return{delegate:this.workingDelegate,inline:this.inline}}const e=this.el.parentNode;const o=this.inline=e!==null&&!this.hasController;const r=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:r}}async present(t){const e=await this.lockController.lock();if(this.presented){e();return}const{el:o}=this;const{inline:r,delegate:i}=this.getDelegate(true);this.ionMount.emit();this.usersElement=await f(i,o,this.component,["popover-viewport"],this.componentProps,r);if(!this.keyboardEvents){this.configureKeyboardInteraction()}this.configureDismissInteraction();if(b(o)){await D(this.usersElement)}else if(!this.keepContentsMounted){await T()}await p(this,"popoverEnter",q,Q,{event:t||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment});if(this.focusDescendantOnPresent){c(o)}e()}async dismiss(t,e,o=true){const r=await this.lockController.lock();const{destroyKeyboardInteraction:i,destroyDismissInteraction:s}=this;if(o&&this.parentPopover){this.parentPopover.dismiss(t,e,o)}const n=await d(this,t,e,"popoverLeave",G,Z,this.event);if(n){if(i){i();this.destroyKeyboardInteraction=undefined}if(s){s();this.destroyDismissInteraction=undefined}const{delegate:t}=this.getDelegate();await v(t,this.usersElement)}r();return n}async getParentPopover(){return this.parentPopover}onDidDismiss(){return h(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return h(this.el,"ionPopoverWillDismiss")}render(){const t=k(this);const{onLifecycle:e,parentPopover:i,dismissOnSelect:s,side:n,arrow:a,htmlAttributes:p}=this;const c=y("desktop");const d=a&&!i;return o(r,Object.assign({key:"4bccccf57df72e1196c6a28e803831c0520aef53","aria-modal":"true","no-router":true,tabindex:"-1"},p,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},P(this.cssClass)),{[t]:true,"popover-translucent":this.translucent,"overlay-hidden":true,"popover-desktop":c,[`popover-side-${n}`]:true,"popover-nested":!!i}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!i&&o("ion-backdrop",{key:"e42f4f61150b7b41093d37d187d1b7bb4187a00e",tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),o("div",{key:"386ac3247b0f82566aae07b6dbf5e97d243ce367",class:"popover-wrapper ion-overlay-wrapper",onClick:s?()=>this.dismiss():undefined},d&&o("div",{key:"28f0e5ea2fa099b808ffb77a9a0d78b8b46c1513",class:"popover-arrow",part:"arrow"}),o("div",{key:"7ba2e3dee529015c4e07ce78ec10dc59985ec6a2",class:"popover-content",part:"content"},o("slot",{key:"915cdc8e389fda210f83aec8b7bbbfa6f830a884"}))))}get el(){return i(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}};const st={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};it.style={ios:et,md:rt};export{it as ion_popover};
//# sourceMappingURL=p-445008c3.entry.js.map