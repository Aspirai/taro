// app.tsx用于全局配置，比如引入全局样式、全局状态管理等
import { Component, PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/camera-path'
import homeStore from './store/home'
import crossTalkStore from './store/cross_talk'

import './app.scss'

// store用于存储全局状态
const store = {
  counterStore,
  homeStore,
  crossTalkStore,
}

// Component<PropsWithChildren> 表示这是一个接受子组件的组件
class App extends Component<PropsWithChildren>  {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      // store 注入到了Provider中，这样所有的子组件都可以通过inject('store')来注入store
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
