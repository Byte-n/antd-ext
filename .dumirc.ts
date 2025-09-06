import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: 'auto',
  themeConfig: defineThemeConfig({
    name: '@byte.n/antd-ext',
    title: '@byte.n/antd-ext',
    lastUpdated: true,
    nav: {
      'zh-CN': [{ title: '组件', link: '/components' }],
    },
    footer:
      'Made with<span style="color: rgb(255, 255, 255);">❤</span>by <span>Byte-n | Copyright © 2025-present</span>',
    github: '',
    localesEnhance: [{ id: 'zh-CN', switchPrefix: '中' }],
    sidebarGroupModePath: ['/config', '/guide'],
    description: {
      'zh-CN': 'Ant Design 5.0 官网风格类似的 dumi2 主题插件',
      'en-US': 'dumi2 theme similar to antd v5 website',
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '文档',
          link: '/guide',
        },
        {
          text: '组件',
          link: '/components',
        },
        {
          text: '更新日志',
          link: '/changelogs',
        },
      ],
    },
    features: {
      'zh-CN': [
        {
          title: '基于Ant5',
          details: '基于Ant5',
        },
      ],
    },
    // loading: {
    //   skeleton: ['/guide', '/config', '/demo']
    // },
    docVersions: {
      // [pkgJSON.version]: ''
    },
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'dumi',
            description: '组件/文档研发工具',
            url: 'https://d.umijs.org',
            openExternal: true,
          },
          {
            title: 'Ant Design',
            url: 'https://ant.design',
            openExternal: true,
          },
          {
            title: 'Umi',
            description: 'React 应用开发框架',
            url: 'https://umijs.org',
            openExternal: true,
          },
          {
            title: 'dumi-theme-antd',
            description: 'dumi Antd主图',
            url: 'https://kuangpf.com/dumi-theme-antd/',
            openExternal: true,
          },
        ],
      },
      {
        title: '帮助',
        items: [],
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [],
      },
    ],
    moreLinks: [
      {
        text: 'Dumi',
        link: 'https://d.umijs.org/',
      },
      {
        text: 'Ant Design',
        link: 'https://ant.design/',
      },
    ],
  }),
  // themeConfig: {
  //   name: '@byte.n/antd-ext',
  //   nav: [
  //     {
  //       title: '文档',
  //       link: '/guide',
  //     },
  //     {
  //       title: '组件',
  //       link: '/components',
  //     },
  //     {
  //       title: '更新日志',
  //       link: '/changelogs',
  //     },
  //   ],
  // },
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.tsx',
  // },
});
