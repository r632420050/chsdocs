import { markdownConfig } from "./plugins/code-plugin";
import guide from "./sidebars/guide";
import policy from "./sidebars/policy";

module.exports = {
  base: "/",
  title: "Chs-Docs",
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    config: markdownConfig,
  },
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    siteTitle: "Chs-Docs",
    logo: "/logo.jpg",
    lastUpdatedText: "最近更新",
    outlineTitle: "页面目录",
    nav: [
      { text: "阅读指南", link: "/guide/start" },
      {
        text: "🔥 医保政策",
        items: [
          { text: "📗 职工", link: "/policy/zg/" },
          { text: "📘 居民", link: "/policy/jm/" },
        ],
      },
      {
        text: "医保监管",
        items: [
          { text: "✈️ 飞行检查", link: "/favorites" },
          { text: "💻 智能审核", link: "/program/" },
          { text: "👩🏻‍💻 检查工具", link: "/tool/" },
        ],
      },
      {
        text: "智慧医保",
        items: [
          { text: "🌠 云南医保接口", link: "/essay/" },
          { text: "📱  移动支付", link: "/green/ch" },
        ],
      },
      {
        text: `v1.0.0`,
        items: [
          { text: "🧱 参与贡献", link: "/contributing" },
          { text: "🎉 更新日志", link: `/releases` },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],
    sidebar: {
      "/guide/": guide,
      "/policy/": [policy],
    },
    footer: {
      message:
        '用心去做高质量的医保知识库网站，欢迎 star <a href="https://github.com/ox4f5da2/seven-bit-docs/blob/master/LICENSE">⭐ 让更多人发现，本文档遵守 <a href="https://github.com/ox4f5da2/seven-bit-docs/blob/master/LICENSE">MIT 许可证</a>',
      copyright: "MIT License | Copyright © 2023-2023",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    editLink: {
      pattern:
        "https://github.com/ox4f5da2/seven-bit-docs/tree/master/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    algolia: {
      appId: "VOQM00VJF7",
      apiKey: "3352cbbb277659119baffeb118392a33",
      indexName: "aiai0603io",
    },
  },
};
