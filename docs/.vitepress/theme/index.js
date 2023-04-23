// .vitepress/theme/index.js
import Theme from 'vitepress/theme'
import './style/var.css' // 可以定制css
// import "element-ui/lib/theme-chalk/index.css"; // ElementUI 的样式文件需要单独引入
// import ElementUI from "element-ui"; // 不支持，弃用；安装npm i element-ui -S
import ElementPlus from 'element-plus'// 支持；安装npm i element-plus -S
import 'element-plus/dist/index.css'
export default {
	...Theme,
  enhanceApp({ app }) {
		app.use(ElementPlus)
  }
}