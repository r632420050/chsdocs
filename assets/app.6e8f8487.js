import{_ as m,o as c,A as _,B as v,r as b,T as x,h,l as P,H as E,c as L,z as r,K as k,b as s,n as g,a4 as S,G as O,a5 as H,a6 as R,O as j,Q as D,d as M,M as p,a7 as I,u as V,p as $,k as q,a8 as F,a9 as N,aa as z,ab as G,ac as U,ad as J,ae as K,af as Q,ag as Z,ah as W,ai as X,aj as Y,ak as tt,J as et}from"./chunks/framework.a4a2ca78.js";import{t as ot}from"./chunks/theme.2656dfe8.js";const at={data(){return{elTransition:"0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out"}},methods:{beforeEnter(t){t.style.transition=this.elTransition,t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.transition=this.elTransition,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}};function nt(t,e,a,o,l,n){return c(),_(x,{onBeforeEnter:n.beforeEnter,onEnter:n.enter,onAfterEnter:n.afterEnter,onBeforeLeave:n.beforeLeave,onLeave:n.leave,onAfterLeave:n.afterLeave},{default:v(()=>[b(t.$slots,"default")]),_:3},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])}const y=m(at,[["render",nt]]);const w=t=>(j("data-v-84f57ae2"),t=t(),D(),t),st={class:"codeBox"},rt={class:"container"},it={class:"operation"},dt=["data-tip"],ct=w(()=>r("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:"arco-icon arco-icon-code","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"miter","data-v-1bd552f0":""},[r("path",{d:"M16.734 12.686 5.42 24l11.314 11.314m14.521-22.628L42.57 24 31.255 35.314M27.2 6.28l-6.251 35.453"})],-1)),pt=[ct],lt=["data-tip"],ut=w(()=>r("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:"arco-icon arco-icon-copy","stroke-width":"4","stroke-linecap":"butt","stroke-linejoin":"miter","data-v-1bd552f0":""},[r("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"})],-1)),ft=[ut],ht=["innerHTML"],gt={components:{collapseTransition:y}},mt=Object.assign(gt,{__name:"CodeBox",props:{source:{type:String,require:!0},rawSource:{type:String,require:!0},path:{type:String,require:!0}},setup(t){const e=t,a=Object.assign({});let o=h(!1);const l=P(()=>`${o.value?"收起":"展开"}代码`);let n=h("复制代码");const u=d=>decodeURIComponent(d),T=u(e.source),C=e.path?E(a[`../examples/${e.path}`]):null,A=()=>{navigator.clipboard.writeText(u(e.rawSource)),n.value="复制成功";let d=null;setTimeout(()=>{n.value="复制代码",clearTimeout(d)},2e3)};return(d,f)=>(c(),L("section",st,[r("div",rt,[(c(),_(k(s(C))))]),r("div",it,[r("button",{"data-tip":s(l),class:g({open:s(o)}),onClick:f[0]||(f[0]=Ct=>S(o)?o.value=!s(o):o=!s(o))},pt,10,dt),r("button",{"data-tip":s(n),onClick:A},ft,8,lt)]),O(y,null,{default:v(()=>[H(r("div",{class:g({sourceCode:!0,open:s(o)}),innerHTML:s(T)},null,10,ht),[[R,s(o)]])]),_:1})]))}}),_t=m(mt,[["__scopeId","data-v-84f57ae2"]]),vt={...ot,enhanceApp:async({app:t,router:e,siteData:a})=>{t.component("CodeBox",_t)}};function B(t){if(t.extends){const e=B(t.extends);return{...e,...t,async enhanceApp(a){e.enhanceApp&&await e.enhanceApp(a),t.enhanceApp&&await t.enhanceApp(a)}}}return t}const i=B(vt),yt=M({name:"VitePressApp",setup(){const{site:t}=V();return $(()=>{q(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),F(),N(),z(),i.setup&&i.setup(),()=>G(i.Layout)}});async function wt(){const t=Tt(),e=Bt();e.provide(U,t);const a=J(t.route);return e.provide(K,a),e.component("Content",Q),e.component("ClientOnly",Z),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),i.enhanceApp&&await i.enhanceApp({app:e,router:t,siteData:W}),{app:e,router:t,data:a}}function Bt(){return X(yt)}function Tt(){let t=p,e;return Y(a=>{let o=tt(a);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),p&&(t=!1),et(()=>import(o),[])},i.NotFound)}p&&wt().then(({app:t,router:e,data:a})=>{e.go().then(()=>{I(e.route,a.site),t.mount("#app")})});export{wt as createApp};