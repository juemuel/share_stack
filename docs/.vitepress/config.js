import { getSideBar } from 'vitepress-plugin-autobar'

export default {
	title: 'juemuelの分享站', // 网站标题
	description: '基于vitePress，搭建的一个技术周刊网站', //网站描述在html的meta中显示
	base: '/share_stack/', // 默认/，可以使用二忌地址/base/
	head: [
		['meta', { name: 'keywords', content: '周刊、前端、技术' }],
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
		socialLinks: [ //右上角图标和链接
			{
				icon: 'github', // discord facebook github instagram linkedin slack twitter youtube 或者 svg 字符串
				link: 'https://github.com/juemuel/techstack_memo'
			},
			// {
			// 	icon: 'slack',
			// 	link: '#'
			// }
		],
		lastUpdatedText: '最近更新时间', // 外部lastUpdated开启
		siteTitle: 'Juemuelの分享站',
		nav: [ //右侧导航，link跳转地址，active《atch保持高亮
			{
				text: '首页',
				link: '/index.html',
				activeMatch: '/index.html'
			},
			{
				text: '灵动周刊',
				link: '/01.Weekly/Start.html'
			},
			{
				text: '技术研习',
				link: '/02.Tech/Start.html'
			},
			{
				text: '前端面试',
				link: '/03.Interview/Start.html'
			},  
			{
				text: '关于',
				link: '/04.About/Start.html'
			},  
			// 顶部导航下拉菜单按如下方式：
			  /*
			  {
				text: 'Dropdown Menu',
				items: [
				  { text: 'Item A', link: '/item-1' },
				  { text: 'Item B', link: '/item-2' },
				  { text: 'Item C', link: '/item-3' }
				]
			  }
			   */
		],
		// 侧边导航
		sidebar: getSideBar("./docs"),// 使用了vitepress-plugin-autobar
		// [{ // 默认一'/':路径
		// 		text: '项目简介', // 栏目块的title
		// 		items: [{
		// 				text: '网站索引',
		// 				link: '#',
		// 				items:[{
		// 					text: '网站索引',
		// 					link: '#',
		// 				}],
		//				collapsible: true, // 表示可折叠
		//				collapsed: true, // 开启默认折叠
		// 			},
		// 			{
		// 				text: '简介',
		// 				link: '#'
		// 			},
		// 		]
		// 	},],
		outlineTitle: '目录', // 大纲目录
		docFooter: { prev: '上一篇', next: '下一篇' },
		editLink: {// git上编辑，git上docs的url/:path
		  pattern: 'https://github.com/juemuel/techstack_memo/tree/main/docs/:path',
		  text: 'Edit this page on GitHub'
		},
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
		// }

	}
}
