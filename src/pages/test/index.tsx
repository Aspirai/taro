import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';
import HomeCore from '../../components/home/core';


const Index: React.FC = () => {
  return (
    <View className="index">
      <HomeCore />
    </View>
  );
};

export default Index;
