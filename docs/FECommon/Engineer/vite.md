# Vite

## 背景

![img](https://s2.loli.net/2023/04/24/ado32lTtwhRVWA8.webp)

- 工程化痛点：模块化、语法转译、代码质量、开发效率
- 主流工具链
  - 高级语法：ts、sass、jsx等
  - 编译：esbuild
  - 打包：rollup
  - 质量：terser、babel

- babel细节

  - `@babel/preset-env` 的 `useBuiltIns` 属性各个取值有哪些区别？

  - `@babel/polyfill` 与 `@babel/runtime-corejs` 有什么区别？

  - `@babel/plugin-transform-runtime` 与`@babel/preset-env` 的 `useBuiltIn` 相比有什么优化？

- ESBuild
- Rollup

### 模块化发展

- 无模块化标准阶段->各种模块规范

- 无模块化标准阶段

  - 文件划分：命名冲突、依赖顺序模糊
  - 命名空间：解决命名冲突|依赖顺序模糊
    - window.moduleA{...此处定义}
  - IIFE：解决命名冲突、私有化访问|依赖顺序模糊

- CommonJS规范（最早的JS规范、用于服务端）：module.exports、require

  - ```javascript
    // module-a.js
    var data = "hello world";
    function getData() {
      return data;
    }
    module.exports = {
      getData,
    };
    
    // index.js
    const { getData } = require("./module-a.js");
    console.log(getData());
    ```

  - 实际上被Node的loader转译为IIFE写法

  - 缺点：基于Node无法直接到浏览器使用（可以Browserify转译过去）、CommonJS本身通过同步方式加载模块放浏览器会限制性能

- AMD规范（异步模块定义规范、适合浏览器了）：define

  - ```javascript
    // main.js
    define(["./print"], function (printModule) {
      printModule.print("main");
    });
    // 或
    require(["./print.js"], function (printModule) {
      printModule.print("module-a");
    });
    
    // print.js
    define(function () {
      return {
        print: function (msg) {
          console.log("print " + msg);
        },
      };
    });
    ```

  - 没有得到浏览器原生支持，需要用第三方loader实现，如requireJS库

- ES Module

  - script标签中加入type="module"，则浏览器按ES Module加载解析

  - Node支持ES Module

  - ```javascript
    // 1. main.js
    import { methodA } from "./module-a.js";
    methodA();
    
    //2. module-a.js
    const methodA = () => {
      console.log("a");
    };
    
    export { methodA };
    
    // .html
    <script type="module" src="./main.js"></script>
    
    // node环境，package.json
    {
      "type": "module"
    }
    
    // commonJS套ES Module
    async function func() {
      // 加载一个 ES 模块
      // 文件名后缀需要是 mjs
      const { a } = await import("./module-a.mjs");
      console.log(a);
    }
    func();
    module.exports = {
      func,
    };
    ```

## 基础使用

### 快速搭建Vite项目

- ```js
  node -v // 需要12.0.0 及以上版本
  npm -v // 不推荐用npm、yarn了，建议pnpm
  npm i -g pnpm
  pnpm config set registry https://registry.npmmirror.com/
  pnpm create vite // 输入项目名、选择前端框架、选择开发语言（按react、react-ts做例）
  // 测试发现vite比creat-react-app创建项目快6倍
  cd vite-project // 进入项目目录
  pnpm install // 安装依赖
  pnpm run dev // 启动项目
  ```

- 目录结构、项目入口、配置文件

  - ```javascript
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── favicon.svg
    │   ├── index.css
    │   ├── logo.svg
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tsconfig.json
    └── vite.config.ts
    ```

  - index.html是项目的入口文件，当访问`http://localhost:3000`时，Vite 的 Dev Server 会自动返回这个 HTML 文件的内容

    - 在 Vite 项目中，一个import代表一个HTTP请求
    - Vite不是像webpack先打包再加载，而是浏览器读到import时，对其请求资源处理再返回给浏览器解析的代码
    - 也即项目背后的启动流程，强调了`一个 import 语句代表一个 HTTP 请求`，而正是 Vite 的 Dev Server 来接收这些请求、进行文件转译以及返回浏览器可以运行的代码，从而让项目正常运行。

  - vite.config.ts是配置文件

    - plugin属性

    - root：可以手动指定项目根目录位置，`root: path.join(__dirname, 'src')`，自动返回 src 目录下的`index.html`

      - ```javascript
        // vite.config.ts
        import { defineConfig } from 'vite'
        // 引入 path 包注意两点:
        // 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
        // 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
        import path from 'path'
        import react from '@vitejs/plugin-react'
        
        export default defineConfig({
          // 手动指定项目根目录位置
          root: path.join(__dirname, 'src')
          plugins: [react()]
        })
        ```

    - 更多见下方各类方案

  - package.json

    - ```javascript
      "scripts": {
        // 开发阶段启动 Vite Dev Server
        "dev": "vite",
        // 生产环境打包
        "build": "tsc && vite build",
        // 生产环境打包完预览产物
        "preview": "vite preview"
      },
      
      ```

    - 支持生产环境打包的～不过底层没有实现类型检查，用了tsc、vue中是vue-tsc，自个儿看。

    - pnpm run build，打包

    - pnpm run preview，预览

### 样式方案

- 原生CSS方案：不支持选择器嵌套、样式污染；浏览器前缀添加不便；代码体积大

  - ```css
    // a.css
    .container {
      color: red;
    }
    
    // b.css
    // 很有可能覆盖 a.css 的样式！
    .container {
      color: blue;
    }
    // 选择器只能平铺，不能嵌套
    .container .header .nav .title .text {
      color: blue;
    }
    
    .container .header .nav .box {
      color: blue;
      border: 1px solid grey;
    }
    ```

- CSS方案

  - CSS预处理器：Sass/Scss、Less、Stylus，支持嵌套、变量、逻辑语句
  - CSS Modules：处理成哈希值，避免污染
  - CSS后处理器：PostCSS，解析处理代码，px->rem，自动添加浏览器前缀
  - CSS in JS：emotion`、`styled-components，包含预处理器和 CSS Modules的各项优点，非常灵活
  - CSS原子化框架：Tailwind CSS、Windi CSS

- SASS

  - 自动注入变量方案

  - ```js
    // 1.1 index.tsx引入scss
    import './index.scss';
    export function Header() {
      return <p className="header">This is Header</p>
    };
    
    // 1.2 index.scss手动或自动注入变量
    // @import "../../variable"; // 当开启自动注入就不需要手动注入了
    .header {
      color: $theme-color;
    }
    
    // 1.3 variable.scss
    $theme-color: red;
    
    // 1.4 开启自动注入
    import { normalizePath } from 'vite';
    // 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
    import path from 'path';
    // 全局 scss 文件的路径，用 normalizePath 解决 window 下的路径问题
    const variablePath = normalizePath(path.resolve('./src/variable.scss'));
    
    export default defineConfig({
      // css 相关的配置
      css: {
        preprocessorOptions: {
          scss: {
            // additionalData 的内容会在每个 scss 文件的开头自动注入
            additionalData: `@import "${variablePath}";`
          }
        }
      }
    })
    
    
    
    ```

  - 

### 规范方案

### 资源方案

### 预构建方案



## 双引擎ESBuild、Rollup
