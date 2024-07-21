import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';
// import MyComponent from '../../components/MyComponent';
import HomeCore from '../../components/home/core';

const Index: React.FC = () => {
  return (
    <View className="index">
      {/* <MyComponent title="Hello, Taro!" /> */}
      <HomeCore />
    </View>
  );
};

export default Index;
