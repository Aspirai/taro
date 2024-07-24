export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/camera/index',
    'pages/companion/index',
    'pages/issue/index',
    'pages/study/index',
    'pages/my/index',
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
        // 'iconPath': 'assets/home/home.svg',
        // 选中的图标路径
        // 'selectedIconPath': 'assets/home/home_active.svg',
        // 页面路径
        pagePath: 'pages/home/index',
        // 导航文本
        text: '首页'
      },
      {
        // 'iconPath': 'assets/home/user.svg',
        // 'selectedIconPath': 'assets/home/user_active.svg',
        pagePath: 'pages/companion/index',
        text: '同伴'
      },
      {
        // 'iconPath': 'assets/home/user.svg',
        // 'selectedIconPath': 'assets/home/user_active.svg',
        pagePath: 'pages/issue/index',
        text: '问医'
      },
      {
        // 'iconPath': 'assets/home/user.svg',
        // 'selectedIconPath': 'assets/home/user_active.svg',
        pagePath: 'pages/study/index',
        text: '学习'
      },
      {
        // 'iconPath': 'assets/home/user.svg',
        // 'selectedIconPath': 'assets/home/user_active.svg',
        pagePath: 'pages/my/index',
        text: '我的'
      },
    ]
  }
})