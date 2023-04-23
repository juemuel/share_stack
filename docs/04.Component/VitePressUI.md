# md中使用Vue（组件、语法）



# 引用组件

## 引用方式

1. 如果只是少数页面中显示，推荐在需要的.md文件中引入，script中import组件即可
2. 如果在不同页面中使用较多，推荐全局注册，在`.vitepress/theme/index.js`中， 使用`enhanceApp` 函数并注册组件

## 引用Vue Demo



## 引用Element Demo









# 其他

## 代码块高亮

- Syntax Highlighter：[Shiki](https://github.com/shikijs/shiki)、[Prism](https://prismjs.com/)



## Vue模版语法

详情见：https://vitepress.dev/guide/using-vue

<span v-for="i in 3">{{ i }}</span>



## 团队/个人卡片



<script setup>
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





## 徽章

<Badge type="info" text="default" />

<Badge type="tip" text="^1.9.0" />

<Badge type="warning" text="beta" />

<Badge type="danger" text="caution" />

<Badge type="info">custom element</Badge>

## Markdown扩展

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

