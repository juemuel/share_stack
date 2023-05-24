import{_ as e,o as l,c as o,V as a}from"./chunks/framework.c463baea.js";const u=JSON.parse('{"title":"WebAPI","description":"","frontmatter":{},"headers":[],"relativePath":"FECommon/WebAPI/index.md","lastUpdated":1682277100000}'),t={name:"FECommon/WebAPI/index.md"},r=a(`<h1 id="webapi" tabindex="-1">WebAPI <a class="header-anchor" href="#webapi" aria-label="Permalink to &quot;WebAPI&quot;">​</a></h1><h1 id="f-web-api" tabindex="-1">F-Web API <a class="header-anchor" href="#f-web-api" aria-label="Permalink to &quot;F-Web API&quot;">​</a></h1><blockquote><p>编写 Web 代码时，有许多 Web API 可供调用。Web API 一般用于JS环境</p></blockquote><h2 id="一、window-api" tabindex="-1">一、Window API <a class="header-anchor" href="#一、window-api" aria-label="Permalink to &quot;一、Window API&quot;">​</a></h2><ul><li>⭐️ - - - - - 数据存储</li><li><code>window.sessionStorage</code>:</li><li><code>window.localStorage</code>：setItem、getItem、removeItem、clear <ul><li><code>localStorage.setItem(&quot;jwt_token&quot;,resp.token);</code>：用resp.token创建名为jwt_token的localStorage</li><li><code>localStorage.removeItem(&quot;jwt_token&quot;);</code>：删除名为jwt_token的localStorage</li></ul></li><li>⭐️ - - - - - 性能检测</li><li><code>window.performance</code><ul><li>监控页面的白屏时间、tcp连接时间、资源加载时间、</li><li>performance.timing</li><li>performance.getEntries：展示每个静态资源加载的信息</li></ul></li><li>⭐️ - - - - - 屏幕信息与监控</li><li>物理像素（固定）和设备独立像素（可调）</li><li>layout viewport：整个HTML渲染页面的大小</li><li>visual viewport：当前查看渲染的窗口大小</li><li>调整layout viewport的大小，让其在visual viewport</li><li><code>window.innerWidth</code>：返回浏览器显示区域的CSS像素宽度</li><li><code>window.innerHeight</code>：返回浏览器显示区域的CSS像素高度</li><li><code>window.screen</code>，表示整个屏幕窗口 <ul><li><code>screen.height</code>：返回整个屏幕的像素高度</li><li><code>screen.width</code>：返回整个屏幕的像素宽度</li></ul></li><li><code>window.scroll</code></li><li><code>window.resize</code></li><li><code>window.devicePixelRatio</code>，在移动端返回的是物理像素/设备独立像素即一个设备独立像素有几个物理像素（mac端好像不容易改变机制不太一样）</li><li>❓ <code>window.innerWidth</code>和<code>document.documentElement.clientWidth</code>的区别 <ul><li>viewport的CSS像素宽度</li><li>整个HTML渲染页面的渲染宽度</li></ul></li><li>⭐️ - - - - - 异常监控</li><li><code>window.error</code></li><li>⭐️ - - - - - 动画重绘</li><li><code>window.requestAnimationFrame()</code></li><li>⭐️ - - - - -</li></ul><h2 id="二、document" tabindex="-1">二、Document <a class="header-anchor" href="#二、document" aria-label="Permalink to &quot;二、Document&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement" target="_blank" rel="noreferrer"><code>Document.documentElement</code></a></li><li><code>document.querySelector(“selector”)</code><ul><li>如果有不符合CSS语法的内容则需要用反斜杠转义；而且要两次；见<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector#%E8%BD%AC%E4%B9%89%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6" target="_blank" rel="noreferrer">document.querySelector()</a></li><li>class：<code>.CLASS_NAME</code></li><li>id：<code>#ID_NAME</code></li><li>a元素内的包含某属性的b元素：<code>a b[key=&#39;vlaue&#39;]</code></li></ul></li><li><code>document.querySelectorAll</code></li></ul><h2 id="三、element" tabindex="-1">三、Element <a class="header-anchor" href="#三、element" aria-label="Permalink to &quot;三、Element&quot;">​</a></h2><ul><li>HTML DOM</li><li><code>document.documentElement.clientWidth</code>：返回整个HTML的渲染宽度</li><li><code>document.documentElement.clientHeight</code>：返回整个HTML的渲染高度</li><li>SVG DOM</li></ul><h2 id="四、eventtarget" tabindex="-1">四、EventTarget <a class="header-anchor" href="#四、eventtarget" aria-label="Permalink to &quot;四、EventTarget&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener" target="_blank" rel="noreferrer"><code>EventTarget.addEventListener()</code></a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener" target="_blank" rel="noreferrer"><code>EventTarget.removeEventListener()</code></a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/dispatchEvent" target="_blank" rel="noreferrer"><code>EventTarget.dispatchEvent()</code></a></li></ul><h2 id="五、history-api" tabindex="-1">五、History API <a class="header-anchor" href="#五、history-api" aria-label="Permalink to &quot;五、History API&quot;">​</a></h2><blockquote><p>作用：返回会话的历史状态 场景：实现路由监听</p></blockquote><h2 id="六、intersection-observer-api" tabindex="-1">六、Intersection Observer API <a class="header-anchor" href="#六、intersection-observer-api" aria-label="Permalink to &quot;六、Intersection Observer API&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noreferrer">Intersection Observer API</a></li></ul><h2 id="七、file-api-➕-url-api" tabindex="-1">七、File API ➕ URL API <a class="header-anchor" href="#七、file-api-➕-url-api" aria-label="Permalink to &quot;七、File API ➕ URL API&quot;">​</a></h2><blockquote><p>可以研究不同类型的文件数据，转url</p></blockquote><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/File_API" target="_blank" rel="noreferrer">File API</a></li><li>blob对象表示一个不可变、原始数据的类文件对象</li><li>http资源下载逻辑：创建a，赋<code>URL.createObjectURL(fileBlobObj,{options});</code>给a.href，a.click()即可</li><li>不同的文件数据转URL</li><li>数组转url demo<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">typedArrayToURL</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">typedArray</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">mimeType</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Blob</span><span style="color:#F07178;">([</span><span style="color:#A6ACCD;">typedArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">buffer</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mimeType</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">typedArrayToURL</span><span style="color:#A6ACCD;">(bytes</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li></ul><h2 id="八、其他重要规范" tabindex="-1">八、其他重要规范 <a class="header-anchor" href="#八、其他重要规范" aria-label="Permalink to &quot;八、其他重要规范&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API" target="_blank" rel="noreferrer">Web Audio API</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API" title="Currently only available in English (US)" target="_blank" rel="noreferrer">Web NFC API</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API" target="_blank" rel="noreferrer">Web Share API - Web APIs | MDN</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API" target="_blank" rel="noreferrer">WebRTC</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API" target="_blank" rel="noreferrer">WebGL</a>：有详细的示例和资源</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebXR_Device_API" target="_blank" rel="noreferrer">WebXR</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebVR_API" target="_blank" rel="noreferrer">WebVR API</a></li></ul>`,20),n=[r];function s(i,c,p,d,h,A){return l(),o("div",null,n)}const m=e(t,[["render",s]]);export{u as __pageData,m as default};
