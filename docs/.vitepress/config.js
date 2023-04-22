// import { getSideBar } from 'vitepress-plugin-autobar'
// import sidebar from './sidebar'
import { defineConfig } from 'vitepress'


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
		nav: [ //右侧导航，link跳转地址，activeMatch保持高亮
			{
				text: '首页',
				link: '/',
				activeMatch: '/index'
			},
			{
				text: '灵动月刊',
				link: '/01.Monthly/index',
			},
			{
				text: '技术研习',
				link: '/02.Tech/index'
			},
			{
				text: '前端面试',
				link: '/03.Interview/index'
			},  
			{
				text: '组件库',
				items: [
				  { text: 'ElementUI', link: '/04.Component/ElementUI' },
				  { text: 'AntD', link: '/04.Component/AntUI' },
				  { text: 'JueMUI', link: '/04.Component/JueMUI' },
				  { text: 'Vitepress中引入组件', link: '/04.Component/VitePressUI' },
				]
			},  
		],
		socialLinks: [ //右上角社交连接，图标和链接
			{
				icon: 'github', // discord facebook github instagram linkedin slack twitter youtube 或者 svg 字符串
				link: 'https://github.com/juemuel/techstack_memo'
			},
		],
		// 侧边导航
		// sidebar: sidebar,
		sidebar:
		{
		  "/01.Monthly/": [
				{
					text: '灵动月刊',
					path: '/01.Monthly/',
					items:[
						{
						text:'2023年',
						items: [
							{ text: '月刊Demo', link: '/01.Monthly/月刊Demo' },
							{ text: '202304刊', link: '/01.Monthly/202304' },
						]
					}],
				},
			],
			'/02.Tech/':[
				{
					text: '技术分享',
					path: '/02.Monthly/',
					items: [
						{ text: '用5分钟配置安全性的Server', link: '/02.Tech/用5分钟配置安全性的Server' },
						{ text: '用vercel部署github_readme_stats', link: '/02.Tech/用vercel部署github_readme_stats' },
					],
				},
			],
			'/03.Interview/':[
				{
					text: 'JavaScript',
					items: [
						// { text: '公告栏', link: '/03.Interview/index' },
					],
				},
				{
					text: 'Web优化',
					items: [
						// { text: '公告栏', link: '03.Interview/index' },
					],
				},
			],
			'/04.Component/':[
				{
					text: 'ElementUI',
					items: [
						// { text: 'ElementUI', link: '/04.Component/ElementUI' },
					],
					collapsible: true, // 表示可折叠
					collapsed: true, // 开启默认折叠
				},
				{
					text: 'AntDUI',
					items: [
						// { text: 'AntD', link: '/04.Component/AntUI' },
					],
					collapsible: true, // 表示可折叠
					collapsed: true, // 开启默认折叠
				},
				{
					text: 'JueMUI',
					items: [
						// { text: 'JueMUI', link: '/04.Component/JueMUI' },
					],
					collapsible: true, // 表示可折叠
					collapsed: true, // 开启默认折叠
				},
				{
					text: 'VitePress引入组件',
					items: [
						// { text: 'JueMUI', link: '/04.Component/JueMUI' },
					],
					collapsible: true, // 表示可折叠
					collapsed: true, // 开启默认折叠
				},
			],
		},
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
		subSidebar: 'auto',
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
