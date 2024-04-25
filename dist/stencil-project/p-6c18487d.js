import{p as n}from"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const e=(n,e)=>n.month===e.month&&n.day===e.day&&n.year===e.year;const t=(n,e)=>!!(n.year<e.year||n.year===e.year&&n.month<e.month||n.year===e.year&&n.month===e.month&&n.day!==null&&n.day<e.day);const o=(n,e)=>!!(n.year>e.year||n.year===e.year&&n.month>e.month||n.year===e.year&&n.month===e.month&&n.day!==null&&n.day>e.day);const r=(e,r,s)=>{const u=Array.isArray(e)?e:[e];for(const d of u){if(r!==undefined&&t(d,r)||s!==undefined&&o(d,s)){n("The value provided to ion-datetime is out of bounds.\n\n"+`Min: ${JSON.stringify(r)}\n`+`Max: ${JSON.stringify(s)}\n`+`Value: ${JSON.stringify(e)}`);break}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=n=>n%4===0&&n%100!==0||n%400===0;const u=(n,e)=>{if(e!==undefined){return e}const t=new Intl.DateTimeFormat(n,{hour:"numeric"});const o=t.resolvedOptions();if(o.hourCycle!==undefined){return o.hourCycle}const r=new Date("5/18/2021 00:00");const s=t.formatToParts(r);const u=s.find((n=>n.type==="hour"));if(!u){throw new Error("Hour value not found from DateTimeFormat")}switch(u.value){case"0":return"h11";case"12":return"h12";case"00":return"h23";case"24":return"h24";default:throw new Error(`Invalid hour cycle "${e}"`)}};const d=n=>n==="h23"||n==="h24";const i=(n,e)=>n===4||n===6||n===9||n===11?30:n===2?s(e)?29:28:31;const a=(n,e={month:"numeric",year:"numeric"})=>{const t=new Intl.DateTimeFormat(n,e).formatToParts(new Date);return t[0].type==="month"};const c=n=>{const e=new Intl.DateTimeFormat(n,{hour:"numeric"}).formatToParts(new Date);return e[0].type==="dayPeriod"};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;const l=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;const m=n=>{if(n===undefined){return}let e=n;if(typeof n==="string"){e=n.replace(/\[|\]|\s/g,"").split(",")}let t;if(Array.isArray(e)){t=e.map((n=>parseInt(n,10))).filter(isFinite)}else{t=[e]}return t};const y=n=>({month:parseInt(n.getAttribute("data-month"),10),day:parseInt(n.getAttribute("data-day"),10),year:parseInt(n.getAttribute("data-year"),10),dayOfWeek:parseInt(n.getAttribute("data-day-of-week"),10)});function h(e){if(Array.isArray(e)){const n=[];for(const t of e){const e=h(t);if(!e){return undefined}n.push(e)}return n}let t=null;if(e!=null&&e!==""){t=l.exec(e);if(t){t.unshift(undefined,undefined);t[2]=t[3]=undefined}else{t=f.exec(e)}}if(t===null){n(`Unable to parse date string: ${e}. Please provide a valid ISO 8601 datetime string.`);return undefined}for(let n=1;n<8;n++){t[n]=t[n]!==undefined?parseInt(t[n],10):undefined}return{year:t[1],month:t[2],day:t[3],hour:t[4],minute:t[5],ampm:t[4]<12?"am":"pm"}}const v=(n,e,r)=>{if(e&&t(n,e)){return e}else if(r&&o(n,r)){return r}return n};const w=n=>n>=12?"pm":"am";const O=(n,e)=>{const t=h(n);if(t===undefined){return}const{month:o,day:r,year:s,hour:u,minute:d}=t;const a=s!==null&&s!==void 0?s:e.year;const c=o!==null&&o!==void 0?o:12;return{month:c,day:r!==null&&r!==void 0?r:i(c,a),year:a,hour:u!==null&&u!==void 0?u:23,minute:d!==null&&d!==void 0?d:59}};const $=(n,e)=>{const t=h(n);if(t===undefined){return}const{month:o,day:r,year:s,hour:u,minute:d}=t;return{month:o!==null&&o!==void 0?o:1,day:r!==null&&r!==void 0?r:1,year:s!==null&&s!==void 0?s:e.year,hour:u!==null&&u!==void 0?u:0,minute:d!==null&&d!==void 0?d:0}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const p=n=>("0"+(n!==undefined?Math.abs(n):"0")).slice(-2);const b=n=>("000"+(n!==undefined?Math.abs(n):"0")).slice(-4);function I(n){if(Array.isArray(n)){return n.map((n=>I(n)))}let e="";if(n.year!==undefined){e=b(n.year);if(n.month!==undefined){e+="-"+p(n.month);if(n.day!==undefined){e+="-"+p(n.day);if(n.hour!==undefined){e+=`T${p(n.hour)}:${p(n.minute)}:00`}}}}else if(n.hour!==undefined){e=p(n.hour)+":"+p(n.minute)}return e}const j=(n,e)=>{if(e===undefined){return n}if(e==="am"){if(n===12){return 0}return n}if(n===12){return 12}return n+12};const T=n=>{const{dayOfWeek:e}=n;if(e===null||e===undefined){throw new Error("No day of week provided")}return C(n,e)};const D=n=>{const{dayOfWeek:e}=n;if(e===null||e===undefined){throw new Error("No day of week provided")}return U(n,6-e)};const k=n=>U(n,1);const x=n=>C(n,1);const M=n=>C(n,7);const Z=n=>U(n,7);const C=(n,e)=>{const{month:t,day:o,year:r}=n;if(o===null){throw new Error("No day provided")}const s={month:t,day:o,year:r};s.day=o-e;if(s.day<1){s.month-=1}if(s.month<1){s.month=12;s.year-=1}if(s.day<1){const n=i(s.month,s.year);s.day=n+s.day}return s};const U=(n,e)=>{const{month:t,day:o,year:r}=n;if(o===null){throw new Error("No day provided")}const s={month:t,day:o,year:r};const u=i(t,r);s.day=o+e;if(s.day>u){s.day-=u;s.month+=1}if(s.month>12){s.month=1;s.year+=1}return s};const g=n=>{const e=n.month===1?12:n.month-1;const t=n.month===1?n.year-1:n.year;const o=i(e,t);const r=o<n.day?o:n.day;return{month:e,year:t,day:r}};const E=n=>{const e=n.month===12?1:n.month+1;const t=n.month===12?n.year+1:n.year;const o=i(e,t);const r=o<n.day?o:n.day;return{month:e,year:t,day:r}};const N=(n,e)=>{const t=n.month;const o=n.year+e;const r=i(t,o);const s=r<n.day?r:n.day;return{month:t,year:o,day:s}};const P=n=>N(n,-1);const A=n=>N(n,1);const G=(n,e,t)=>{if(e){return n}return j(n,t)};const V=(n,e)=>{const{ampm:t,hour:o}=n;let r=o;if(t==="am"&&e==="pm"){r=j(r,"pm")}else if(t==="pm"&&e==="am"){r=Math.abs(r-12)}return r};const W=(n,t,o)=>{const{month:r,day:s,year:u}=n;const d=v(Object.assign({},n),t,o);const a=i(r,u);if(s!==null&&a<s){d.day=a}if(t!==undefined&&e(d,t)){if(d.hour!==undefined&&t.hour!==undefined){if(d.hour<t.hour){d.hour=t.hour;d.minute=t.minute}else if(d.hour===t.hour&&d.minute!==undefined&&t.minute!==undefined&&d.minute<t.minute){d.minute=t.minute}}}if(o!==undefined&&e(n,o)){if(d.hour!==undefined&&o.hour!==undefined){if(d.hour>o.hour){d.hour=o.hour;d.minute=o.minute}else if(d.hour===o.hour&&d.minute!==undefined&&o.minute!==undefined&&d.minute>o.minute){d.minute=o.minute}}}return d};const F=({refParts:n,monthValues:r,dayValues:s,yearValues:u,hourValues:d,minuteValues:i,minParts:a,maxParts:c})=>{const{hour:f,minute:l,day:m,month:y,year:h}=n;const v=Object.assign(Object.assign({},n),{dayOfWeek:undefined});if(u!==undefined){const n=u.filter((n=>{if(a!==undefined&&n<a.year){return false}if(c!==undefined&&n>c.year){return false}return true}));v.year=J(h,n)}if(r!==undefined){const n=r.filter((n=>{if(a!==undefined&&v.year===a.year&&n<a.month){return false}if(c!==undefined&&v.year===c.year&&n>c.month){return false}return true}));v.month=J(y,n)}if(m!==null&&s!==undefined){const n=s.filter((n=>{if(a!==undefined&&t(Object.assign(Object.assign({},v),{day:n}),a)){return false}if(c!==undefined&&o(Object.assign(Object.assign({},v),{day:n}),c)){return false}return true}));v.day=J(m,n)}if(f!==undefined&&d!==undefined){const n=d.filter((n=>{if((a===null||a===void 0?void 0:a.hour)!==undefined&&e(v,a)&&n<a.hour){return false}if((c===null||c===void 0?void 0:c.hour)!==undefined&&e(v,c)&&n>c.hour){return false}return true}));v.hour=J(f,n);v.ampm=w(v.hour)}if(l!==undefined&&i!==undefined){const n=i.filter((n=>{if((a===null||a===void 0?void 0:a.minute)!==undefined&&e(v,a)&&v.hour===a.hour&&n<a.minute){return false}if((c===null||c===void 0?void 0:c.minute)!==undefined&&e(v,c)&&v.hour===c.hour&&n>c.minute){return false}return true}));v.minute=J(l,n)}return v};const J=(n,e)=>{let t=e[0];let o=Math.abs(t-n);for(let r=1;r<e.length;r++){const s=e[r];const u=Math.abs(s-n);if(u<o){t=s;o=u}}return t};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const S=n=>{if(n===undefined){return""}return n.toUpperCase()};const H=n=>Object.assign(Object.assign({},n),{timeZone:"UTC",timeZoneName:undefined});const R=(n,e,t,o={hour:"numeric",minute:"numeric"})=>{const r={hour:e.hour,minute:e.minute};if(r.hour===undefined||r.minute===undefined){return"Invalid Time"}return new Intl.DateTimeFormat(n,Object.assign(Object.assign({},H(o)),{hourCycle:t})).format(new Date(I(Object.assign({year:2023,day:1,month:1},r))+"Z"))};const q=n=>{const e=n.toString();if(e.length>1){return e}return`0${e}`};const z=(n,e)=>{if(n===0){switch(e){case"h11":return"0";case"h12":return"12";case"h23":return"00";case"h24":return"24";default:throw new Error(`Invalid hour cycle "${e}"`)}}const t=d(e);if(t){return q(n)}return n.toString()};const B=(n,e,t)=>{if(t.day===null){return null}const o=X(t);const r=new Intl.DateTimeFormat(n,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return e?`Today, ${r}`:r};const K=(n,e)=>{const t=X(e);return new Intl.DateTimeFormat(n,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)};const L=(n,e)=>_(n,e,{day:"numeric"}).find((n=>n.type==="day")).value;const Q=(n,e)=>Y(n,e,{year:"numeric"});const X=n=>{var e,t,o;const r=n.hour!==undefined&&n.minute!==undefined?` ${n.hour}:${n.minute}`:"";return new Date(`${(e=n.month)!==null&&e!==void 0?e:1}/${(t=n.day)!==null&&t!==void 0?t:1}/${(o=n.year)!==null&&o!==void 0?o:2023}${r} GMT+0000`)};const Y=(n,e,t)=>{const o=X(e);return nn(n,H(t)).format(o)};const _=(n,e,t)=>{const o=X(e);return nn(n,t).formatToParts(o)};const nn=(n,e)=>new Intl.DateTimeFormat(n,Object.assign(Object.assign({},e),{timeZone:"UTC"}));const en=n=>{if("RelativeTimeFormat"in Intl){const e=new Intl.RelativeTimeFormat(n,{numeric:"auto"}).format(0,"day");return e.charAt(0).toUpperCase()+e.slice(1)}else{return"Today"}};const tn=n=>{const e=n.getTimezoneOffset();n.setMinutes(n.getMinutes()-e);return n};const on=tn(new Date("2022T01:00"));const rn=tn(new Date("2022T13:00"));const sn=(n,e)=>{const t=e==="am"?on:rn;const o=new Intl.DateTimeFormat(n,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find((n=>n.type==="dayPeriod"));if(o){return o.value}return S(e)};const un=n=>Array.isArray(n)?n.join(","):n;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const dn=()=>tn(new Date).toISOString();const an=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];const cn=[0,1,2,3,4,5,6,7,8,9,10,11];const fn=[0,1,2,3,4,5,6,7,8,9,10,11];const ln=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];const mn=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0];const yn=(n,e,t=0)=>{const o=e==="ios"?"short":"narrow";const r=new Intl.DateTimeFormat(n,{weekday:o});const s=new Date("11/01/2020");const u=[];for(let n=t;n<t+7;n++){const e=new Date(s);e.setDate(e.getDate()+n);u.push(r.format(e))}return u};const hn=(n,e,t)=>{const o=i(n,e);const r=new Date(`${n}/1/${e}`).getDay();const s=r>=t?r-(t+1):6-(t-r);let u=[];for(let n=1;n<=o;n++){u.push({day:n,dayOfWeek:(s+n)%7})}for(let n=0;n<=s;n++){u=[{day:null,dayOfWeek:null},...u]}return u};const vn=n=>{switch(n){case"h11":return cn;case"h12":return fn;case"h23":return ln;case"h24":return mn;default:throw new Error(`Invalid hour cycle "${n}"`)}};const wn=(n,r,s="h12",i,a,c,f)=>{const l=u(n,s);const m=d(l);let y=vn(l);let h=an;let v=true;let w=true;if(c){y=y.filter((n=>c.includes(n)))}if(f){h=h.filter((n=>f.includes(n)))}if(i){if(e(r,i)){if(i.hour!==undefined){y=y.filter((n=>{const e=r.ampm==="pm"?(n+12)%24:n;return(m?n:e)>=i.hour}));v=i.hour<13}if(i.minute!==undefined){let n=false;if(i.hour!==undefined&&r.hour!==undefined){if(r.hour>i.hour){n=true}}h=h.filter((e=>{if(n){return true}return e>=i.minute}))}}else if(t(r,i)){y=[];h=[];v=w=false}}if(a){if(e(r,a)){if(a.hour!==undefined){y=y.filter((n=>{const e=r.ampm==="pm"?(n+12)%24:n;return(m?n:e)<=a.hour}));w=a.hour>=12}if(a.minute!==undefined&&r.hour===a.hour){h=h.filter((n=>n<=a.minute))}}else if(o(r,a)){y=[];h=[];v=w=false}}return{hours:y,minutes:h,am:v,pm:w}};const On=(n,e)=>{const o={month:n.month,year:n.year,day:n.day};if(e!==undefined&&(n.month!==e.month||n.year!==e.year)){const r={month:e.month,year:e.year,day:e.day};const s=t(r,o);return s?[r,o,E(n)]:[g(n),o,r]}return[g(n),o,E(n)]};const $n=(n,e,t,o,r,s={month:"long"})=>{const{year:u}=e;const d=[];if(r!==undefined){let e=r;if((o===null||o===void 0?void 0:o.month)!==undefined){e=e.filter((n=>n<=o.month))}if((t===null||t===void 0?void 0:t.month)!==undefined){e=e.filter((n=>n>=t.month))}e.forEach((e=>{const t=new Date(`${e}/1/${u} GMT+0000`);const o=new Intl.DateTimeFormat(n,Object.assign(Object.assign({},s),{timeZone:"UTC"})).format(t);d.push({text:o,value:e})}))}else{const e=o&&o.year===u?o.month:12;const r=t&&t.year===u?t.month:1;for(let t=r;t<=e;t++){const e=new Date(`${t}/1/${u} GMT+0000`);const o=new Intl.DateTimeFormat(n,Object.assign(Object.assign({},s),{timeZone:"UTC"})).format(e);d.push({text:o,value:t})}}return d};const pn=(n,e,t,o,r,s={day:"numeric"})=>{const{month:u,year:d}=e;const a=[];const c=i(u,d);const f=(o===null||o===void 0?void 0:o.day)!==null&&(o===null||o===void 0?void 0:o.day)!==undefined&&o.year===d&&o.month===u?o.day:c;const l=(t===null||t===void 0?void 0:t.day)!==null&&(t===null||t===void 0?void 0:t.day)!==undefined&&t.year===d&&t.month===u?t.day:1;if(r!==undefined){let e=r;e=e.filter((n=>n>=l&&n<=f));e.forEach((e=>{const t=new Date(`${u}/${e}/${d} GMT+0000`);const o=new Intl.DateTimeFormat(n,Object.assign(Object.assign({},s),{timeZone:"UTC"})).format(t);a.push({text:o,value:e})}))}else{for(let e=l;e<=f;e++){const t=new Date(`${u}/${e}/${d} GMT+0000`);const o=new Intl.DateTimeFormat(n,Object.assign(Object.assign({},s),{timeZone:"UTC"})).format(t);a.push({text:o,value:e})}}return a};const bn=(n,e,t,o,r)=>{var s,u;let d=[];if(r!==undefined){d=r;if((o===null||o===void 0?void 0:o.year)!==undefined){d=d.filter((n=>n<=o.year))}if((t===null||t===void 0?void 0:t.year)!==undefined){d=d.filter((n=>n>=t.year))}}else{const{year:n}=e;const r=(s=o===null||o===void 0?void 0:o.year)!==null&&s!==void 0?s:n;const i=(u=t===null||t===void 0?void 0:t.year)!==null&&u!==void 0?u:n-100;for(let n=i;n<=r;n++){d.push(n)}}return d.map((t=>({text:Q(n,{year:t,month:e.month,day:e.day}),value:t})))};const In=(n,e)=>{if(n.month===e.month&&n.year===e.year){return[n]}return[n,...In(E(n),e)]};const jn=(n,t,o,r,s,u)=>{let d=[];let i=[];let a=In(o,r);if(u){a=a.filter((({month:n})=>u.includes(n)))}a.forEach((u=>{const a={month:u.month,day:null,year:u.year};const c=pn(n,a,o,r,s,{month:"short",day:"numeric",weekday:"short"});const f=[];const l=[];c.forEach((o=>{const r=e(Object.assign(Object.assign({},a),{day:o.value}),t);l.push({text:r?en(n):o.text,value:`${a.year}-${a.month}-${o.value}`});f.push({month:a.month,year:a.year,day:o.value})}));i=[...i,...f];d=[...d,...l]}));return{parts:i,items:d}};const Tn=(n,e,t,o,r,s,i)=>{const a=u(n,t);const c=d(a);const{hours:f,minutes:l,am:m,pm:y}=wn(n,e,a,o,r,s,i);const h=f.map((n=>({text:z(n,a),value:G(n,c,e.ampm)})));const v=l.map((n=>({text:q(n),value:n})));const w=[];if(m&&!c){w.push({text:sn(n,"am"),value:"am"})}if(y&&!c){w.push({text:sn(n,"pm"),value:"pm"})}return{minutesData:v,hoursData:h,dayPeriodData:w}};export{i as A,jn as B,$n as C,pn as D,bn as E,a as F,Tn as G,c as H,yn as I,K as J,hn as K,u as L,R as M,Y as N,un as O,v as P,w as Q,V as R,L as a,o as b,e as c,g as d,E as e,y as f,B as g,A as h,t as i,P as j,D as k,T as l,x as m,k as n,M as o,Z as p,$ as q,O as r,h as s,m as t,I as u,W as v,r as w,dn as x,F as y,On as z};
//# sourceMappingURL=p-6c18487d.js.map