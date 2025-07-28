import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://www.mihaotu.com',
    lastmodDateOnly: true
  },
  lang: 'zh-CN',
  title: "MyIdea",
  description: "激活你的灵感",
  base: '/',
  metaChunk: true,
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'keywords', content: '双链,笔记,Markdown,编辑器,小说,写作,神器' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/logo.png' }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e1661327935700a9f5d390d9df33cbbf";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',
    outlineTitle: '目录',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: true,
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '手册', link: '/myidea/guide/' },
      { text: '主题', link: '/theme' },
      { text: '模板', link: '/template' },
      { text: '反馈', link: '/feedback' },
      { text: '更新日志', link: '/changelog' },
    ],

    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '欢迎', link: '/myidea/guide/' },
          { text: '快速开始', link: '/myidea/guide/getting-started' }
        ]
      }, {
        text: '项目/模板',
        link: '/guide/vault/',
        collapsed: false,
        items: [
          { text: '开始', link: '/myidea/guide/vault/start' },
          { text: '模板', link: '/myidea/guide/vault/template' },
          { text: '项目', link: '/myidea/guide/vault/project' }
        ]
      }, {
        text: '主界面',
        link: '/myidea/guide/editor/',
        collapsed: false,
        items: [
          { text: '工具栏', link: '/myidea/guide/editor/top-tools' },
          { text: '文件树', link: '/myidea/guide/editor/file-tree' },
          { text: '工作区', link: '/myidea/guide/editor/work-area' },
          {
            text: '功能区',
            link: '/myidea/guide/editor/operation-area/',
            collapsed: false,
            items: [
              { text: '信息面板', link: '/myidea/guide/editor/operation-area/info' },
              { text: '标签面板', link: '/myidea/guide/editor/operation-area/tag' },
              { text: '附件面板', link: '/myidea/guide/editor/operation-area/attachment' },
              { text: '快照面板', link: '/myidea/guide/editor/operation-area/snapshot' },
              { text: '局部关系图谱', link: '/myidea/guide/editor/operation-area/relationship-graph' },
            ]
          },
          { text: '信息栏', link: '/myidea/guide/editor/info' },
        ]
      }, {
        text: '设置界面',
        link: '/myidea/guide/setup/',
        collapsed: false,
        items: [
          { text: '一般', link: '/myidea/guide/setup/general' },
          { text: '文件树', link: '/myidea/guide/setup/file-tree' },
          { text: '编辑', link: '/myidea/guide/setup/edit' },
          { text: '主题', link: '/myidea/guide/setup/theme' },
          { text: '备份', link: '/myidea/guide/setup/backup' },
        ]
      }, {
        text: '其它',
        collapsed: false,
        items: [
          { text: '搜索', link: '/myidea/guide/search' },
          { text: '文件模板', link: '/myidea/guide/file-template' },
          { text: '双向链接', link: '/myidea/guide/towway-link' },
          { text: '快捷键', link: '/myidea/guide/accelerator-key' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      // message: '<a href="download">下载</a><a href="guide">使用手册</a>',
      copyright: 'Copyright © 2025 mihaotu.com'
    }
  }
})
