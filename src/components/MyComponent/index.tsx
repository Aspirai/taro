import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <View className="my-component">
      <Text className="title">{title}</Text>
    </View>
  );
};

export default MyComponent;
