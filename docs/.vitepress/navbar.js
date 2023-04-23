let navbar = 
	[ //右侧导航，link跳转地址，activeMatch保持高亮
		{
			text: '首页',
			link: '/',
			activeMatch: '/index'
		},
		{
			text: '前端基础',
			items:[
					{ text: 'Javascript基础知识', link: '/FECommon/JS/' },
					{ text: 'Typescript基础知识', link: '/FECommon/TS/' },
					{ text: 'WebAPI', link: '/FECommon/WebAPI/' },
					{ text: '浏览器知识', link: '/FECommon/Explore/' },
					{ text: '编程题', link: '/FECommon/Program/' },
			],
		},  
		{
			text: '日常随笔',
			link: '/Daily/index'
		},  
		{
			text: '灵动月摘',
			link: '/Monthly/index'
		},
		{
			text: '工作流',
			link: '/Workflows/html/index'
		},
	]
;

export {navbar};
