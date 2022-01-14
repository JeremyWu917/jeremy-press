const moment = require('moment-timezone');

module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      description: '一款教程、指导手册或者帮助文档类静态网站通用模板',
    },
    '/en/': {
      lang: 'en',
      description: 'A general template for static websites like tutorials, instruction manuals or help documents',
    },
  },
  title: 'JeremyPress',
  base: '/jeremy-press/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: '🇨🇳 简体中文',
        // 编辑链接文字
        editLinkText: '帮助我们完善文档',
        // 最后更新的描述
        lastUpdated: '文档更新于',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        nav: [
          { text: '开始使用', link: '/start/' },
          { text: '配置指南', link: '/guide/' },
          { text: '进阶玩法', link: '/advance/' },
          { text: '支持我们', link: '/contribute/' },
          { text: 'GitHub', link: 'https://github.com/JeremyWu917/jeremy-press' },
        ],
      },
      '/en/': {
        selectText: 'Languages',
        label: '🇬🇧 English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          { text: 'Start', link: '/en/start/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Advance', link: '/en/advance/' },
          { text: 'Contribute', link: '/en/contribute/' },
          { text: 'GitHub', link: 'https://github.com/JeremyWu917/jeremy-press' },
        ],
      },
    },
    sidebar: 'auto',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'JeremyWu917/jeremy-press',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  },
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        if (lang === 'zh-CN') {
          return moment(timestamp).tz('Asia/Shanghai').locale(lang).format('lll')
        } else {
          return moment(timestamp).utc().locale(lang).format('lll')
        }
      },
    },
    'vuepress-plugin-clean-urls': {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    },
    'sitemap': {
      hostname: 'https://jeremywu917.github.io/',
      dateFormatter: time => new moment(time, 'lll').toISOString(),
    },
    'seo': {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => '/favicon.png',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => 'https://jeremywu917.github.io/' + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        ($site.themeConfig.domain || '') + $page.frontmatter.image,
      publishedAt: $page =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    },
    'vuepress-plugin-smooth-scroll': {},
    'vuepress-plugin-baidu-autopush':{},
  },
};
