import{_ as a,o,c as p,V as n,C as s,a as l}from"./chunks/framework.0fd66c21.js";const f=JSON.parse('{"title":"Vite","description":"","frontmatter":{},"headers":[],"relativePath":"FECommon/Engineer/vite.md","lastUpdated":1682343111000}'),e={name:"FECommon/Engineer/vite.md"},t=n('<h1 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p><img src="https://s2.loli.net/2023/04/24/ado32lTtwhRVWA8.webp" alt="img"></p><ul><li><p>工程化痛点：模块化、语法转译、代码质量、开发效率</p></li><li><p>主流工具链</p><ul><li>高级语法：ts、sass、jsx等</li><li>编译：esbuild</li><li>打包：rollup</li><li>质量：terser、babel</li></ul></li><li><p>babel细节</p><ul><li><p><code>@babel/preset-env</code> 的 <code>useBuiltIns</code> 属性各个取值有哪些区别？</p></li><li><p><code>@babel/polyfill</code> 与 <code>@babel/runtime-corejs</code> 有什么区别？</p></li><li><p><code>@babel/plugin-transform-runtime</code> 与<code>@babel/preset-env</code> 的 <code>useBuiltIn</code> 相比有什么优化？</p></li></ul></li><li><p>ESBuild</p></li><li><p>Rollup</p></li></ul><h3 id="模块化发展" tabindex="-1">模块化发展 <a class="header-anchor" href="#模块化发展" aria-label="Permalink to &quot;模块化发展&quot;">​</a></h3>',5),c=s("ul",null,[s("li",null,[s("p",null,"无模块化标准阶段->各种模块规范")]),s("li",null,[s("p",null,"无模块化标准阶段"),s("ul",null,[s("li",null,"文件划分：命名冲突、依赖顺序模糊"),s("li",null,[l("命名空间：解决命名冲突|依赖顺序模糊 "),s("ul",null,[s("li",{"css-module":".此处定义"},"window.moduleA")])]),s("li",null,"IIFE：解决命名冲突、私有化访问|依赖顺序模糊")])]),s("li",null,[s("p",null,"CommonJS规范（最早的JS规范、用于服务端）：module.exports、require"),s("ul",null,[s("li",null,[s("div",{class:"language-javascript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// module-a.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"var"),s("span",{style:{color:"#A6ACCD"}}," data "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hello world"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getData"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"data"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"module.exports"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  getData"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// index.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#A6ACCD"}}," getData "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"require"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./module-a.js"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#82AAFF"}},"getData"),s("span",{style:{color:"#A6ACCD"}},"())"),s("span",{style:{color:"#89DDFF"}},";")])])])])]),s("li",null,[s("p",null,"实际上被Node的loader转译为IIFE写法")]),s("li",null,[s("p",null,"缺点：基于Node无法直接到浏览器使用（可以Browserify转译过去）、CommonJS本身通过同步方式加载模块放浏览器会限制性能")])])]),s("li",null,[s("p",null,"AMD规范（异步模块定义规范、适合浏览器了）：define"),s("ul",null,[s("li",null,[s("div",{class:"language-javascript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// main.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"define"),s("span",{style:{color:"#A6ACCD"}},"(["),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./print"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"]"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"printModule"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"printModule"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"main"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 或")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"require"),s("span",{style:{color:"#A6ACCD"}},"(["),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./print.js"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"]"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"printModule"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"printModule"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"module-a"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// print.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"define"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"print"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"msg"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"print "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"msg"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")])])])])]),s("li",null,[s("p",null,"没有得到浏览器原生支持，需要用第三方loader实现，如requireJS库")])])]),s("li",null,[s("p",null,"ES Module"),s("ul",null,[s("li",null,[s("p",null,'script标签中加入type="module"，则浏览器按ES Module加载解析')]),s("li",null,[s("p",null,"Node支持ES Module")]),s("li",null,[s("div",{class:"language-javascript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// 1. main.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"methodA"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./module-a.js"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"methodA"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"//2. module-a.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," methodA "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"a"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"methodA"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// .html")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"module"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./main.js"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// node环境，package.json")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"type"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},": "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"module"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"// commonJS套ES Module")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"async"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"func"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// 加载一个 ES 模块")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// 文件名后缀需要是 mjs")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"a"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"./module-a.mjs"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"a"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"func"),s("span",{style:{color:"#A6ACCD"}},"()"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"module.exports"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  func"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")])])])])])])])],-1),r=n(`<h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><h3 id="快速搭建vite项目" tabindex="-1">快速搭建Vite项目 <a class="header-anchor" href="#快速搭建vite项目" aria-label="Permalink to &quot;快速搭建Vite项目&quot;">​</a></h3><ul><li><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">node </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v </span><span style="color:#676E95;font-style:italic;">// 需要12.0.0 及以上版本</span></span>
<span class="line"><span style="color:#A6ACCD;">npm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v </span><span style="color:#676E95;font-style:italic;">// 不推荐用npm、yarn了，建议pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm config set registry </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm create vite </span><span style="color:#676E95;font-style:italic;">// 输入项目名、选择前端框架、选择开发语言（按react、react-ts做例）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 测试发现vite比creat-react-app创建项目快6倍</span></span>
<span class="line"><span style="color:#A6ACCD;">cd vite</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">project </span><span style="color:#676E95;font-style:italic;">// 进入项目目录</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install </span><span style="color:#676E95;font-style:italic;">// 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run dev </span><span style="color:#676E95;font-style:italic;">// 启动项目</span></span></code></pre></div></li><li><p>目录结构、项目入口、配置文件</p><ul><li><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├── index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── pnpm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">lock</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── src</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">css</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── App</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── favicon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">css</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── logo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tsx</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── vite</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tsconfig</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">└── vite</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span></code></pre></div></li><li><p>index.html是项目的入口文件，当访问<code>http://localhost:3000</code>时，Vite 的 Dev Server 会自动返回这个 HTML 文件的内容</p><ul><li>在 Vite 项目中，一个import代表一个HTTP请求</li><li>Vite不是像webpack先打包再加载，而是浏览器读到import时，对其请求资源处理再返回给浏览器解析的代码</li><li>也即项目背后的启动流程，强调了<code>一个 import 语句代表一个 HTTP 请求</code>，而正是 Vite 的 Dev Server 来接收这些请求、进行文件转译以及返回浏览器可以运行的代码，从而让项目正常运行。</li></ul></li><li><p>vite.config.ts是配置文件</p><ul><li><p>plugin属性</p></li><li><p>root：可以手动指定项目根目录位置，<code>root: path.join(__dirname, &#39;src&#39;)</code>，自动返回 src 目录下的<code>index.html</code></p><ul><li><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入 path 包注意两点:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 为避免类型报错，你需要通过 \`pnpm i @types/node -D\` 安装类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. tsconfig.node.json 中设置 \`allowSyntheticDefaultImports: true\`，以允许下面的 default 导入方式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> react </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 手动指定项目根目录位置</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span><span style="color:#82AAFF;">react</span><span style="color:#A6ACCD;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li></ul></li><li><p>更多见下方各类方案</p></li></ul></li><li><p>package.json</p><ul><li><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 开发阶段启动 Vite Dev Server</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 生产环境打包</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tsc &amp;&amp; vite build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 生产环境打包完预览产物</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite preview</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre></div></li><li><p>支持生产环境打包的～不过底层没有实现类型检查，用了tsc、vue中是vue-tsc，自个儿看。</p></li><li><p>pnpm run build，打包</p></li><li><p>pnpm run preview，预览</p></li></ul></li></ul></li></ul><h3 id="样式方案" tabindex="-1">样式方案 <a class="header-anchor" href="#样式方案" aria-label="Permalink to &quot;样式方案&quot;">​</a></h3><ul><li><p>原生CSS方案：不支持选择器嵌套、样式污染；浏览器前缀添加不便；代码体积大</p><ul><li><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// </span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">css</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// </span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">css</span></span>
<span class="line"><span style="color:#A6ACCD;">// 很有可能覆盖 </span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">css</span><span style="color:#A6ACCD;"> 的样式！</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 选择器只能平铺，不能嵌套</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">nav</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">text</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">nav</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid grey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li></ul></li><li><p>CSS方案</p><ul><li>CSS预处理器：Sass/Scss、Less、Stylus，支持嵌套、变量、逻辑语句</li><li>CSS Modules：处理成哈希值，避免污染</li><li>CSS后处理器：PostCSS，解析处理代码，px-&gt;rem，自动添加浏览器前缀</li><li>CSS in JS：emotion<code>、</code>styled-components，包含预处理器和 CSS Modules的各项优点，非常灵活</li><li>CSS原子化框架：Tailwind CSS、Windi CSS</li></ul></li><li><p>SASS</p><ul><li><p>自动注入变量方案</p></li><li><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1.1 index.tsx引入scss</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Header</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">This is Header</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.2 index.scss手动或自动注入变量</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @import &quot;../../variable&quot;; // 当开启自动注入就不需要手动注入了</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">header </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$theme</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.3 variable.scss</span></span>
<span class="line"><span style="color:#A6ACCD;">$theme</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.4 开启自动注入</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">normalizePath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 全局 scss 文件的路径，用 normalizePath 解决 window 下的路径问题</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> variablePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">normalizePath</span><span style="color:#A6ACCD;">(path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/variable.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// css 相关的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preprocessorOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">scss</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// additionalData 的内容会在每个 scss 文件的开头自动注入</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">additionalData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">@import &quot;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">variablePath</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&quot;;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li><li></li></ul></li></ul><h3 id="规范方案" tabindex="-1">规范方案 <a class="header-anchor" href="#规范方案" aria-label="Permalink to &quot;规范方案&quot;">​</a></h3><h3 id="资源方案" tabindex="-1">资源方案 <a class="header-anchor" href="#资源方案" aria-label="Permalink to &quot;资源方案&quot;">​</a></h3><h3 id="预构建方案" tabindex="-1">预构建方案 <a class="header-anchor" href="#预构建方案" aria-label="Permalink to &quot;预构建方案&quot;">​</a></h3><h2 id="双引擎esbuild、rollup" tabindex="-1">双引擎ESBuild、Rollup <a class="header-anchor" href="#双引擎esbuild、rollup" aria-label="Permalink to &quot;双引擎ESBuild、Rollup&quot;">​</a></h2>`,9),D=[t,c,r];function y(F,i,C,A,u,d){return o(),p("div",null,D)}const h=a(e,[["render",y]]);export{f as __pageData,h as default};