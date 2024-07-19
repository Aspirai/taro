import { Component, PropsWithChildren } from "react";
// 导入组件库
import { View, Text, Button, Navigator } from "@tarojs/components";
// 状态管理
import { observer, inject } from "mobx-react";

// @inject('store') 用于注入状态管理
@inject("store")
@observer
class Index extends Component {
  render() {
    return (
      <View className='index'>
        <View className="header">
          
        </View>
        <View className="main">

        </View>
        <View className="footer">

        </View>
      </View>
    );
  }
}

export default Index;
