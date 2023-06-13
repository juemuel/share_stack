# 常见问题

## 一、问题索引

1. 🚩前端概念+行业概念
2. 路由、MPA 和 SPA是什么？
3. 行业相关：什么是SSR、SSG？PaaS？
4. 前后端分离是什么？
5. 怎么理解mvc->mvvm？
6. 🚩HTTP+Web

4. 浏览器的重绘和回流？触发回流的操作？

5. 浏览器进程有哪些？它们之间的阻塞问题？
6. 浏览器/移动端web优化的手段？如何通过HTML、CSS、JS优化？
7. 浏览器的数据存储方式有哪些？浏览器内不同页面之间的通信？
8. 进程和线程是什么？锁是什么
9. 如何实现跨浏览器兼容？
10. 如何实现跨移动端开发？响应式｜自适应开发？
11. 如何实现跨PC端开发？
12. 你用过哪些网络协议？它们的区别？（HTTP和websocket的区别）
13. 一次HTTP请求从客户端到服务端所经过的各个环节？
14. HTTP请求？响应？
15. HTTP的缓存头有哪些、它们的区别？cookie、token在HTTP中的字段？
16. URL和URI分别是什么
17. 🚩**HTML+CSS**
18. HTML5特性有？
19. CSS3特性有？
20. CSS Transition、Animation
21. 动画实现方案
22. less，sass使用经验
23. html的head标签的属性有哪些？
24. html的iframe标签有什么缺点
25. WCAG无障碍指南：如何提高web可访问性、易用性
26. 如何提高web可扩展性
27. 你知道的web标准有哪些？
28. 你用过哪些常用CSS库
29. 🚩场景问题
30. 如何实现登陆后刷新仍然保存登陆状态的机制
31. 如何实现应用的性能和异常监控？
32. 100万pv访问，前端如何配合后端处理压力？
33. 如何做前端的数据校验？监听回车事件vue有现成的啊、按钮监听；防抖啊～

## 二、附录

### 路由、MPA 和 SPA是什么？

1. 路由的概念原本来源于服务端，传统URL访问是每次返回HTML文件，一次性全部渲染的。
2. 后来出现了AJAX技术，支持局部渲染（不变浏览器URL就完成了局部渲染），但同时页面的前后连续性因此遭到破坏
3. 前端路由提供了浏览器地址变化，保证前进、后退的前后连续性。
4. MPA：传统后端路由，URL映射后端处理函数，返回的是HTML文件 、回到来全部的刷新
5. SPA：用到前端路由，URL映射不同的局部UI 、实现局部的刷新；

### 领域了解：什么是SSR、SSG、PaSS？

1. SSR：服务端渲染（利于爬虫SEO、服务端返回比客户端更快）将Web应用程序的内容在服务器端生成HTML并发送到客户端的方式
2. SSG：预处理（如md）的静态网站生成器（同SSR优点）一般对静态页这么做，如About、Contact等。也有提供SSG服务的厂商。
3. PaaS：平台即服务，一种云计算模型，提供了一个云平台以方便应用程序开发、测试和部署。

### 前后端分离是什么？

1. 分离：方便的通过AJAX访问接口来做数据的交互。从过去水深火热的高耦合的前后端代码里解脱出来。
2. 一个后端可以有多个前端如web端、应用端、小程序端。

### 怎么理解mvc->mvvm？

1. MVC是前端View ➕ 后端Model和Controller，传统的开发架构，ajax没有的时候，数据也得在后端处理，前端通过一些jsp来配合，耦合度高。页面逻辑：请求URL返回，返回…这样子。
2. 随着AJAX出现，可以异步获取数据了，不必每次都刷新整个页面。这就代表可以数据放到前端来处理。首加载请求URL返回HTML，后面ajax请求接口也能异步返回JSON数据。
3. MVVM是～，后端Model➕前端View和ViewModel，比如Vue

1. ViewModel ：是用来同步 `View` 和 `Model` 的对象。（典型例子Vue）（双向数据绑定、虚拟DOM）

### 浏览器的重绘和回流？触发回流的操作？一些关于CSS的回流问题

1. 重绘不一定是回流
2. 回流一定重绘
3. 触发回流操作：本质是看是否改变元素尺寸或DOM布局。CSS很多动画操作是不触发的；display:none会触发；opacity不会；
4. 回流问题：如果动态加载CSS是否会造成回流？
   1. 关键：动态加载CSS，当影响页面结构时，则有可能造成页面回流，造成JS阻塞。
   2. ❓如果加载absolute的长宽为0盒子？是否回回流？
   3. ❓如果加载CSS transform是否会？如transision 3D


### 浏览器进程有哪些？一些关于CSS、JS的阻塞问题？

