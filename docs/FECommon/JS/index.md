# JavaScript
[toc]
> 文件兼容性问题，跳转链接可能失效，待修复

# 一、使用手册

- ES和JS➕ES新特性
	- ECMAScript规范：基于JS的标准化方案
	- ES5新增
		- 逻辑结构：[for-each](index.md#^73ece6)
	- ES6新增（2015）
		- 变量声明：let、const
		- 数据类型：[Symbol](#^0508ca)和 biginit
		- 内置数据类型
			- 字符串：startsWith、endsWith
			- 对象：keys、values，entries，assign
			- 数组：[find](index.md#^eb8e4c)，findindex，[includes](index.md#^02841f)
		- 函数与对象
			- 箭头函数
			- 类class、extends、consturctor、super、static等：[link](#^a8b012)；
		- 内置函数与对象语法糖➕ API
			- Reflect API
			- Proxy API
			- 其他：Object.getPrototype()
		- 关于赋值：[结构赋](#^f2a23a)、[字符串字面量](index.md#^3933cf)、[可选链](index.md#^74a818)
		- 异步方法：[Promise](index.md#^472653)
		- 模块化：[模块化](#^903d7f)
	- ES7新增
		- 异步方法：async await
- JS引擎->JS执行
	- 先同步语句再异步语句
- JS的特性与机制
	- 面向`对象`；基于`原型`；任何对象的属性方法可以被动态添加；
	- 变量类型不需要提前声明（`作用域`链+`声名提升`机制）
		- js的作用域：全局>函数->块
			- 例如：for不是函数，所以用var定义的变量会变成全局作用域；
			- 在变量当前作用域中如果找不到声明，就会跟着作用域链逐级往前找，直到找到声明。
			- 在script标签中使用use trict就：需要严格在变量前声明
	- EventLoop机制 ^6efea9
	- JS自动的：[垃圾回收机制](#^27608a)
- JS和TX（强类型更好维护）
## 1.1 语法基础
### 1.1.1 JS命名规范与引用
- 项目命名：`my_project_name`
	- 全部采用小写方式， 以下划线分隔；
- 目录命名：`scripts, styles, images, data_models`，注意复数
	- 参照项目命名规则；有复数结构时，要采用复数命名法。
- js文件命名
	- 变量：小驼峰，名+动、名
	- 常量：全大写，下划线分割
		- demo
		```JavaScript
		const MAX_COUNT = 10; 
		const URL = 'http://www.foreverz.com';
		// 常量通常用于ajax请求url，和一些不会改变的数据
		```
	- 函数命名：小驼峰，动+名，详见常见动词约定
	![img](https://s2.loli.net/2023/05/25/RGgihHv7aWSkqrT.png)
	- 构造函数：大驼峰，首字母大写
	- 类的成员/属性：公共属性同函数，使用小驼峰；私有属性在之前加前缀`_`
- JS引用方式
	- 建议开发中多使用外联：优化性能
	- 使用`<script>`标签将 JavaScript 代码添加到页面，其中`type`和`language`属性不是必需的。
	- 外部文件中的脚本可以用`<script src="path/to/script.js"></script>`.

### 1.1.2 JS数据类型、变量、运算符与输入输出
- 数据类型与变量 <font color="#ff0000">【面试常考】</font>
	- 变量声明➕ 作用域➕特性 ^39a766
		- `var`和`let、const`：作用域、变量提升、重复声明
			- <font color="#f79646">在开发中，要尽量少用var（语义不不明确、作用域问题）；优先用const，当知道会改变时用let；</font> #开发/技术/FE/js/exp
			- var：函数作用域、可修改、变量不声明默认是var声明、不初始化是undefined；有变量提升、可重复声明｜<font color="#d99694">var配合for循环有bug</font>
				- `var`：函数作用域（函数内声明则只有函数内访问），函数内或函数外如果没有声明的变量自动为全局变量
				- demo（bugdemo）：用let｜立即执行函数定义可避免
				  ```javascript
					var funcs = [];
					for(var i = 0; i < 3; i++){
					  funcs[i] = function(){// 注意给每个函数数组对象定义的函数中，使用的是var 变量，因此会变化！
						  console.log("My value: " + i)
					  };
					}
					for(var j = 0; j < 3; j++){
					  funcs[j](); // 输出3个 。。。3
					}
					// 再加一个for var 异步的
					for (var i = 0; i < 5; i++) { 
						setTimeout(function () { 
							console.log(i); },  //每1s输出5
							1000 * i); 
						}
					}
					var liList = ul.getElementsByTagName('li');
					for (var i = 0; i < 6; i++) {
						liList[i].onClick = function () {
							alert(i); // alert 出来的总是 6，而不是0，1，2，3，4，5
						};
					}
			- let、const：块级作用域
				- 比如在for循环中用let不会导致迭代变量外渗透
				  demo
				  ```javascript
					var funcs = [];
					for(let i = 0; i < 3; i++){
						let i = 5;
						console.log(i);
					}
					// 输出3次5
			- const：不可改，必需声明时初始化；
			- demo
				```PowerShell
				  var a = [];
				  for (var i = 0; i <= 4; i++) {
					a[i] = function () {
					  console.log(i);
					};
				  }
				  a[0](); //5
					  - ES6:`let、const`有了块作用域的区分
				  var a = [];
				  for (let i = 0; i <= 4; i++) {
					a[i] = function () {
					  console.log(i);
					};
				  }
				  a[0](); //0
				```
		- 变量作用域和作用域链：全局>函数>块级
			- 作用域：负责收集维护声明的查询
			- 全局作用域
			- 函数作用域
			- 块级作用域：约束变量提升、块内要先声明再使用，
			- 作用域链：找不到声明时根据作用域链条向上级作用域找
		- 特性：变量提升
			- 变量提升（实质：声明提升而赋值不提升)
				- 开启关闭变量声明
					- script 标签：`no use strict`关闭，不用关键字直接可赋值；`use strict`
				- 在 JavaScript 中，函数和变量的声明都会被解释器提到方法体的最顶部。 且函数优先级高于变量（只提升声明哦）
				- Demo
					```javascript
					f1();
					f2();
					function f1() {
					  console.log('f1');
					}
					var f2 = function f2() {
					  console.log('f2');
					};
					//f1,接着报错
					```
		- 命名规则：驼峰式；可读性；
			- 命名细节
				- 开头可`'$'`和`'_'`、不可数字和连字符`'-'`；
				- 区分大小写；
				- 允许任何语言
				- 保留字
			- 变量：驼峰式
			- 常量：使用大写字母和下划线
				- 当值为已知不变动的事实常量时，直接声明并赋值
			- 避免缩写或短名；保证语义可读
	- 数据类型 ^847721
		- 原始数据类型（7种）：是值 | 存值 | 在栈上、没有函数
			- 空值（`Null`）遗留bug错认为对象、未定义值（`Undefined`）
				- undefined  表示未被赋值变量的默认值，即"缺少值"，应该有但是还没有赋值
				- null 表示该变量没有指向一个对象，即"没有对象"，该处不应该有值。
					- 将一个变量设置为null。 意味着这个变量不用了，将被自动回收
				- demo
					```JavaScript
					
					// 注意声明和定义的区别
					var a;// 一个未定义对象,undefined
					console.log(a == undefined); //true
					console.log(a === undefined);//true
					console.log(a == null);      //true
					console.log(a === null);     //false
					console.log(b)               //undefined
					console.log("null 和 undefined")
					console.log(null == undefined) //true
					console.log(null === undefined) //false
					
					console.log("NaN 和 null,undefined")
					console.log(NaN == null); // false
					console.log(NaN === null); // false
					console.log(NaN==undefined); // false
					console.log(NaN===undefined); // false
					```
			- 布尔值( `Boolean`)
				- 布尔值：在上下文中转换为真假值![img](https://s2.loli.net/2023/05/25/lPaqi3QAVbyHoCz.png)
				- demo：除了 `undefined`， `null`， `false`， `NaN`， `''`， `0`， `-0`，其他所有值都转为 `true`，包括所有对象
	
					```javascript
					
						if (true)
						if ({})
						if ([])
						if (42)
						if ("foo")
						if (new Date())
						if (-42)
						if (3.14)
						if (-3.14)
						if (Infinity)
						if (-Infinity)
					```
			- 数字(`Number`)：<font color="#dbe5f1">唯一数字类型是浮点：0.1+0.2!=0.3</font>
				- 数字定义：var a = 3;
				- 数字的值：基本数字➕`Infinity`➕`NaN`
					- 值 “NaN” 代表一个 error,是独一无二的，它不等于任何东西，包括它自身
					- demo
			
						```javascript
						// 基本数字
						let a = 1000000;//= 1_000_000 =1e6
						let b = 0xff //表示16进制；0b、0o前缀分别表示二进制和八进制
						console.log(0b11111111 == 0o377) //当两个数字表示时，值相等即相等,都是255
						
						// NaN
						alert( isNaN(NaN) ); // true，是（不是数字）吗？对
						alert( isNaN("str") ); // true，不是数字吗？对
						alert( NaN === NaN ); // false
						alert( isFinite("15") ); // true
						alert( isFinite("str") ); // false，因为是一个特殊的值：NaN
						alert( isFinite(Infinity) ); // false，因为是一个特殊的值：Infinity
						```
				- 数字的操作
					- 类型转换操作
						- 整型<->字符串数组 转换：`a.map(Type)`
							- demo
								```javascript
								  // String array 转 Number array
								  let x1 = ['1','2'];
								  x1 = x1.map(Number);
								  console.log(x1);//[1, 2]
								  
								  // num array转string array
								  let x1 = [1,2];
								  x1 = x1.map(String);//["1", "2"]
								```
					- 近似操作
						- 下取：`Math.floor`
						- 上取：`Math.ceil`
						- 删除小数点n位后：`Math.trunc`,ie不支持
						- 四舍五入取整：`Math.round`
						- 四舍五入到小数第n位：`toFixed(n)`，返回了字符串
							- 乘除法：`Math.round(n*100)/100`到第2位：
							- `toFixed(n)`:将数字四舍五入到点之后,`n`位的数字，返回字符串，可以一元加号或`Number()`转为数子
				- 数字的陷阱：小数不精确计算→用舍入解决
					- `0.1+0.2 != 0.3`:0.1和0.2在二进制中属于无休止的分数
			- 字符串(`String`)：本身不可更改
				- 字符串定义
				- 字符串操作
					- 字符串拼接：`+`
					- 字符串分割：`split()`
					- 字符串取子集：`slice()`
					- 查找子串索引：`indexOf()`，返回[0.length]
						- 母串为空则`0`
						- 查询到字串则返回其`index`
						- 未查询到则返回`length`
					- 子串的替换/删除：`replace(str, substr)`（若删除则substr换成""）
						- 替换第一个子串：`replace(str, substr)`，替换第一个str为substr
						- 全局替换固定字串：`replace(/abc/g, substr)`，替换所有abc为substr
						- 全局替换变量：`replace(new RegExp(key,'g'), substr)`，替换所有key为substr
					- 去符号
						- 🚩去空格/空白：
							- 去两端空白：`stringObject.trim()`，返回新字符串
							- 去所有空白：`stringObject.replace(/\s+/g,"")`，返回**带引号的字符串**！需去引号
							- 去空格（返回数组）：`stringObject.slice(" ")`，返回新数组
						- 🚩去反斜杠/
						- 去首尾引号
							- `str.substring(1,str.length-1)`
			- 符号(`Symbol`) ：表示独一无二的值，私有属性或方法 #开发/新特性与标准/ES/es6 ^0508ca
			- `BigInt` #开发/新特性与标准/ES/es11
		- 引用类型：是对象 | 存地址 | 在堆内存，赋值该对象的变量 | 参数的修改，其本身随之改变
			- 对象Object
			- 内置对象库
				- 数组 Array
					- 数组的字面量定义：`[]`
					- 数组的操作
						- 数组元素的添加：`push()`、`结构赋`；`unshift()`
							- （尾部）添加`a.push(b)`、`a[...a,b]`
								- 这种写法是错误的，第一位将为空，`a=[{}],a.push(b)`
							- （首部）添加`a.unshift(b)`
						- 数组元素的首 | 尾删除：`Array.shift()`、`Array.pop()`
						- 数组的拼接：`concat()`
						- 数组元素的替/删/增：`Array.splice(st, c[, op])`
							- demo
								```javascript
								arrayObject.splice(start, deleteCount[, options]);
								// start 值是必需的，规定删除或替换项目的位置
								// deleteCount 值是必需的，规定要删除的项目数量，如果设置为 0，则不会删除项目
								// options 值是可选的，规定要替换的新项目
								// 和 slice() 方法不同的是 splice() 方法会修改数组
								// 替换
								var a = [1, 2, 3, 4, 5, 6];
								a.splice(2, 2, "abc");
								a; // 最终 a 数组变成了[1, 2, "abc", 5, 6]
								// 删除
								var fruits = ["Banana", "Orange", "Apple", "Mango"];
								fruits.splice(2,2);// Banana,Orange
								```
						- 数组取子集：`Array.slice(st, e)`，返回子数组
							- demo
							  ```javascript
								arrayObject.slice(start, end);
								// strat 值是必需的，规定从何处开始选取
								// end 值可选，规定从何处结束选取，如果没有设置，默认为从 start 开始选取到数组后面的所有元素
								var a = [1, 2, 3, 4, 5, 6];
								a.slice(2, 5); // 结果为[3, 4, 5]，另外需要注意的是该方法不会修改数组，只是返回一个子数组，a 数组还是 [1, 2, 3, 4, 5, 6]
								```
						- 数组查xxx下标：[Array.prototype.findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
							- a.findIndex(el => a > 5)，在a数组中遍历找到>5的el并返回 ^eb8e4c
						- 返回符合关于该数组每项元素某函数的新数组
							- demo
							  ```javascript
								var new_array = arr.map(function callback(currentValue[, index[, array]]) {
								var new_array = arr.map(currentValue => {... return ...})
								const array1 = [1, 4, 9, 16];
								// pass a function to map
								const map1 = array1.map(x => x * 2);
								console.log(map1);
								// expected output: Array [2, 8, 18, 32]
								```
				- 日期 Date
				- 数学 Math
			- 浏览器：DOM
			- demo
			  ```javascript
				function test(person) {
				   person.age = 26 
				   person = { 
					   name: 'yyy', 
					   age: 30 
					} 
				   return person 
				} 
				const p1 = { 
				   name: 'yck', 
				   age: 25 
				} 
				const p2 = test(p1) 
				console.log(p1) // -> 26
				console.log(p2) // -> 30
			  
				```
		- ❓ 类型的判断有哪些？
			- 最佳：`Object.prototype.toString.call`
			- `typeof`：除了null的原始数据类型（实在要判断用`==`也可）
			- `a instanceof XXX`：判断是否为构建函数的实例
			- 其他
				- isXXX API：如`Array.isArray([])`、`isNaN('.')`
				- `a.consructor === XXX`：用于判断对象
		- ❓ 隐式类型转换为false的有哪些？
			- Undefined、false、零、
			- null、NaN
			- 空字符串
		- ❓ undefined和null的区别？
			- 它们是两个不同的数据类型，如果用typeof方法，得出undefined是undefined对象，null是 object 对象
			- undefined：变量声明但未赋值，是所有未赋值变量的默认值
			- null：理解为一个值，是一种空值，表示什么都没有，不指向任何地址；（尽管不指向地址，但是它typeof是object，是js的遗留问题：历史上曾作为一个指向全0二进制地址的指针，现在不是了，就是一个已知的特殊值叫做null）
	- 🪄 结构赋与解构 #开发/新特性与标准/ES/es6  ^f2a23a
		- 从对象取出值：`const {a,b,c,d,e} = obj || {};`
			- 对象为undefiundefined或null时解构会报错
	- 🪄 可选链赋值：当对象存在时才获取对象属性值｜`obj?.name` #开发/新特性与标准/ES/es6  ^74a818
		- const name = obj?.name
	- 🪄 字符串字面量：在字符串使用表达式｜`${js表达式}` #开发/新特性与标准/ES/es6  ^3933cf
		- ``let index = 1;
		- ``obj[`topic${index}`]='内容'`` 
- 表达式（返回值的式子）➕运算符
	- 表达式
		- ⭐️ 算数与运算符表达式→数字
		- ⭐️ 逻辑表达式/条件表达式→真假值（true或false）
		- ⭐️ 字符串、函数、类表达式
		- 📖 正则表达式
			- 正则表达式字面量：`var re = /ab+c/;`
			- 调用RegExp对象构造：`var re = new RegExp("ab+c");`
		- 📖 左值表达式
	- 运算符
		- 一元运算符：算数、位➕扩展运算符
			- 算数运算：`++、--`和`+、-`
			- 位运算：非`~`
			- 扩展运算符 ：`...` #开发/新特性与标准/ES/es6
				- 概念：取出参数对象中的所有可遍历属性，拷贝到当前对象之中（浅拷贝）
		- 二元运算符：赋值、比较、算数、位、逻辑、字符串
			- 赋值运算
				- 赋值
				- 复合赋值
				- 解构赋值
			- 比较运算
				- `==`：值是否相等
					- 基本`==`基本：经过类型转换成number型数值，进行比较
					- 引用`==`引用：独立对象的变量必不等；若引用同一个基对象时相等（闭包例外）
						引用同一个普通function相等； 引用同一个闭包function不等；=>闭包特性：独立性
						- `"" == []`，正确
						- `[] == []`,不正确
					- `undefined == null`
					- `0 == ""`，正确
					- 基本`==`引用：调用对象的toString()或valueOf转为基本类型再比较
					`[].toString() == ""`，`Number("") == 0`
					- `0 == []`，正确
					- 引用`==`引用：独立对象的变量必不等；若引用同一个基对象时相等（闭包例外）
					- 引用同一个普通function相等； 引用同一个闭包function不等；=>闭包特性：独立性
					- `"" == []`，正确
					- `[] == []`,不正确
				- 💗用这个`===`：值和类型是否都相等
					- 基本`===`基本：值和类型均等，才相等；
					- 引用`===`引用：比较的是地址，懂了不！
					- NaN与NaN比较时会直接返回false
				- demo
					```javascript
					  /*基本数据类型和基本数据类型*/
					  var a = true,b = 1;
					  console.log(a == b);    //true
					  var a = 1.2, b = 1.2000;
					  console.log(a == b); //true
					  var a = "1111", b = 1111;
					  console.log(a == b)     // true
			  
			  
					  /*引用类型和引用类型*/
					  var a = {x:1}, b = {x:1}
					  console.log(a==b)       // false
					  var a = [], b = [];
					  console.log(a==b)       // false
					  var a = [], b = a, c = a;
					  console.log(b == c);    // true,引用同一个基对象才相等
			  	
					  /* 引用类型和原始值*/
					  var a = [true],b = 1;
					  console.log(a == b);    //false
					```
					
					-
			- 算数运算：`+、-、×、÷`、`%`和指数运算`**`
			- 位运算：`&、|、^、<<、>>`和无符号右移`>>>`
			- 位逻辑运算
			- 逻辑运算
			- 字符串运算：`+`和`+=`
		- 三元运算符：`条件 ? 值1 : 值2`
		- 四元运算符：`条件 ? 值1：（条件？值2：值3）`
			- demo
				```javascript
				sex == 'F' ? patientSex = '女' : (sex == 'M' ? patientSex = '男' : patientSex = '未知')
				```
		- 🪄 空值合并运算符：简化非空判断操作（iundefined、null、''） #开发/新特性与标准/ES/es6 
			- demo
			  ```javascript
				if((value??'') !== '')// 等价于下面的
				if(value !== null && value !== undefined && value !== '')
				```
		- 🪄 扩展运算符`...`：简化赋值 #开发/新特性与标准/ES/es6  ...
			- 合并数组并去重：`const c = [...new Set([...a, ...b])]`
			- 和并对象：`const obj = {...obj1, ...obj2}`
- 语句特性➕输入输出语句➕注释
	- js语句特性
		- 自动分号插入： 建议在语句之间放置分号，即使它们由换行符分隔
	- 输入输出语句
		- `console.log()`，多变量想要连接则用逗号`,`相互隔开
		- `alert()`
		- `document.witre()`
	- 注释语句

### 1.1.3 JS逻辑结构➕对象操作
- 条件语句
- 循环语句
	- for：原始遍历｜没有额外的函数调用栈和上下文、最简单
	- for-in：迭代字符串类型的键（包括自定义的）
	- for-of：遍历值｜可以正确响应return、break、continue #开发/新特性与标准/ES/es6 
- 对象操作
	- 循环：forEach()
		- ✅ Array.forEach((item)=>{回调内容})：遍历数组中的对象｜本质是个迭代器；break、return只是退出item的回调函数 #开发/新特性与标准/ES/es5  ^73ece6
			- demo
			  ```javascript
			    var arr = [1, 2, 3, 4, 5];
				// Using ES5.
				arr.forEach(function(item){
					if(item > 3){
						console.log(item); // Returns 4 and 5.
					}
				});
				// Using ES6.
				arr.forEach(item =>{
					if(item > 3){
						console.log(item); // Returns 4 and 5.
					}
				});
				```
	- 循环处理自定义
	- 循环迭代处理：reduce()、every()、some()
		- ✅ Array.reduce(reducer(last,cur), init)，对每个数组的元素按序执行某个reducer函数, 并reducer会将上一个元素的结果作为参数last传入。
		- Array.every()，对数组进行特定测试，返回一个布尔值
		- Array.some，对数组进行特定测试，返回一个布尔值
	- 循环过滤：filter()、map()
		- ✅ Array.filter(callback)，对每个数组的元素做callback测试，返回true则存入新数组，最终返回该数组，不修改原数组｜<font color="#d99694">前端没分页的列表查找，搜索也叫过滤，如果是精确搜索用find找</font>
		- ✅ Array.map：返回数组中对象某个属性构成的数组｜数组对象是值则不改变、对象则改变
			- demo
			  ```javascript
				const users = [ 
					{ name: 'John', age: 34 }, 
					{ name: 'Amy', age: 20 }, 
					{ name: 'camperCat', age: 10 }
				];
				const names = users.map(user => user.name);
				console.log(names);//Returns: [ 'John', 'Amy', 'camperCat' ]
				console.log(users);
				```
	- 查找：find()、include()
		- ✅ Array.find()，搜索到符合条件的项后直接返回不再遍历
		- ✅ Array.include(值)，对数组判断是否包含某个值 ^02841f
	- 排序：sort()、reserve()
		- ✅ Array.sort，对数组进行排序
		- ✅ Array.reverse()，对数组元素快速逆序
	- 特殊：Object.values(obj).flat(Infinity)，简化获取一个扁平化数组的处理（从对象中取出某些值？）
	- 特殊：``Array.join('CHAR')``，将array反悔的元素用CHAR连接成一个字符串，当默认`join()`时会用,连接；当`join('')`时，直接连接
	- ❓ 浅拷贝和深拷贝的区别？如何实现？
		- 拷贝指针、真正的拷贝一个对象
		- 实现：json转换、递归函数
	- ❓ for、Array.forEach和Array.map性能上哪个好？
### 1.1.4 JS函数（基于对象）
- 内置函数
	- JSON.parse()：JSON格式字符串转对象
	- JSON.stringfy()：对象转字符串
	- requestAnimationFrame和setInterval
	- setInterval和setTimeout
		- ❓ setInterval和setTimeout的区别
		- ❓ setTimeout(fn1,500)和setTimeout(fn1(),500)的区别？
		- ❓ setInterval（fn1,500)和setInterval（fn1(),500)的区别？
			- 前者是正确的写法，将fn1作为重复执行的内容
			- 后者是将fn1的结果作为重复执行的内容
- 🚩函数：可调用的用于执行代码的对象｜<font color="#b7dde8">通过 声明、匿名、表达式、箭头 定义</font>｜无重载的覆盖、return非必需
	- 无重载、return非必需demo
		```javascript
		/* 一、无重载 */
		function f(a, b) { 
			return a + b; 
		} 
		function f(a, b, c) { 
			return a + b + c; 
		} 
		var result = f(5, 6); 
		result; // returns NaN 
		// 上述代码中调用的是三个参数的 f，最后执行结果为 NaN，而不是 11。
		
		/* 二、Return非必需*/
		// return停止立即结束；有返回值返回值、没有return或只有retrun（无返回值），则默认返回undefined
		```
- 🚩函数调用：call、apply、bind #开发/新特性与标准/ES/es3
- ⭐️声明式函数：`function a(){}`
	```JavaScript
	/*定义*/
	function fun(){ }
	fun.call(this, {})
	fun.apply(this, [])
	/*三种函数调用方式 
	  1.以函数调用则this为window
	  2.以方法调用，call()和apply()可传递一个obj，函数的this为0bj；
	      call方法可以在obj后继续跟其他实参
	      apply方法则需在obj后用数组封装起来
	      如Money.call(this, { form: '纸币', issue: '2019-01' })   
	  3.作为函数方法调用时，this是调用方法的对象
	*/
	fun.apply();
	fun.call();
	fun();
	/*两个隐含的参数
	  1.函数的上下文对象this
	  2.封装实参的对象 arguments
	      是一个类数组对象，可以通过索引来访问数据
	      保存的是我们传递的实参
	      []、callee()、length
	*/
	
	
	```
- ⭐️箭头函数：`()=>{}` #开发/新特性与标准/ES/es6 
	- 配合声明：`let a = b(c,d)=>c + d` ，定义一个接受c，d参数的b函数，返回c+d
	- this变为定义时的上下文内容。
- ⭐️ 匿名函数：`function(){}`
	- 匿名函数不可直接被外界调用；
	- 可以通过表达式定义，调用名称；高阶函数返回调用匿名函数。
- 🚩 立即执行函数（IIFE）：定义后**立即**被执行｜`(匿名函数)()`｜<font color="#fac08f">定义模块化方法，私有域避免污染，大佬库必备</font> ^c74f86
	- 格式：(返回函数时)()，表示调用括号内的函数；
	- demo
	  ```javascript
		// 通过将函数作为返回值，可以暴露一些接口给外部访问，相当于模块的接口。
		var module = (function() {
		  var privateVar = 1;
		  var privateFunc = function() {
			console.log('private function');
		  }
		  return {
			publicVar: 2,
			publicFunc: function() {
			  console.log('public function');
			}
		  }
		})();
		console.log(module.publicVar); // 2
		module.publicFunc(); // public function
		console.log(module.privateVar); // undefined
		module.privateFunc(); // TypeError: module.privateFunc is not a function
		```
- 表达式函数：赋给变量的函数｜`var f = function (a, b) {}`
- 高阶函数（闭包）：一个返回内部定义的函数的函数｜`f1(){ f2(); retruun f2;}`｜<font color="#fac08f">私有域起变量保护作用、不回收、创建模块</font>
- 构造函数：用于创建具有相同属性和方法的对象
- 生成器函数
 - 🚩 jS模块化：用于导出、引入所需模块｜`export`、`import`｜<font color="#fac08f">封装打包复用</font>｜<font color="#ffff00">主题定制、国际化</font>   #开发/新特性与标准/ES/es6 ^903d7f
	 - 发展历史
		- JS 高阶函数：
		- CommonJS：用于服务端
		- AMD：用于浏览器（异步模块规范）
		- ES6 Modules ：`export`、`import`、原生
		- 其他
			- UMD：通用模块规范
	 - 文件名：可以用`.mjs`特别标识；或`.js`保证兼容性
	 - 方式：`export`、`export default`、`import`
	 - 导出、引入方式
		 - 导出、引入方法：
			- export { name, draw, reportArea, reportPerimeter };
			- import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
			 - 可以重命名避免不同引入中出现同名的函数，用as
		 - 导出、引入js模块的所有方法
			 - 如在canvas.js中：export { name, draw, reportArea, reportPerimeter };
			 - 如在main.js：import * as Canvas from './modules/canvas.js';
		 - 聚合导出：在一个文件中导出各路径的内容：略简单了啦～
	 - ⭐️动态加载模块：可以实现点击按钮后加载～
- ❓ 不同方法调用的区别？()、call、apply、bind
- ❓ 不同场景下的this代表了什么？
	- this：归根到底是指向当前执行环境的上下文对象
	- 全局或普通函数中：指向`window｜global｜undefined`
		- 浏览器：Window对象
		- Node：global对象
		- use strict：undefined
	- 对象方法调用obj.func()：指向`obj`
	- 构造函数中的this：指向构造的对象`obj`
	- 箭头函数的this：没有自己的this，指向的是外层的作用域对应的this
	- bind、apply、call
	- 事件函数、定时函数等
### 1.1.5 JS面向对象（基于对象因此很灵活）
^483845
- 📖 内置对象与API
	- Object对象 与 API ^ded36e
		- 属性：Object.prototype，内置的对象原型
		- 方法：`Object.getPrototypeOf()`：获取对象的原型对象 #开发/新特性与标准/ES/es6 
	- Function对象 与API
		- 属性：Function.prototype，内置的方法原型
		- 方法：`Function.getPrototypeOf()`：获取函数的原型对象（只能函数） #开发/新特性与标准/ES/es6 
	- Reflect对象 与 API ：提供了一组用于操作对象的 API #开发/新特性与标准/ES/es6  ^f00fb1
		- 常用API方法
			- get和set：设置对象属性之
			- defineProperty
			- has
		- 优点：Reflect API 操作对象，都以函数存在，更语义化
	- Proxy对象 与 API：实现代理，拦截对象操作并自定义行为 #开发/新特性与标准/ES/es6 
		- 概念：
			- handler：包含trap的处理器
			- Exception异常包括trap陷、fault出错（会尝试重新执行、例如缺页异常page fault）
		- 应用：数据绑定、AOP
		- 定义：let p = new Proxy(obj, handler); obj将被代理、handler用来转发
- 🚩 对象：对象或实例｜<font color="#b7dde8">内置对象；通过字面量、new调用构造函数批量、class批量 生成</font>｜<font color="#fac08f">面向对象、动态修改</font>
	- 本质：基于构造函数和原型对象实现面向对象
	- 特性：引用式传递，修改原型时，与之相关的对象也会继承
	- ❓ new运算符的实现机制
		- 本质：先创建空对象，然后一通复制，内容包括构造函数的属性方法、还有原型
		- 第一步，先创建空对象，它的原型用构造函数的
		- 第二步，传参数赋值、方法都复制过来
- ⭐️ 构造函数：一种用来创建相同属性方法的对象的函数｜<font color="#b7dde8">通过 函数声明、函数表达式、class 定义</font>
	- <font color="#f79646">构造函数的优化使用原型添加方法，避免重复调用构造函数创建对象时重复执行代码</font> #开发/技术/FE/js/exp 
	- 调用方式：new 
	- 格式
	  ```javascript
	  function Person(name, age){
		  this.name = name;
		  this.age = age;
		  this.sayName = function(){
			  console.log("I'm" + this.name);
		  }
	  }
	  const p1 = new Person("Tom",19);
		```
	- ❓ 不同对象的构造函数
		- 字面量定义的对象`obj.constructor` === 内置的`Object`
		- 普通函数`f.constructor` === 内置`Function`
		- 构造函数`f.constructor` === 内置`Function`，也是函数嘛
		- 构造函数生成的对象`obj.constructor `=== 该构造函数`
		- 用class生成的对象`obj.constructor `=== class中的构造函数
		- 原型`obj._proto_.constructor` === 对象所关联的构造函数
- 🚩 原型对象：创建对象 或 函数时默认存在的属性｜<font color="#b7dde8">通过 函数名 或 类名.prototype、对象 或 实例._proto_ 访问修改</font>｜<font color="#fac08f">实现继承、共有关系；手撕语法糖</font>
	- <font color="#f79646">对象._proto_是非标准的、usestrict下可能异常，尽量避免，用Object.getPrototypeOf(obj)和～set～代替操作；可以用prototype增加共有属性方法来优化代码；prototype或_proto_修改，实例也能够动态变化，因此要注意避免覆盖、重复修改，尽量创建时设置好。</font> #开发/技术/FE/js/exp
	- 属于一致的原型链时，实例的_ proto_ 或 class｜构造函数 的 prototype是一致的
	- 原型链：`实例1条、Function1条、构造函数2条（既可走自己的原型、又可走Functiion原型）、Object2条（既可走自己的原型又可走Function原型）`
	
	- demo：
		- ![](https://s2.loli.net/2023/05/25/KzgCHPiapVcmMYo.png)
		- ![](https://s2.loli.net/2023/05/25/VRreAHWmsLTdBSc.png)
	
	- 构造链：`原型->函数->Function()`➕`Function原型->Function()`![](https://s2.loli.net/2023/05/25/h2AFzVHq6KEtQul.png)
	- ❓ 不同对象的原型
	  - 对象 或 函数的初始原型与 对应的默认原型相同，直到修改
	  - 对象默认原型：`obj._proto_ === Object.prototype`
	  - 函数默认原型：`Func.prototype === Function.prototype`
	  - 💗 对象原型：`Object.getPrototypeOf(obj)=== Object.prototype` 
	  - 💗  函数原型：`Function.getPrototypeOf(Func) ===  Function.prototype` 
- 原型链：用来收集和维护对象属性的一系列查询，可以链式的去找属性或方法
- ⭐️ 类class、super、constructor及其相关：构造函数与原型的语法糖｜<font color="#fac08f">优雅地生成对象、继承对象</font> #开发/新特性与标准/ES/es6   ^a8b012
	- static：静态
	- super：继承
	- extends：继承关系
	- constructor：可以直接从对象指向它的构造函数
### 1.1.6 JS数据结构
- Set #开发/新特性与标准/ES/es6 
- weakSet
- Map #开发/新特性与标准/ES/es6 
- weakMap
### 1.1.7 JS异常处理
- 异常处理语句
	- demo
		```javascript
		  try { 
			throw 'error'; 
			throw 123; 
			throw false; 
		  } catch (e) { 
			alert(e); 
		  }
		```
### 1.1.8 JS异步➕并发（多线程和锁）
- EventLoop事件循环机制：永不阻塞 ^157d68
	- 当一个函数执行时，它不会被抢占，只有在它运行完毕之后才会去运行任何其他的代码
	- 先执行栈里的同步代码，然后再执行异步队列的异步代码
- Promise：一种链式调用的异步操作｜<font color="#b7dde8">当函数返回Promise对象时可以通过.then来做异步操作</font>｜<font color="#d99694">链式调用、简化回调失败的代码（只要一次）、可以封装旧式的回调API</font>｜<font color="#953734">复杂时臃肿</font>｜<font color="#c3d69b">建议箭头函数表示</font> ^472653
	- 约定：本轮事件循环运行完成前，不会回调；异步操作不论成功失败，都会调用then()中的回调；多次调用then()可添加多个回调，按顺序执行；
	- 参数：函数(resolve、reject)
	- 方法：then、catch
		- then中的回调函数必需有返回；
		- catch可以捕获一次异常的回调失败；如果有需要可以继续then
		- catch和try...catch很像

### 1.1.9 JS内存管理
- 内存管理三步骤：分配、使用、释放
	- 分配你所需要的内存
	- 使用分配到的内存（读、写）
	- 不需要时释放/归还
- ⭐️ 自动分配机制：声明变量做 值初始化｜函数调用｜新变量等
- ⭐️ 使用值：读取和写入
- 🚩 垃圾回收机制 ^27608a
	- 核心：引用关系
		- 在内存管理的环境中，一个对象如果有访问另一个对象的权限（隐式或者显式），叫做一个对象引用另一个对象。例如，一个 Javascript 对象具有对它原型的引用（隐式引用）和对它属性的引用（显式引用）。
		- 在这里，“对象”的概念不仅特指 JavaScript 对象，还包括函数作用域（或者全局词法作用域）。
	- 引用计数垃圾回收：没有其他对象引用时回收｜在循环引用中发生内存泄漏，已经被放弃
		- var o = {age: 13}； 则对象被o引用
		- var o2 = o.age；o = 1；虽然对象已经没有被引用了；但对象的属性有1个引用，也不能回收；
		- o2 = 2； 此时对象等属性也没有引用了，原来的对象可以背回收了
	- Scavenge算法：分2半，一半form一半to，先往一半天价，快满时垃圾清理，再互换；如此反复。
	- 标记-清楚算法：定期从js的全局对象root中找开始引用的对象，进而找到所有可获得或不可获得的对象｜问题：无法被根查到的对象都会被清除（很少会碰到）
	- ❓ JS中内存泄漏的操作有哪些？
		- 闭包、循环var

## 1.2 脚本开发
### 1.2.1 简单工具
- 文本处理-输出
- 文本处理-去空格
- 文本处理-各类url处理
- 爬虫验证码
### 1.2.2 爬虫

### 1.2.3 自动化

## 1.3 应用：面向对象开发➕设计模式
- 游戏（刷新帧基类、地图）
- 前端逻辑
- [JS装饰器原生](../../../模式指南（23设计➕架构）.md#^600218)、TS装饰器语法糖
# 二、源码学习

# 三、参考内容

- 教程/快速上手：[The Modern JavaScript Tutorial](https://javascript.info/)、[JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- 三方归纳与补充
	- [百度前端技术学园](http://ife.baidu.com/csspart/cssExperience.html)
	- [JavaScript 教程 - 网道](https://wangdoc.com/javascript/index.html)
	- [ES6 入门教程 - ECMAScript 6入门](https://es6.ruanyifeng.com/)
	- [分类：JavaScript - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/javascript/)
- 路径：[Fetching Title#7854](https://roadmap.sh/typescript)
- API：[Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API)
- 其他
	- [Fetching Title#uynr](https://roadmap.sh/frontend)
	- [transform vs z-index](https://codepen.io/YunYouJun/pen/PowMQjP)
	- [HTML Standard](https://html.spec.whatwg.org/multipage/introduction.html#introduction) 
	- [TypeScript Roadmap: Learn to become a TypeScript developer](https://roadmap.sh/typescript)
	- 💗[Front End Development Libraries Certification | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-development-libraries/) 
