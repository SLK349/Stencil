import{r as t,d as i,h as e,H as s,e as n}from"./p-df30d222.js";const o=":host{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;flex:1;contain:layout size style}";const a=o;const r=class{constructor(e){t(this,e);this.ionNavWillLoad=i(this,"ionNavWillLoad",7);this.ionTabsWillChange=i(this,"ionTabsWillChange",3);this.ionTabsDidChange=i(this,"ionTabsDidChange",3);this.transitioning=false;this.onTabClicked=t=>{const{href:i,tab:e}=t.detail;if(this.useRouter&&i!==undefined){const t=document.querySelector("ion-router");if(t){t.push(i)}}else{this.select(e)}};this.selectedTab=undefined;this.useRouter=false}async componentWillLoad(){if(!this.useRouter){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")}if(!this.useRouter){const t=this.tabs;if(t.length>0){await this.select(t[0])}}this.ionNavWillLoad.emit()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");if(t){const i=this.selectedTab?this.selectedTab.tab:undefined;t.selectedTab=i}}async select(t){const i=h(this.tabs,t);if(!this.shouldSwitch(i)){return false}await this.setActive(i);await this.notifyRouter();this.tabSwitch();return true}async getTab(t){return h(this.tabs,t)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:undefined)}async setRouteId(t){const i=h(this.tabs,t);if(!this.shouldSwitch(i)){return{changed:false,element:this.selectedTab}}await this.setActive(i);return{changed:true,element:this.selectedTab,markVisible:()=>this.tabSwitch()}}async getRouteId(){var t;const i=(t=this.selectedTab)===null||t===void 0?void 0:t.tab;return i!==undefined?{id:i,element:this.selectedTab}:undefined}setActive(t){if(this.transitioning){return Promise.reject("transitioning already happening")}this.transitioning=true;this.leavingTab=this.selectedTab;this.selectedTab=t;this.ionTabsWillChange.emit({tab:t.tab});t.active=true;return Promise.resolve()}tabSwitch(){const t=this.selectedTab;const i=this.leavingTab;this.leavingTab=undefined;this.transitioning=false;if(!t){return}if(i!==t){if(i){i.active=false}this.ionTabsDidChange.emit({tab:t.tab})}}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t){return t.navChanged("forward")}}return Promise.resolve(false)}shouldSwitch(t){const i=this.selectedTab;return t!==undefined&&t!==i&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return e(s,{key:"13d9b30a83eb565b635ec7c547bd99da8c96aaa0",onIonTabButtonClick:this.onTabClicked},e("slot",{key:"d885dbf0134cd5d256f7e3e9fc4844636c2c6cbf",name:"top"}),e("div",{key:"2f48887902d47c0e29afb8da450da22b874b0e76",class:"tabs-inner"},e("slot",{key:"bcdb41418edc7d176e570c37bb6a6ba1dc123f7d"})),e("slot",{key:"85101e7c57cf8cda04bd3a125f1207faf85110d2",name:"bottom"}))}get el(){return n(this)}};const h=(t,i)=>{const e=typeof i==="string"?t.find((t=>t.tab===i)):i;if(!e){console.error(`tab with id: "${e}" does not exist`)}return e};r.style=a;export{r as ion_tabs};
//# sourceMappingURL=p-8e0f8e8e.entry.js.map