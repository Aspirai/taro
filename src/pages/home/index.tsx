
//#region 导入

/* import { Component, PropsWithChildren } from "react";
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

export default Index; */
// #endregion

import Taro from '@tarojs/taro';
import { View, Text, Image, Input, Button } from '@tarojs/components';
import './index.scss';
import { win32 } from 'path';

const Index = () => {
  return (
    <View className='index'>
      {/* 顶部栏 */}
      <View className='top-bar'>
        <Button className='login-button'>
          <Text className='text' style={{fontSize:"12px"}}>
            登录
          </Text>
        </Button>
        <View className='headPortrait-icon'>
          <Image style={{ width: "10vw", height: "10vw" }} src={require('../../assets/headPortrait-icon.png')} />
        </View>
      </View>

      {/* 欢迎信息 */}
      <View className='welcome'>
        <View className='welcome-text'>HI，你好</View>
        <View className='sub-text'>美好的一天从健康生活开始</View>
      </View>

      {/* 功能按钮 */}
      <View className='features'>
        <View className='feature1'>
          <View className='feature-icon ai-scan'></View>
          <Text className='feature-text' >AI扫描</Text>
          <Text className='core-sub-text'>1型学校 院外照护</Text>
        </View>
        <View className='feature2'>
          <View className='feature-icon knowledge-search'></View>
          <Text className='feature-text'>知识速查</Text>
          <Text className='core-sub-text'>控糖效果 一目了然</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;
