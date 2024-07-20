
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
          <Text>
            登录
          </Text>
        </Button>
        <View className='headPortrait-icon'>
          <Image style={{ width: "10vw", height: "10vw" }} src={require('../../assets/headPortrait-icon.png')} />
        </View>
      </View>

      {/* 欢迎信息 */}
      <View className='welcome'>
        <Text className='welcome-text' style={{top:"1.5pc",left:"-3pc"}}>HI，你好</Text>
        <Text className='sub-text' style={{top:"3pc",left:"-8.8pc"}}>美好的一天从健康生活开始</Text>
      </View>

      {/* 功能按钮 */}
      <View className='features'>
        <View className='feature1'>
          <View className='feature-icon ai-scan'></View>
          <Text className='feature-text' style={{ left: "3pc", top: "-2.2pc" }}>AI扫描</Text>
          <Text className='sub-text' style={{ left: "-0.1pc", top: "-0.9pc" }}>1型学校 院外照护</Text>
        </View>
        <View className='feature2'>
          <View className='feature-icon knowledge-search'></View>
          <Text className='feature-text' style={{ left: "3.6pc", top: "-2.2pc" }}>知识速查</Text>
          <Text className='sub-text' style={{ left: "-0.4pc", top: "-0.8pc" }}>控糖效果 一目了然</Text>
        </View>
        {/* <View className='feature3'>
          <View className='feature-icon quick-doctor'></View>
          <Text className='feature-text'>快速问医</Text>
          <Text className='sub-text'></Text>
        </View>
        <View className='feature4'>
          <View className='feature-icon medication-tracker'></View>
          <Text className='feature-text'>血糖用药</Text>
          <Text className='sub-text'>控糖效果 一目了然</Text>
        </View> */}
      </View>
    </View>
  );
};

export default Index;
