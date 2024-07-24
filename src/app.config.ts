export default defineAppConfig({
  pages: [
    'pages/my/index',
    'pages/home/index',
    'pages/camera/index',
    'pages/test/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // tabBar导航 
  tabBar: {
    list: [
      {
        // 图标路径
        // 'iconPath': 'assets/home/ai_scan_icon.png',
        // 选中的图标路径
        // 'selectedIconPath': 'assets/home/ai_scan_icon.png',
        // 页面路径
        pagePath: 'pages/home/index',
        // 导航文本
        text: '首页'
      },
      {
        // 'iconPath': 'assets/home/ai_scan_icon.png',
        // 'selectedIconPath': 'assets/home/ai_scan_icon.png',
        pagePath: 'pages/my/index',
        text: '我的'
      },
    ]
  }
})
