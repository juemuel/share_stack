import{d as p,Q as s,a5 as i,u,q as c,k as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,ab as g,ac as v,ad as P,ae as w,af as y,ag as C,ah as _,ai as R,M as b}from"./chunks/framework.5649a8c2.js";import{t as E}from"./chunks/theme.d6932f0f.js";const D={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(D),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function O(){const e=j(),a=S();a.provide(A,e);const t=g(e.route);return a.provide(v,t),a.component("Content",P),a.component("ClientOnly",w),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:y}),{app:a,router:e,data:t}}function S(){return C(T)}function j(){let e=s,a;return _(t=>{let o=R(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),b(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
