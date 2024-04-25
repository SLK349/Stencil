import{r as t,d as s,h as e,e as i,H as r}from"./p-df30d222.js";import{a as o,g as n}from"./p-16592453.js";import{b as h}from"./p-f5e0d65c.js";import{a,b as c,c as d}from"./p-de26a437.js";import{g as l}from"./p-64733d3b.js";import"./p-bd6f674d.js";import"./p-78bffe29.js";import"./p-3647f076.js";const f=".reorder-list-active>*{display:block;transition:transform 300ms;will-change:transform}.reorder-enabled{user-select:none}.reorder-enabled ion-reorder{display:block;cursor:grab;pointer-events:all;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing}.reorder-selected{position:relative;transition:none !important;box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,  0,  0)}";const u=f;const p=class{constructor(e){t(this,e);this.ionItemReorder=s(this,"ionItemReorder",7);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0;this.disabled=true}disabledChanged(){if(this.gesture){this.gesture.enable(!this.disabled)}}async connectedCallback(){const t=o(this.el);if(t){this.scrollEl=await n(t)}this.gesture=(await import("./p-52ed752a.js")).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()});this.disabledChanged()}disconnectedCallback(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}}complete(t){return Promise.resolve(this.completeReorder(t))}canStart(t){if(this.selectedItemEl||this.state!==0){return false}const s=t.event.target;const e=s.closest("ion-reorder");if(!e){return false}const i=b(e,this.el);if(!i){return false}t.data=i;return true}onStart(t){t.event.preventDefault();const s=this.selectedItemEl=t.data;const e=this.cachedHeights;e.length=0;const i=this.el;const r=i.children;if(!r||r.length===0){return}let o=0;for(let t=0;t<r.length;t++){const s=r[t];o+=s.offsetHeight;e.push(o);s.$ionIndex=t}const n=i.getBoundingClientRect();this.containerTop=n.top;this.containerBottom=n.bottom;if(this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=t.top+g;this.scrollElBottom=t.bottom-g}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=m(s);this.selectedItemHeight=s.offsetHeight;this.state=1;s.classList.add(v);a()}onMove(t){const s=this.selectedItemEl;if(!s){return}const e=this.autoscroll(t.currentY);const i=this.containerTop-e;const r=this.containerBottom-e;const o=Math.max(i,Math.min(t.currentY,r));const n=e+o-t.startY;const h=o-i;const a=this.itemIndexForTop(h);if(a!==this.lastToIndex){const t=m(s);this.lastToIndex=a;c();this.reorderMove(t,a)}s.style.transform=`translateY(${n}px)`}onEnd(){const t=this.selectedItemEl;this.state=2;if(!t){this.state=0;return}const s=this.lastToIndex;const e=m(t);if(s===e){this.completeReorder()}else{this.ionItemReorder.emit({from:e,to:s,complete:this.completeReorder.bind(this)})}d()}completeReorder(t){const s=this.selectedItemEl;if(s&&this.state===2){const e=this.el.children;const i=e.length;const r=this.lastToIndex;const o=m(s);h((()=>{if(r!==o&&(t===undefined||t===true)){const t=o<r?e[r+1]:e[r];this.el.insertBefore(s,t)}for(let t=0;t<i;t++){e[t].style["transform"]=""}}));if(Array.isArray(t)){t=x(t,o,r)}s.style.transition="";s.classList.remove(v);this.selectedItemEl=undefined;this.state=0}return t}itemIndexForTop(t){const s=this.cachedHeights;for(let e=0;e<s.length;e++){if(s[e]>t){return e}}return s.length-1}reorderMove(t,s){const e=this.selectedItemHeight;const i=this.el.children;for(let r=0;r<i.length;r++){const o=i[r].style;let n="";if(r>t&&r<=s){n=`translateY(${-e}px)`}else if(r<t&&r>=s){n=`translateY(${e}px)`}o["transform"]=n}}autoscroll(t){if(!this.scrollEl){return 0}let s=0;if(t<this.scrollElTop){s=-j}else if(t>this.scrollElBottom){s=j}if(s!==0){this.scrollEl.scrollBy(0,s)}return this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=l(this);return e(r,{key:"a38c7fbceb677201330a602273d5b55abb32da19",class:{[t]:true,"reorder-enabled":!this.disabled,"reorder-list-active":this.state!==0}})}get el(){return i(this)}static get watchers(){return{disabled:["disabledChanged"]}}};const m=t=>t["$ionIndex"];const b=(t,s)=>{let e;while(t){e=t.parentElement;if(e===s){return t}t=e}return undefined};const g=60;const j=10;const v="reorder-selected";const x=(t,s,e)=>{const i=t[s];t.splice(s,1);t.splice(e,0,i);return t.slice()};p.style=u;export{p as ion_reorder_group};
//# sourceMappingURL=p-11ebad04.entry.js.map