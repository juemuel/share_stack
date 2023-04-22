# VitePress组件与语法



## 代码块高亮

- Syntax Highlighter：[Shiki](https://github.com/shikijs/shiki)、[Prism](https://prismjs.com/)



## 插入Vue语法和组件

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

