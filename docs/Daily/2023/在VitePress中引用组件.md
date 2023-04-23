# md中使用Vue（md语法＋引用组件）



## 一、引用组件

## 1.1 引用方式

1. 如果只是少数页面中显示，推荐在需要的.md文件中引入，script中import组件即可
2. 如果在不同页面中使用较多，推荐全局注册，在`.vitepress/theme/index.js`中， 使用`enhanceApp` 函数并注册组件

## 1.2 引用Element Demo

- 注意：ElementUI不支持vite、Vue3服务端动态加载，请使用ElmentPlus
- 网站：[ElmentPlus](https://element-plus.org/zh-CN/guide/installation.html#%E7%89%88%E6%9C%AC)
- 引用方式：选择全局注册方便多次引用

<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="success">成功按钮</el-button>
<el-button type="info">信息按钮</el-button>
<el-button type="warning">警告按钮</el-button>
<el-button type="danger">危险按钮</el-button>
<el-button type="text">文字按钮</el-button>
<br />
<br />
<el-button plain>朴素按钮</el-button>
<el-button type="primary" plain>主要按钮</el-button>
<el-button type="success" plain>成功按钮</el-button>
<el-button type="info" plain>信息按钮</el-button>
<el-button type="warning" plain>警告按钮</el-button>
<el-button type="danger" plain>危险按钮</el-button>
<br />
<br />
<el-button round>圆角按钮</el-button>
<el-button type="primary" round>主要按钮</el-button>
<el-button type="success" round>成功按钮</el-button>
<el-button type="info" round>信息按钮</el-button>
<el-button type="warning" round>警告按钮</el-button>
<el-button type="danger" round>危险按钮</el-button>

## 1.3 引用Vue Demo

以下是通过Vue组件引入的Demo

<VueExampleComponent />


## 二、其他

## 2.1 代码块高亮

- Syntax Highlighter：[Shiki](https://github.com/shikijs/shiki)、[Prism](https://prismjs.com/)



## 2.2 Vue模版语法

详情见：https://vitepress.dev/guide/using-vue

<span v-for="i in 3">{{ i }}</span>



## 2.3 团队/个人卡片



<script setup>
import VueExampleComponent from '../../components/examples/VueExampleComponent.vue'
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: 'https://github.com/juemuel.png',
    name: 'JueMuel',
    title: 'FE',
    links: [
      { icon: 'github', link: 'https://github.com/juemuel' },
      { icon: 'twitter', link: '#' }
    ]
  }
]
</script>
<VPTeamMembers size="small" :members="members" />



## 2.4 徽章

<Badge type="info" text="default" />

<Badge type="tip" text="^1.9.0" />

<Badge type="warning" text="beta" />

<Badge type="danger" text="caution" />

<Badge type="info">custom element</Badge>

## 2.5 Markdown扩展

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger TITLE
Danger zone, do not proceed
:::

::: danger TITLE
Danger zone, do not proceed
:::

