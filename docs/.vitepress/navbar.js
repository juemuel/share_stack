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
			text: '前端框架',
			items:[
					{ text: 'Vue', link: '/FECommon/' },
					{ text: 'React', link: '/FECommon/' },
          { text: 'React Native', link: '/FECommon/' },
					{ text: 'Uni-App', link: '/FEFrames/Uni-App/uni-app中的常见元素应用' },
			],
		},  
		{
			text: '日常随笔',
			link: '/Daily/index'
		},  
		{
			text: '灵动月摘',
			link: '/Monthly/202304'
		},
		{
			text: '工作流',
			link: '/Workflows/index'
		},
	]
;

export {navbar};
