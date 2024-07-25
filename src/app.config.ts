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
    custom: false, // 是否自定义tabBar
    color: '#a9a9a9', // 默认字体颜色
    selectedColor: '#14ce6f', // 选中字体颜色
    backgroundColor: '#ffffff', // 背景颜色
    list: [
      {
        // 图标路径
        'iconPath': 'assets/home/home.png',
        // 选中的图标路径
        'selectedIconPath': 'assets/home/home_active.png',
        // 页面路径
        pagePath: 'pages/home/index',
        // 导航文本
        text: '首页'
      },
      {
        'iconPath': 'assets/home/companion.png',
        'selectedIconPath': 'assets/home/companion_active.png',
        pagePath: 'pages/companion/index',
        text: '同伴'
      },
      {
        'iconPath': 'assets/home/issue.png',
        'selectedIconPath': 'assets/home/issue_active.png',
        pagePath: 'pages/issue/index',
        text: '问医'
      },
      {
        'iconPath': 'assets/home/study.png',
        'selectedIconPath': 'assets/home/study_active.png',
        pagePath: 'pages/study/index',
        text: '学习'
      },
      {
        'iconPath': 'assets/home/user.png',
        'selectedIconPath': 'assets/home/user_active.png',
        pagePath: 'pages/my/index',
        text: '我的'
      },
    ]
  }
})