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
					{ text: 'JS手册', link: '/FECommon/Js/' },
          { text: 'JS一句话语法糖', link: '/FECommon/Js/jstech' },
					{ text: 'WebAPI手册', link: '/FECommon/WebAPI/' },
					{ text: '面试问题', link: '/FECommon/Interface/' },
					{ text: '编程题(待整合)', link: '/FECommon/Program/' },
          { text: 'F&Q', link:'/FECommon/F&Q/'}
			],
		}, 
		{
			text: '前端框架',
			items:[
					{ text: 'Vue(待整合)', link: '/FECommon/' },
					{ text: 'React(待整合)', link: '/FECommon/' },
          { text: 'React Native(待整合)', link: '/FECommon/' },
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
    {
      text: '项目集锦',
			items:[
					{ text: 'React Movie Lib', link: 'https://comfy-haupia-02c33d.netlify.app/' },
					{ text: 'Vue Weather App', link: 'https://6476fc1bd18d7b7578c75d70--cozy-frangipane-de6138.netlify.app/' },
          { text: 'Ori Canvas Game', link: 'https://playful-jelly-e3d85f.netlify.app/' },
					{ text: 'More', link: 'https://github.com/juemuel/learning_stack/blob/master/README.md' },
			],
    }
	]
;

export {navbar};
