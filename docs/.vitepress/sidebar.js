let sidebar = {
		"/Monthly/": [{
			text: '灵动月摘',
			path: '/Monthly/',
			items: [{
				text: '2023年',
				items: [{
						text: '月刊202304',
						link: '/Monthly/202304'
					}]
			}],
		}, ],
		"/FECommon/": [{
			text: '前端基础',
			path: '/FECommon/',
			items: [{
				text: 'JavaScript',
				items: [{
						text: 'JavaScript基础',
						link: '/FECommon/JS/'
					}]
			},{
				text: 'ES6基础',
				items: [{
						text: 'ECMAScript基础',
						link: '/FECommon/ES6/'
        }]
			},{
				text: 'TS基础',
				items: [{
						text: 'Typescript基础',
						link: '/FECommon/TS/'
				}]
			},
			],
		}, ],
    "/FEFrames/":[{
      text: "前端框架",
      path:"/FEFrames/",
      items: [{
      	text: 'uni-app',
      	items: [{
      			text: 'uni-app中的常见元素应用',
      			link: '/FEFrames/Uni-App/uni-app中的常见元素应用'
      		},{
      			text: 'uni-app中的前后端通信',
      			link: '/FEFrames/Uni-App/uni-app中的前后端通信'
      		},]
      }],
    }]
		
	};

export {sidebar};
