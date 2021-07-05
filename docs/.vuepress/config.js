module.exports = {
  title: 'Pluto-UI',
  description: 'Pluto-UI是基于React.js实现的移动端组件库',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '文档', link: '/' },
      { text: '示例', link: '/example/' },
    ],
    sidebar: [
      {
        title: '概览',
        collapsable: false,
        children: [
          '/',
          '/start/'
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '基础',
            collapsable: false,
            children: [
              '/component/button/',
              '/component/carousel/',
              '/component/countdown/',
              '/component/load-more/',
              '/component/safe-area/',
              '/component/copy/',
            ]
          },
          {
            title: '表单',
            collapsable: false,
            children: [
              '/component/input/',
              '/component/input-code/',
              '/component/input-number/',
              '/component/picker/',
            ]
          },
          {
            title: '导航',
            collapsable: false,
            children: [
              '/component/header/',
            ]
          },
          {
            title: '提示',
            collapsable: false,
            children: [
              '/component/modal/',
              '/component/toast/',
              '/component/loading/',
              '/component/dialog/',
            ]
          },
          {
            title: '多媒体',
            collapsable: false,
            children: [
              '/component/camera/',
              '/component/video/',
            ]
          }
        ],
      }
    ]
  }
}