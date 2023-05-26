# WebAPI

> 编写 Web 代码时，有许多 Web API 可供调用。Web API 一般用于JS环境

## 一、Window API
- ⭐️ - - - - - 数据存储
- `window.sessionStorage`:
- `window.localStorage`：setItem、getItem、removeItem、clear
	- `localStorage.setItem("jwt_token",resp.token);`：用resp.token创建名为jwt_token的localStorage
	- `localStorage.removeItem("jwt_token");`：删除名为jwt_token的localStorage
- ⭐️ - - - - - 性能检测
- `window.performance`
	- 监控页面的白屏时间、tcp连接时间、资源加载时间、
	- performance.timing
	- performance.getEntries：展示每个静态资源加载的信息
- ⭐️ - - - - - 屏幕信息与监控
- 物理像素（固定）和设备独立像素（可调）
- layout viewport：整个HTML渲染页面的大小
- visual viewport：当前查看渲染的窗口大小
- 调整layout viewport的大小，让其在visual viewport
- `window.innerWidth`：返回浏览器显示区域的CSS像素宽度
- `window.innerHeight`：返回浏览器显示区域的CSS像素高度
- `window.screen`，表示整个屏幕窗口
	- `screen.height`：返回整个屏幕的像素高度
	- `screen.width`：返回整个屏幕的像素宽度
- `window.scroll` 
- `window.resize`
- `window.devicePixelRatio`，在移动端返回的是物理像素/设备独立像素即一个设备独立像素有几个物理像素（mac端好像不容易改变机制不太一样）
- ❓ `window.innerWidth`和`document.documentElement.clientWidth`的区别
	- viewport的CSS像素宽度
	- 整个HTML渲染页面的渲染宽度
- ⭐️ - - - - - 异常监控
- `window.error`
- ⭐️ - - - - - 动画重绘
- `window.requestAnimationFrame()`
- ⭐️ - - - - - 

## 二、Document
- [`Document.documentElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement)
- `document.querySelector(“selector”)`
	- 如果有不符合CSS语法的内容则需要用反斜杠转义；而且要两次；见[document.querySelector()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector#%E8%BD%AC%E4%B9%89%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6)
	- class：`.CLASS_NAME`
	- id：`#ID_NAME`
	- a元素内的包含某属性的b元素：`a b[key='vlaue']`
- `document.querySelectorAll`

## 三、Element
- HTML DOM
- `document.documentElement.clientWidth`：返回整个HTML的渲染宽度
- `document.documentElement.clientHeight`：返回整个HTML的渲染高度
- SVG DOM


## 四、EventTarget
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
- [`EventTarget.removeEventListener()`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener)
- [`EventTarget.dispatchEvent()`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/dispatchEvent)



## 五、History API
> 作用：返回会话的历史状态
> 场景：实现路由监听


##  六、Intersection Observer API
-  [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)


## 七、File API ➕ URL API
> 可以研究不同类型的文件数据，转url
- [File API](https://developer.mozilla.org/zh-CN/docs/Web/API/File_API)
- blob对象表示一个不可变、原始数据的类文件对象
- http资源下载逻辑：创建a，赋`URL.createObjectURL(fileBlobObj,{options});`给a.href，a.click()即可
- 不同的文件数据转URL
- 数组转url demo
  ```js
	function typedArrayToURL(typedArray, mimeType) {
	    return URL.createObjectURL(new Blob([typedArray.buffer],
	        {type: mimeType}))
	}
	const url = typedArrayToURL(bytes, 'text/plain');
	```
  
## 八、其他重要规范
- [Web Audio API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API)
- [Web NFC API](https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API "Currently only available in English (US)")
- [Web Share API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- [WebRTC](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API)
- [WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)：有详细的示例和资源
- [WebXR](https://developer.mozilla.org/zh-CN/docs/Web/API/WebXR_Device_API)
- [WebVR API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebVR_API)
