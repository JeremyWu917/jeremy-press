---
metaTitle: 进阶玩法 | Jeremy Press
meta:
  - name: description
    content: Jeremy Press 是一款 Markdown 文档类静态网站通用模板. https://github.com/JeremyWu917/jeremy-press
  - name: keywords
    content: jeremypress，用户文档,博客,文档,博客,文章
---

# 进阶玩法

## 为什么选择 VuePress

- `Vue` 驱动，强大的插件生态系统，官方文档详细
- 支持搜索引擎优化( `SEO` )，单页面应用，按需加载，支持 `PWA` (无网络情况下照样能访问)
- 为技术文档而优化内置 `markdown` 拓展
- 在 `md(Markdown)` 中可以写 `vue` 组件，甚至写原生`JavaScript` , `TypeScript` , `HTML` , `CSS` ，无任何压力阻碍,更加的灵活,可定制化
- 可以自定义开发主题，任意修改，网站风格不在千篇一律
- 支持 `PWA` (自动生成 `Service Worker` )，像 `app` 应用一样添加到手机桌面上
- 集成了 `Google Analytics` 集成，也支持百度统计
- 基于 `GitHub` 的最后上传更新时间
- 支持国际化、多语言，只需配置一下就好
- 响应式布局，手机端， `PC` 端网站友好的用户体验

:::tip

远不止于用来搭建博客，可以开发公司企业官网等网站应用,也可结合 `boostrap` , `Element UI` 等技术进行二次开，构建更复杂的应用

:::

:::warning

1. 目前 `VuePress` 版本并没有支持 `TypeScript`，并且没有提供类型定义,但如果想要用 `TypeScript`，可以安装 `vuepress-plugin-typescript`插件，它提供了在 `VuePress` 中使用 `typescript` 的部分能力。如果你想获取到正确的类型定义，你可以配合 `vuepress-types` 一起使用
2. `vuepress-types` 作为 `VuePress` 的类型定义包，还处于实验阶段
3. 具体使用可参考文档 `vuepress-plugin-typescript` 使用文档，可以去尝试一下，这个不仅仅可以写 `TypeScript` ，在 `md` 也可以写 `TypeScript`

:::

## 准备

### 安装 NodeJS

- 下载 `NodeJs`，并安装到本地，下一步，下一步,即可安装
- 检测 `NodeJs` 是否安装成功，可在命令行终端输入 `node -v`，同时查看一下 `npm` 的版本`npm -v `(在安装 `Node` 完后， `npm` 是自动就安装上了的,集成在了 `Node` 运行坏境里)

![image-20211221093205956](https://gitee.com/jeremywuiot/img-res-all/raw/master/src/iie_shop/image-20211221093205956.png)

:::warning

请确保您的 `NodeJS` 版本 `>= 8`

:::

### 项目搭建

#### 全局安装 vuepress

- 命令行终端下执行如下语句（推荐使用 `yarn` ）

```bash
yarn global add vuepress
# 或
npm install -g vuepress 
# 或
cnpm install -g vuepress
```

:::danger

- 若是使用 `yarn` 安装，需要先全局安装 `yarn(npm install -g yarn)` 
- 若是使用 `npm` 全局安装，请确保你的 `Node.js` 版本 `>= 8`
- 如果你的现有项目依赖了 `webpack 3.x`，推荐使用 `yarn` 而不是 `npm` 来安装 `VuePress` 。因为在这种情形下，`npm` 会生成错误的依赖树

:::

### 初始化项目

在您电脑的某个磁盘下创建一个项目的目录，并进入项目目录：

```bash
mkdir jeremy-press
cd jeremy-press
```

进入项目目录后，执行 `yarn init -y` ，此时会在 `jeremy-press` 文件夹下生成一个 `package.json` 文件，文件内容如下：

```json
{
  "name": "jeremy-press",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
}
```

 在 `package.json` 中配置启动脚本

```json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
},
```

:::warning

配置完成后，可以使用 `yarn dev` 启动项目、`yarn build` 构建打包项目 

:::

接下来创建 `docs` 目录， 这个 `docs` 文件夹主要用于放置我们写的 `.md` 类型的文章以及 `.vuepress` 相关的配置，这个文件夹的名字任意，与您启动项目和构建项目时的配置保持一致就可以了。

```bash
mkdir docs
cd docs
mkdir .vuepress
```

这个 `.vuepress` 主要就是我们用于存放全局的配置、组件、静态资源等与 `VuePress` 相关的文件配置都将会放在这里。

### 基本配置

要让网站显示内容，就需要进行配置， 即需要在 `.vuepress` 文件夹下新建一个总的配置文件 `config.js` ， 这个文件的名字是固定的，即 `.vuepress/config.js`

```bash
cd .vuepress
touch config.js
```

`config.js` 最基本的配置内容如下：

```javascript
module.exports = {
  title: 'JeremyPress',
  description: '一款教程、指导手册或者帮助文档类静态网站通用模板'
}
```

### 插件安装

这里我们按照如下插件：

- moment
- moment-timezone
- vuepress-plugin-auto-sidebar
- vuepress-plugin-baidu-autopush
- vuepress-plugin-clean-urls
- vuepress-plugin-seo
- vuepress-plugin-sitemap
- vuepress-plugin-smooth-scroll

语句如下：

```bash
# packagename 为包的名称
yarn add -D packagename
```

:::warning

注意：`-D` 不能忘记，这里我们只需要安装在开发环境依赖即可

:::

### 配置插件

在 `config.js` 中配置一下插件即可：

```javascript
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
```

### 附录

1. `config.js` 文件如下：

```javascript
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
    docsBranch: 'source',
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
```

2. `package.json` 文件如下

```json
{
  "name": "jeremy-press",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:JeremyWu917/jeremy-press.git",
  "author": "jeremy <jeremy.wu@foxmail.com>",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "moment": "^2.29.1",
    "moment-timezone": "^0.5.34",
    "vuepress": "^1.8.2",
    "vuepress-plugin-auto-sidebar": "^2.3.2",
    "vuepress-plugin-baidu-autopush": "^1.0.1",
    "vuepress-plugin-clean-urls": "^1.1.2",
    "vuepress-plugin-seo": "^0.1.4",
    "vuepress-plugin-sitemap": "^2.3.1",
    "vuepress-plugin-smooth-scroll": "^0.0.10"
  }
}
```

### 个性化按需配置

我们根据需要在 `docs` 目录下创建对应的文件夹，再在对应的文件夹下创建 `markdown` 文件即可，如下：

![image-20211221105723509](https://gitee.com/jeremywuiot/img-res-all/raw/master/src/iie_shop/image-20211221105723509.png)

![image-20211221105757435](https://gitee.com/jeremywuiot/img-res-all/raw/master/src/iie_shop/image-20211221105757435.png)

对应关系如下：

| 菜单名称  | 文件名称   | 备注                                                         |
| --------- | ---------- | ------------------------------------------------------------ |
| 开始使用  | start      |                                                              |
| 配置指南  | guide      |                                                              |
| 进阶玩法  | advance    |                                                              |
| 支持我们  | contribute |                                                              |
| Languages | en         | en 文件夹下需要再创建 start、guide、advance 和 contribute 文件夹，且对应路径建立英文编写的 markdown 文件 |

`config.js` 文件里 `locales` 节点再进行配置一下即可：

```javascript
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
```

