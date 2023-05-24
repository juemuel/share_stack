# 前端工作流

## 零、流程
>前端和服务端可以按喜好同时开发；开发过程中可以辅以工具
>前端目录：`frontend/`
>后端：`./`或`server/`：基于node开发
## 一、工具（按需）
### Webpack：模块打包工具（功能集成）
### Babel：JS高转低
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
- AppBar
- Typography
### 2.3 引入样式库
#### 2.3.1 Animate CSS
#### 2.3.2 Tailwind CSS
### 2.4 引入ICON
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
## 三、搭建服务端
### 2.2 Node
- 详情见：[Node&Node Server](030000%20技术手册/前端技术/04%20方案（样式、DOM、服务、通信）/F-Node&Node%20Server.md)
- 初始化：`npm init`
- 安装依赖：`npm install [依赖内容]`
	- 热部署：npm install nodemon -g
	- web框架：express
		- [Express](http://expressjs.com/)
	- cors中间件：cors
- Node内置
### 2.3 php
[PHP: PHP 手册 - Manual](https://www.php.net/manual/zh/)
### 2.4 spring boot


## 四、服务通信
### 4.1 Web HTTP
- AJAX-XHR
- Jquery-AJAX
- fetch
### 4.2 WebRTC
### 4.3 WebSocket
