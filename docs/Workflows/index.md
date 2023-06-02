# 📖 前端工作流
> 该文档将逐步整理前端工作流的技术工具官网与文档；部分包含简单使用流程，复杂部分将另设文档参考。
## 零、流程
> 前端和服务端可以按喜好同时开发；开发过程中均可辅以工具库等。
>
> 前端目录：`frontend/` 后端：`./`或`server/`：基于node开发
>
> 1#：纯原生 
> 2#：原生+ npm（模块化） 
> 3#：前端框架 + npm
## 一、工具（按需）
### 1.1 Webpack：构建工具（广）
-  Doc：[Guides | webpack](https://webpack.js.org/guides/)、[vue-loader](https://vue-loader-v14.vuejs.org/zh-cn/configurations/asset-url.html)
-  打包：`npx webpack`
-  Exp
    -  如果使用webpack打包项目，那么js和css应该作为模块引入到所需要的入口文件中。
    -  对于export default，import时不用{}
    -  对于export ...，import时加{}
-  开发环境<->（打包的）生产环境比较
    -  css可以在html中使用<-———->css在js中引入
    -  html中手动引入script<-———>由webpack打包时自动引入script
    -  js中需引入require.js库<-—-->js中可直接使用require（webpcak已内置）
### 1.2 Vite：构建工具（快）
-  Doc：[Getting Started | Vite](https://vitejs.dev/guide/)
-  使用流程
    -  `npm create vite@latest .`：当前目录为项目名
    -  选择框架
    -  开始安装：`npm install`
### 1.3 其他工具
#### Eslint
-  `npx eslint --init`
-  webpack集成
    -  npm安装`eslint-loader eslint`
    -  webpack配置
-  通用npm环境
    -  npm安装`eslint`
    -  `.eslintrc.json`配置
    -  使用：`eslint .` 目录 npm install --save-dev eslint eslint-plugin-vue
#### Babel
为了兼容老旧的浏览器，将ES6转为其他类型的模块，如CommonJS。

 -  js库引用
   -  script src引入`npm/@babel/standalone`
   -  js代码标注babel：`<script type="text/babel">`
   -  编译就交给浏览器了
 -  webpack集成
   -  npm install `babel-loader @babel/core @babel/preset-env`
   -  webpack配置
 -  npm环境
   -  npm安装 `@babel/core @babel/cli @babel/preset-env`
   -  `.babelrc`配置
   -  使用：`npx babel xx.js --out-file dist/index.js`

## 二、前端设计
### 2.0 前端UI/UX

### 2.1 搭建前端
> 使用构建工具 或 脚手架 或 应用级框架 搭建项目; npx webpack 或 npm run build
#### 2.1.1 ⭐️原生
##### 2.1.1.1 原生
-  `import Maps`：在原生中以模块化方式引入js库（url可以本地也可以cnd）
```javascript
<script type="importmap">   
{   
  "imports": {   
    "three":"../../../three.js/build/three.module.js"   
  }   
}   
</script>  
<script type="module">  
  import * as THREE from 'three'; // 浏览器控制台测试，是否引入成功   
  console.log(THREE.Scene);   
</script>
```
##### 2.1.1.2 原生+NPM模块引入
#### 2.1.2 ⭐️React
##### 2.1.2.1 Webpack+Babel
##### 2.1.2.2 Vite
##### 2.1.2.3 create-react-app
-  目录下，`npx create-react-app ./`
-  调整目录结构：可以删除src、自己建一个新的
-  npm run start 或 react-scripts start
-  npm run build 或 react-scripts build
##### 2.1.2.4 Umi.js（路由、SSR、TS）
##### 2.1.2.5 应用框架Next.js（路由、SSR、TS）
-  [Next.js - React 应用开发框架 | Next.js中文网](https://www.nextjs.cn/)
##### 2.1.2.6 React工具
-  React DevTools：提供组件树显示
#### 2.1.3 ⭐️Vue
> Tips：具体见Vue手册，此处仅为环境搭建方案
##### 2.1.3.1 Webpack
##### 2.1.3.2 Vite
-  `npm create vite@latest`
-  选框架vue、语言ts｜js
-  `npm install`
-  npm run dev
##### 2.1.3.3 Vue-cli
-  `npm i vue`、`npm -i -g @vue/cli`
-  1#vue-cli2.x ：`vue init [webpack] myproj`
-  2#vue-cli3.x ： `vue create myproj`
-  3#@vue/cli图形 ：`vue ui`
    -  查询vue版本：`npm list vue -g`
    -  查询脚手架版本：`vue -V`（注意大写）
##### 2.1.3.4 本地｜CDN引入
-  最新：`<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
-  指定：`<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>`
##### 2.1.3.5 Vue工具
-  Vetur（vscode的vue snippets工具）
    -  输入vue
    -  输入scss
#### 2.1.4 ⭐️React Native
##### 1.4.1 Metro Bundler
##### 1.4.2 Expo
##### 1.4.3 cretate-react-native-app
#### 2.1.5 ⭐小程序
##### 1.5.1 Uni-App
-  生命周期
    -  onLaunch：全局只一次
    -  onLoad：第一次加载
    -  onShow：
    -  onHide、onError...
-  组件生命周期
    -  beforeCreate、**created**(初始化,不可操作dom)
    -  beforeMount、**mounted**(可操作dom)
    -  beforeUpdated、updated
    -  beforeDestroy、destroyed
##### 1.5.2 微信小程序

### 2.2 引入组件库
#### 2.2.1 BootStrap（JS+CSS）
#### 2.2.2 Antd
#### 2.2.3 ElementPlus
#### 2.2.4 TailBlocks
[Tailblocks — Ready-to-use Tailwind CSS blocks](https://tailblocks.cc/)
#### 2.2.5 Material
-  `npm install @material-ui/core @material-ui/icons`
-  布局型组件
    -  Grid：响应Grid布局
    -  Container：容器
    -  Paper：白板
-  内容型组件
    -  AppBar：App标题
    -  Typography：内容标题
-  表单型组件
    -  Button：按钮
    -  TextField：文本输入框
#### 2.2.6 Vant
-  [快速上手 - Vant 4](https://vant-ui.github.io/vant/#/zh-CN/quickstart)
#### 2.2.7 Syncfusion
#### 2.2.8 Vuetify
-  [Vuetify — A Vue Component Framework](https://vuetifyjs.com/en/)


### 2.3 引入样式库
#### 2.3.1 Animate CSS
#### 2.3.2 Tailwind CSS
#### 2.3.3 Windi CSS
#### 2.3.4 Uno CSS


### 2.4 引入ICON
#### 2.4.0常用ICON类型
#### 2.4.1 BootStrap Icon
-  引入[Bootstrap Icons · Official open source SVG icon library for Bootstrap](https://icons.getbootstrap.com/##CDN)
-  使用
-  常见样式：color、
#### 2.4.2 Font Awesome
- 官网[font Awesome](https://fontawesome.com/)
-  FA CDN ：[Kit | Font Awesome](https://fontawesome.com/kits/f5c9bd53df/setup?welcome=yes)，每个人不同
-  Doc：[Font Awesome Docs](https://fontawesome.com/docs/web/style/basics)，支持颜色、大小、动画
-  技巧：按组设置大小
-  特色：list icon、旋转icon、动画icon、文本环绕icon、堆叠icon、定位
#### 2.4.3 IconScout
-  [7,000+ Icon Fonts, SVG, 3D Icons and Animated Icons with Unicons by IconScout](https://iconscout.com/unicons)
#### 2.4.4 flaticon（支持png导出）
- Site： [Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS](https://www.flaticon.com/)
#### 2.4.5 其他
-  Google Fonts带icon：[Browse Fonts - Google Fonts](https://fonts.google.com/)

### 2.5 npm引入JS库（前端）
#### 2.5.0 仓库与js库兼容
- npm仓库：[npm](https://www.npmjs.com/)
- 兼容性：[Can I use？](https://caniuse.com/)
- 基本使用：`npm init`、`npm install [依赖内容]`
#### 2.5.1 socket.io-client
-  socket.on
#### 2.5.2 Jquery
-  [jquery - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/libraries/jquery)
#### 2.5.3 three.js
- 参考：[1. threejs文件包下载和目录简介 | Three.js中文网](http://www.webgl3d.cn/pages/aac9ab/)
- Doc：[three.js docs](https://threejs.org/docs/)
- 结构（待整理）
    -  Shaders
    -  网格Mesh
        -  Vertices：顶点Vertex
            -  法向量normal
            -  uv坐标
        -  材质
            -  （选）纹理
        -  几何体
            -  （选）纹理图坐标映射
- 工具
    -  [FontLoader](https://threejs.org/docs/?q=font#examples/en/loaders/FontLoader)
#### 2.6.4 sass
- `npm add -D sass`
- Exp
    - vue中App.vue不设scoped，其他设置
#### 2.6.5 vue衍生
- `npm i vue-route`
#### 2.6.6 react衍生

### 2.6 引入字体库
- 不同系统中的字体库路径
#### 2.6.1 字由
#### 2.6.2 Google Fonts（外网link）
- [Google Fonts](https://fonts.google.com/specimen/Roboto)

## 三、服务端设计
### 3.1 Node➕JS库
#### 3.1.0 内置
#### 3.1.1 nodemon
- `npm install nodemon -g`
#### 3.1.2 express
-  Doc：[Express](http://expressjs.com/)
#### 3.1.3 cors
#### 3.1.4 socket.io
- socket.emit：发送给当前调用该方法的客户端
-  socket.broadcast.emit：发送给所有已连接的客户端（除自己）
-  io.to(XXX).emit：发送给特定房间的客户端
#### 3.1.5 ws

### 3.2 php
[PHP: PHP 手册 - Manual](https://www.php.net/manual/zh/)

### 3.3 spring boot

## 四、服务通信
### 4.1 Web HTTP
-  AJAX-XHR
-  Jquery-AJAX
-  Promise / fetch ：promise链
-  async/await：把调用的事件函数用 async 修饰为异步，在需要调用 url 、等待结果等异步行为处修饰 await。|每个 await 等待，不大适合连续的多个异步操作

### 4.2 WebRTC

### 4.3 WebSocket

## 五、数据库方案索引
### 5.1 Mysql

### 5.2 Redis

### 5.3 Notion API

## 六、轻量部署
### 6.1 前端部署
> build打包文件，后部署
> -  gh-pages
> -  netify：[Netlify](https://www.netlify.com/)
>   -  直接拖动打包的build文件夹：[Sites | juemuel | Netlify](https://app.netlify.com/teams/juemuel/sites)

### 6.2 后端部署
-  Glitch
-  GoogleCloud：[App Engine 应用平台 | Google Cloud](https://cloud.google.com/appengine?hl=zh-cn)
-  Dokku
-  Firebase
    -  host：部署静态内容
    -  function：部署服务端内容（需要收费方案）
-  Vercel：[Dashboard](https://vercel.com/dashboard)
    -  基本使用：在git中创建后，在vercel中引入并部署（按需设置）
    -  Doc：[Vercel Documentation | Vercel Docs](https://vercel.com/docs)
    -  前端部署：略
    -  后端部署：`@vercel/node` 配置 `vercel.json`或 `now@latest` 配置`now.json`；不支持websocket等，见说明[Do Vercel Serverless Functions support WebSocket connections?](https://vercel.com/guides/do-vercel-serverless-functions-support-websocket-connections)
        -  Vercel 上的 Serverless 函数是无状态的，并且具有最长的执行持续时间。因此，不可能维护到 Serverless 函数的 WebSocket 连接。本文提供了有关在应用程序中使用实时通信的信息，以及在哪里可以了解如何启用实时通信的更多信息。
-  heroku（收费了）
-  Okteto：[Free Okteto Self Hosted Trial | Okteto](https://www.okteto.com/free-trial/)

## 七、服务器部署
### 7.1 SSH
-  [FinalShell SSH工具,2023.1.30](http://www.hostbuf.com/t/988.html)
### 7.2 Docker

## 八、领域技术
### 8.1 通用网站结构
#### 8.1.1 单页大屏
#### 8.1.2 SPA 结构
#### 8.1.3 MPA 结构
### 8.2 网站类型
#### 8.2.1 可视化
##### 8.2.1.1 地图可视化
##### 8.2.2.2 图表可视化
#### 8.2.2 后台管理
#### 8.2.3 文本渲染
#### 8.2.4 电商
#### 8.2.5 物联网
#### 8.2.6 WebGL 3D
-  3D 素材
    -  3D物件
    -  立体展示
    -  地图+
    -  交互性建筑设计
    -  平面设计
    -  pony 风格（模型）
-  Blender 建模

## 九、通用能力
### 9.1 代码原则
-  DRY
-  SOLID：单一责任、开放封闭、替代原则、接口隔离、依赖反转
### 9.2 调试
-  调试工具1：`console`
    -  日志：console.log
    -  表格：console.table，适合数组、对象
-  调试工具2：VsCode调试器
    -  左侧debug，选run and debug
    -  标断点：红色
    -  顶部controls：continue、step over、step into、step out、restart、stop
-  调试工具3：开发者工具-inspect
    -  标断点：蓝色
### 9.3 测试
#### 9.3.1 测试类型
-  单元测试：只测试实现的某个部分（不用依赖关系或集成）
-  集成测试：当代码与数据库、文件系统或第三方通信时，需要用集成测试来测试（设置测试环境、依赖关系）
-  功能测试：从用户角度测试系统是否按预期工作。
#### 9.3.2 测试框架
##### 9.3.2.1 Jest
-  Describe it
##### 9.3.2.2 Selenium
### 9.4 抓包
### 9.5 爬虫
