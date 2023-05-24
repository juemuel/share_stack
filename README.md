# stack_share

- 个人站：[jumuel分享站](https://juemuel.github.io/share_stack/)
- vitePress：[文档](https://process1024.github.io/vitepress/guide/theme-sidebar)

## 维护模块
- 灵动周刊
- 前端面试
- 技术分享
- 组件库

## 更新日志
- 2024.0412 优化首页渐变效果、模块化封装侧边栏插件（折叠、逆序）
- 2023.0409 完成搭建、通过Github Actions部署在Github Pages服务中。

## 最佳流程

- 使用方案：Github、Github-Actions、gh-pages

- 日常流程：vitepress添加md文件（各类博文、组件库展示），打包成dist，上传github（自动通过github-actions部署到gh-pages），发布到静态网站上。
  - 技术博文、周刊月刊
  - 支持js、html因此可以模块引入组件库，做组件展示

## 部署方式

- `npm run docs:dev`
- `npm run docs:serve`