1. 浏览器进程

   1. 主进程（浏览器主进程）
   2. 关键：渲染进程（V8➕解析渲染）
      1. 解析渲染线程
      2. JS引擎线程
      3. 其他：事件触发、定时器等
      4. ①②是同步互斥的，因为会互相干扰呀～重绘回流。DOM操作本质上就是两个线程都想要搞点事情，所以要减少。
   3. GPU进程（浏览器界面、CSS动画）
   4. 网络进程
   5. 插件进程
2. 阻塞问题：如果CSS下载慢、JS下载慢会怎么样？
   1. ❓css animation会阻塞js V8引擎吗？
   2. ❓ 使用property的css left会阻塞js V8引擎吗？

### 浏览器/移动端web优化的手段？如何通过HTML、CSS、JS优化？

1. 加载时资源优化：减少资源请求、资源体积
2. 渲染时JS优化：减少阻塞、重绘回流➕JS代码效率
   1. 具体来讲：避免循环里获取DOM、事件机制优化（避免对li重复绑定事件函数）、将敏感数据缓存读取再去循环操作
3. HTML优化：不要用iframe、CSS头、JS尾等
4. 文件缓存
5. 请求优化（批次-多请求）
   1. requestAnimationFrame
   2. setTimeout+节流
6. 图片优化
   1. 小图片优化：图片iconfont、base64内嵌、雪碧图
   2. 大图片优化：压缩处理
   3. 图片懒加载（视窗-长图列）
7. 路由懒加载（模块化：import、require）

### 浏览器的数据存储方式有哪些？浏览器内不同页面之间的通信？

1. Cache
2. localStorage
3. sessionStorage

### 进程和线程是什么？锁是什么

1. 进程是程序；线程是进程的基本执行单元。可以理解为车间、工人，车间中的资源可以是共享的。
2. 这个时候就有一个问题，如果多个线程要操作同一个变量，并且满足至少一个线程发生写的操作：读写、写写，那么就会发生数据冲突导致线程安全问题，实质：异步的线程中使用了同步的机制保障线程安全。比如说加锁，对某个资源的操作做了个互斥。

### 如何实现跨浏览器兼容？

1. CSS-hack
2. CSS3厂商前缀-webpack可以预编译

### 如何实现跨移动端开发？响应式、自适应开发？有哪些方案？

1. HTML5国内叫H5（特指移动端 js 桥 api + webview +h5，也可以叫做PWA渐进式webAPP->再特指一点，营销传播的手机网页）

2. 1. ①flex布局、Grid布局
   2. ②媒体查询、rem、vw
   3. ④响应式框架：bootstrap等
   4. ③图片响应式：srcset

3. 原生方案：原生>Flutter、RN、小程序｜不足：权限、风控、缓存｜弹窗～

4. 1. RN：自己适应不同平台组件
   2. flutter：自己实现了不同平台组件

### 如何实现跨PC端开发？

### 你用过哪些网络协议？它们的区别？（HTTP和websocket的区别）

1. http是请求-响应模式，一问一答，因此～上表现比较差
2. websocket是全双工，解决了～的不足

### 一次HTTP请求从客户端到服务端所经过的各个环节？



### HTTP请求？响应？



### HTTP的缓存头有哪些、它们的区别？cookie、token在HTTP中的字段？



### URL和URI分别是什么？



### HTML5特性有？



### CSS3特性有？



### CSS Transfrom、Transition、Animation

1. 变形（transform）：提供结果
2. 过渡（transition）：提供过程，属性值平滑过渡，要结合 :hover 伪类
   1. property：过渡属性（背景颜色、长、宽、all）
   2. duration：过渡时间
   3. timing-function：过渡方式
   4. delay：延迟时间
3. 动画（animation）

### 动画实现方案

1. setTimeOut、requestAnimationFrame、CSS的Transition、Animation

### less，sass使用经验

嵌套、函数、变量

### html的head标签的属性有哪些？

meta、keywords、icon

### html的iframe标签有什么缺点

阻塞

### WCAG无障碍指南：如何提高web可访问性、易用性

1. img的alt描述
2. 视频字幕等、错误提示、警告提示

### 如何提高web可扩展性

### 你知道的web标准有哪些？

1. HTTP、CSS、ECMAScript、WCAG

### 你用过哪些常用CSS库？

1. Bootsreap
2. Animate css
3. 等等

### 如何实现登陆后刷新仍然保存登陆状态的机制？

localStorage等机制

### 如何实现应用的性能和异常监控？

webAPI中的window.error、window.performance，lightroom

### 100万pv访问，前端如何配合后端处理压力？

见

### 如何做前端的数据校验？

监听回车事件，按钮监听；防抖啊～

一些框架、组件库会提供现成啊、
