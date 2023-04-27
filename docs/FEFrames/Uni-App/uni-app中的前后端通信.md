# uni-app中的前后端通信


#### 通用接口访问
- 调用内置request  uni.request({...})

#### uni-cloud访问
- 正式版自己新建表（一般只需建表即可，自带_id，首次增加自动加入字段）似乎是基于json的
- 设置云函数
- 调用云函数 uniCloud.callFunction({...})
- get、add、remove