# VitePressUI

## 徽章

<Badge type="info" text="default" />

<Badge type="tip" text="^1.9.0" />

<Badge type="warning" text="beta" />

<Badge type="danger" text="caution" />

<Badge type="info">custom element</Badge>



## 团队/个人卡片

<VPTeamMembers size="small" :members="members" />









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
  },
]
</script>

