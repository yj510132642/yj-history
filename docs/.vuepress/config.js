module.exports = {
  title: 'Young Jay 前端开发记录',
  description: '工作记录',
  theme: 'reco',
  base: '/yj-history/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
        { text: '首页', link: '/' },
        { 
          text: 'Young Jay 前端开发记录', 
          items: [
            { text: 'Github', link: 'https://github.com/' },
            { text: '掘金', link: 'https://juejin.cn/' }
          ]
        }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
            { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" }
        ],
      }
    ]
  }
}