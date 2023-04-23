// .vitepress/theme/index.js
// 可以定制，修改css，目前啥也没改
import Theme from 'vitepress/theme'
import './style/var.css'

export default {
	...Theme,
  enhanceApp({ app }) {
    app.component('', VueClickAwayExample)
  }
}