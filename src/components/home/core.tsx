import React from "react";
import { View, Text, Image } from "@tarojs/components";
import './core.scss';

const HomeCore: React.FC = () => {
  return (
    <View className="home-core">
      <View className='feature'>
        <View className='ai-scan'>
          <Image src='https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png' mode="scaleToFill"/>
          <Image src='' mode="scaleToFill"/>
        </View>
        <Text className='feature-text'>AI扫描</Text>
        <Text className='sub-text'>1型学校 院外照护</Text>
      </View>
    </View>
  );
};

export default HomeCore;