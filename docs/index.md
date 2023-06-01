---
layout: home

title: Chs-Docs
titleTemplate: 起始页

hero:
  name: Chs-Docs
  text: 医保知识库
  tagline: 从政策、文件、细节，适用于云南医保
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/start
    - theme: alt
      text: 在 Github 上查看
      link: https://github.com/aiai0603/seven-bit-ui

features:
  - icon: 🎉
    link: guide/details#开发语言-框架
    linkText: 了解更多
    title: 简单介绍
    details: 基于云南医保的相关政策整理的医保知识库
  - icon: 📖
    link: guide/details#开发语言-框架
    linkText: 了解更多
    title: 政策、法规
    details: 基于 vite 打包和 TypeScript 开发的 Vue3 组件库，支持现代常见浏览器，可使用 npm 安装
  - icon: 📊
    title: 基金监管
    link: guide/start
    linkText: 了解更多
    details: 虽然业界已经有非常多知名组件库，但实际工作中各团队通常也会应设计规范要求，自行开发属于团队内部的础
  - icon: 🌐
    title: 智慧医保
    link: guide/start
    linkText: 了解更多
    details: 开箱即用的高质量 Vue 组件，提炼自企业级中后台产品的交互语言和视觉风格，直接支持按需引入无需配置任何插件
  - icon: 📒
    title: 资料
    details: 文档开源，版权 ChoDocs 所有，禁商业行为。
    link: https://github.com/chodocs/chodocs
    linkText: 欢迎 ⭐
  - icon: 🌏
    title: 拥抱开源
    details: 文档开源，版权 ChsDocs 所有，禁商业行为。
    link: https://github.com/chodocs/chodocs
    linkText: 欢迎 ⭐
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import members from './.vitepress/sidebars/member.js';

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
     Chs-Docs 团队人员介绍
    </template>
    <template #lead>
      Chs-Docs 的开发是由 Chs-Docs 团队开发，团队成员介绍如下
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
