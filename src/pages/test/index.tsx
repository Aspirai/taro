import React, { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';


const Index: React.FC = (initial) => {
  const [state, setState] = React.useState(initial);

  // useEffect(() => {
  //   console.log('Index mounted');
  //   return () => {
  //     console.log('Index unmounted');
  //   };
  // }
  
  return (
    <View className="index">
      <Text>Hello companion!</Text>
    </View>
  );
};

export default Index;
