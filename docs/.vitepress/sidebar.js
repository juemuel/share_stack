let sidebar = {
		"/01.Monthly/": [{
			text: '灵动月刊',
			path: '/01.Monthly/',
			items: [{
				text: '2023年',
				items: [{
						text: '月刊Demo',
						link: '/01.Monthly/月刊Demo'
					},
					{
						text: '202304刊',
						link: '/01.Monthly/202304'
					},
				]
			}],
		}, ],
		'/02.Tech/': [{
			text: '技术分享',
			path: '/02.Monthly/',
			items: [{
					text: '用5分钟配置安全性的Server',
					link: '/02.Tech/用5分钟配置安全性的Server'
				},
				{
					text: '用vercel部署github_readme_stats',
					link: '/02.Tech/用vercel部署github_readme_stats'
				},
			],
		}, ],
		'/03.Interview/': [{
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
		'/04.Component/': [{
				text: 'VitePress',
				items: [
					{ text: 'VitePressUI与组件引用', link: '/04.Component/VitePressUI' },
				]
			},
			{
				text: 'ElementUI',
				items: [{ text: 'ElementUI', link: '/04.Component/ElementUI' }]
			},
			{
				text: 'JueMUI',
				items: [
					{ text: 'JueMUI', link: '/04.Component/JueMUI' },
				],
				collapsible: true, // 表示可折叠
				collapsed: true, // 开启默认折叠
			},
		],
	};

export {sidebar};
