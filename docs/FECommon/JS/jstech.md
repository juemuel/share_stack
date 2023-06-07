# JS语法糖功能句
[toc]
> 字符串：slice、charAt、toUpperCase
> 数字：Math.round、Math.floor
> 数组：...、reduce、slice ➕ sort
> 类数组：map ➕ sort
> 其他：JSON.stringify



## 一、字符串处理

### 1.1 首字母大写函数

```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const name = "robert";
capitalize(name) // "Robert";
```

## 二、数字处理

### 2.1 百分比函数

```js
const calculatePercent = (value, total) => Math.round((value / total) * 100)
const questionsCorrect = 6;
const questionTotal = 11;
calculatePercent(questionsCorrect, questionsTotal); // 55
```

## 三、数组处理

### 3.1 取数组的随机元素

```js
const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];
const items = ["Nicely done!", "Good job!", "Good work!", "Correct!"];
getRandomItem(items); // "Good job!"
```

### 3.2 移除重复元素：...+Set

```js
const removeDuplicates = (arr) => [...new Set(arr)];
const friendList = ["Jeff", "Jane", "Jane", "Rob"];
removeDuplicates(friendList); // ['Jeff', 'Jane', 'Rob']
```

 这边直接用Set的特性去除重复项，并用扩展运算符...

### 3.3 元素在数组中的位置：reduce

```js
const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);
const pollResponses = ["Yes", "Yes", "No"];
const response = "Yes";
countOccurrences(pollResponses, response); // 2
```

### 3.4 计算元素出现次数：reduce

```js
const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);
const pollResponses = ["Yes", "Yes", "No"];
const response = "Yes";
countOccurrences(pollResponses, response); // 2
```

### 3.4 插入元素至指定位置：...+slice

```js
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
const items = [1, 2, 4, 5];
// insert the number 3 at index 2:
insert(items, 2, 3); // [1, 2, 3, 4, 5]
```

## 四、类数组处理（对象数组）

### 4.1 排序：sort

```js
const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
const lessons = [{ position: 1, name: "Intro" }, { position: 0, name: "Basics" }];
sortBy(lessons, 'position'); 
// {position: 0, name: 'Basics'},
// {position: 1, name: 'Intro'}
```

### 4.2 取类数组的某个属性，返回数组：map

```js
const pluck = (objs, key) => objs.map((obj) => obj[key]);
const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];
pluck(users, 'name'); // ['Abe', 'Jennifer']
```

## 五、通用

### 5.1 两个数组或对象是否相同

```js
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
isEqual([1, '2'], [1, 2]); // false
isEqual([1, 2], [1, 2]); // true

```



### 5.2 等待指定时间

```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
wait(2000).then(() => goToSignupPage());
```



### 5.3 简易深拷贝

> 忽略循环引用（某个属性自引用）、函数、原型链
> 原生js实现：则针对数组和对象递归处理
```js
const deepClone = (obj) => JSON.parse(JSON.stringify(obj)); const originalObj = {name: "John", age: 30, hobbies: ["reading", "swimming"]}; const clonedObj = deepClone(originalObj); // {name: "John", age: 30, hobbies: ["reading", "swimming"]}
```



### 5.4 深拷贝

```js
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // 如果不是对象类型或为null，直接返回
  }

  let result;
  if (Array.isArray(obj)) { // 判断是否为数组
    result = [];
    for (let i = 0; i < obj.length; i++) {
      result[i] = deepCopy(obj[i]); // 递归处理数组中每个元素
    }
  } else { // 否则为普通对象
    result = {};
    for (let key in obj) {
      result[key] = deepCopy(obj[key]); // 递归处理对象中每个键值对
    }
  }

  return result;
}
```

