# 前端工作流

## 零、流程

>前端和服务端可以按喜好同时开发；开发过程中可以辅以工具
>前端目录：`frontend/`
>后端：`./`或`server/`：基于node开发

##  一、工具（按需）

### Webpack：模块打包
- 详情可见：[资源路径处理 · vue-loader](https://vue-loader-v14.vuejs.org/zh-cn/configurations/asset-url.html)
- 如果使用webpack打包项目，那么js和css应该作为模块引入到所需要的入口文件中。
- 对于export default，import时不用{}
- 对于export ...，import时加{}
- 开发环境<->生产环境的比较
	- css可以在html中使用<->css在js中引入
	- html中手动引入script<->由webpack自动引入script
	- js中需要引入require.js库<->js中可直接使用require（webpcak内置了）
- npx webpack
### Babel：JS高转低、规范转换
> 为了兼容老旧的浏览器，将ES6转为其他类型的模块，如CommonJS。
- js库引用
	- script src引入`npm/@babel/standalone`
	- js代码标注babel：`<script type="text/babel">`
	- 编译就交给浏览器了
- webpack集成
	- npm install  `babel-loader @babel/core @babel/preset-env`
	- webpack配置
- node环境
	- npm安装 `@babel/core @babel/cli @babel/preset-env`
	- `.babelrc`配置
	- 使用：`npx babel xx.js --out-file dist/index.js`

### Eslint
- webpack集成
	- npm安装`eslint-loader eslint`
	- webpack配置
- node环境
	- npm安装`eslint`
	- `.eslintrc.json`配置
	- 使用：`eslint .` 目录

## 二、前端
### 2.1 搭建前端
> 使用构建工具 或 脚手架  或 应用级框架 搭建项目
#### 2.1.1 ⭐️原生
#### 2.1.2 ⭐️React
##### 1.2.1 Webpack+Babel
##### 1.2.2 Vite
##### 1.2.3 create-react-app
- 目录下，`npx create-react-app ./`
- 调整目录结构：可以删除src、自己建一个新的
- npm run start 或 react-scripts start
- npm run build 或 react-scripts build
##### 1.2.4 Umi.js（路由、SSR、TS）
##### 1.2.5 应用框架Next.js（路由、SSR、TS）
- [Next.js - React 应用开发框架 | Next.js中文网](https://www.nextjs.cn/)
#### 2.1.3 ⭐️Vue
##### 1.3.1 Webpack
##### 1.3.2 Vite
##### 1.3.3 Vue-cli
#### 2.1.4 ⭐️React Native
##### 1.4.1 Metro Bundler
##### 1.4.2 Expo
##### 1.4.3 cretate-react-native-app
#### 2.1.5 ⭐️Uni-APP
##### 1.5.1 HbuilderX
##### 1.5.2 
### 2.2 引入组件库
#### 2.2.1 BootStrap（JS+CSS）
#### 2.2.2 Antd
#### 2.2.3 ElementPlus
#### 2.2.4 TailBlocks
[Tailblocks — Ready-to-use Tailwind CSS blocks](https://tailblocks.cc/)
#### 2.2.5 Material
- `npm install @material-ui/core @material-ui/icons`
- 布局型组件
	- Grid：响应Grid布局
	- Container：容器
	- Paper：白板
- 内容型组件
	- AppBar：App标题
	- Typography：内容标题
- 表单型组件
	- Button：按钮
	- TextField：文本输入框
#### 2.2.6 Vant
- [快速上手 - Vant 4](https://vant-ui.github.io/vant/#/zh-CN/quickstart)
#### 2.2.7 Syncfusion
#### 2.2.8 Vuetify
- [Vuetify — A Vue Component Framework](https://vuetifyjs.com/en/)
### 2.3 引入样式库
#### 2.3.1 Animate CSS
#### 2.3.2 Tailwind CSS
### 2.4 引入ICON
#### 2.4.0常用ICON类型
#### 2.4.1 BootStrap Icon
- 引入[Bootstrap Icons · Official open source SVG icon library for Bootstrap](https://icons.getbootstrap.com/##CDN)
- 使用
- 常见样式：color、
#### 2.4.2 Font Awesome
- 官网[font Awesome](https://fontawesome.com/)
- 我的CDN :[Kit | Font Awesome](https://fontawesome.com/kits/f5c9bd53df/setup?welcome=yes)
- 使用与样式：[Styling Basics | Font Awesome Docs](https://fontawesome.com/docs/web/style/basics)，支持颜色、大小、动画
- 技巧：按组设置大小
- 特色：list icon、旋转icon、动画icon、文本环绕icon、堆叠icon、定位

#### 2.4.3 IconScout
#### 2.4.4 Material-ui

### 2.5 JS环境➕常用库（前端）
#### 2.5.1 socket.io-client
- socket.on

## 三、搭建服务端
### 3.1 Node➕常用库
- 详情见：[Node&Node Server](030000%20技术手册/前端技术/04%20方案（样式、DOM、服务、通信）/F-Node&Node%20Server.md)
- 初始化：`npm init`
- 安装依赖：`npm install [依赖内容]`
#### 3.1.0 Node内置
#### 3.1.1 nodemon
- npm install nodemon -g
#### 3.1.2 express
- [Express](http://expressjs.com/)
#### 3.1.3 cors
#### 3.1.4 socket.io
- socket.emit：发送给当前调用该方法的客户端
- socket.broadcast.emit：发送给所有已连接的客户端（除自己）
- io.to(XXX).emit：发送给特定房间的客户端
#### 3.1.5 ws

### 3.2 php
[PHP: PHP 手册 - Manual](https://www.php.net/manual/zh/)
### 3.3 spring boot

## 四、服务通信
### 4.1 Web HTTP
- AJAX-XHR
- Jquery-AJAX
- fetch
### 4.2 WebRTC
### 4.3 WebSocket

## 五、数据库方案
### 5.1 Mysql
### 5.2 Redis 
### 5.3 Notion API

## 六、轻量部署
### 6.1 前端部署
> build打包文件，后部署
- gh-pages
- netify：[Develop and deploy websites and apps in record time | Netlify](https://www.netlify.com/)
	- 直接拖动build的文件夹
### 6.2 后端部署
- Glitch
- GoogleCloud：[App Engine 应用平台  |  Google Cloud](https://cloud.google.com/appengine?hl=zh-cn)
- Dokku
- Firebase
	- host：部署静态内容
	- function：部署服务端内容（需要收费方案）
- Vercel：[Dashboard](https://vercel.com/dashboard)
	- 基本使用：先在git中创建，在vercel中引入并部署（按需设置）
	- 具体见：[Vercel Documentation | Vercel Docs](https://vercel.com/docs)
	- 前端部署：略
	- 后端部署：`@vercel/node` 配置 `vercel.json `或 `now@latest` 配置`now.json`；不支持websocket等[Do Vercel Serverless Functions support WebSocket connections?](https://vercel.com/guides/do-vercel-serverless-functions-support-websocket-connections)
	- Vercel 上的 Serverless 函数是无状态的，并且具有最长的执行持续时间。因此，不可能维护到 Serverless 函数的 WebSocket 连接。本文提供了有关在应用程序中使用实时通信的信息，以及在哪里可以了解如何启用实时通信的更多信息。
- heroku（收费了）
- Okteto：[Free Okteto Self Hosted Trial | Okteto](https://www.okteto.com/free-trial/)

## 七、服务器部署
### 工具
- [FinalShell SSH工具,2023.1.30](http://www.hostbuf.com/t/988.html)
