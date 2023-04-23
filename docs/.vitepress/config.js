// import { getSideBar } from 'vitepress-plugin-autobar'
import {sidebar} from './sidebar'
import {navbar} from './navbar'
import { defineConfig } from 'vitepress'
console.log("import sidebar",sidebar);
console.log("import navbar",navbar);

export default {
	title: 'juemuelの分享站', // 网站标题
	description: '基于vitePress，搭建的一个技术月刊网站', //网站描述在html的meta中显示
	base: '/share_stack/', // 默认/，可以使用二忌地址/base/
	head: [
		['meta', { name: 'keywords', content: '月刊、前端、技术' }],
		['link',{rel:'icon', href:'/logo01.png'}] // 网页标签中显示
		],// 可以手动个配置html的head内容
	lang: 'cn-ZH', 
	ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
	markdown: {
		// theme: 'material-palenight',//md主题
		lineNumbers: true //md 加行号
	},
	lastUpdated: true, //开启最近更新时间
	appearance: true, //可以选择深浅主题
	// 主题配置
	themeConfig: {
		logo: 'logo01.png',
		plugins: ['@vitepress/last-updated'],
		lastUpdatedText: '最近更新时间', // 外部lastUpdated开启
		siteTitle: 'Juemuelの分享站',
		search: {
			provider: 'local'
		},
		nav: navbar,
		sidebar: sidebar,// 左侧导航
		socialLinks: [ //右上角社交连接，图标和链接
			{
				icon: 'github', // discord facebook github instagram linkedin slack twitter youtube 或者 svg 字符串
				link: 'https://github.com/juemuel/techstack_memo'
			},
		],
		outlineTitle: '目录', // 大纲目录
		docFooter: { prev: '上一篇', next: '下一篇' },
		editLink: {// git上编辑，git上docs的url/:path
		  pattern: 'https://github.com/juemuel/techstack_memo/tree/main/docs/:path',
		  text: 'Edit this page on GitHub'
		},
		subSidebar: 'auto',
		localeLinks: { // 国际化下拉框需要对内容拆分，未完成
		  items: [
			{ text: "简体中文", link: "/" },
			{ text: "English", link: "/en" }
		  ]
		},
		// locales: {
		//   // 函数功能就是将需要语言转换的内容分开成两套配置，搞个模块化的方法。分别做配置即可
		//   "/": getChineseThemeConfig(),
		//   "/en/": getEnglishThemeConfig()
		// },
		// footer: { // sidebar存在时页脚不显示
		//   message: 'Released under the MIT License.',
		//   copyright: 'Copyright © 2017-present Evan You'
		// },
		markdown: {
		    // options for markdown-it-anchor
		    // https://github.com/valeriangalliat/markdown-it-anchor#usage
		    anchor: {
		      permalink: true
		    },
		    // options for @mdit-vue/plugin-toc
		    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
		    toc: { level: [1, 2] },
		    config: (md) => {
		      // use more markdown-it plugins!
		      // md.use(require('markdown-it-xxx'))
		    }
		  }
	}
}
