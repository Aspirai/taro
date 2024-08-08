import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';
import StackedLine from '@/components/stackedLine'; // Correctly import the component with a capitalized name
import Taro from '@tarojs/taro';

const Index: React.FC = () => {
  let data = [];
  Taro.request({
    url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/bloodTest/1',
    method: 'GET',
    success: (res) => {
      data = res.data.datas;
      console.log(data);
      const keys = Object.keys(data[0].datas); // 获取对象的key值
      console.log('keys', keys);
      const result = {}; // 结果对象
      keys.map((key) => { // 初始化result对象
        result[key] = [];
      });
      data.map((item) => { // 遍历data数组
        keys.map((key) => { // 遍历keys数组
          result[key].push(item.datas[key]); // 将data数组中的数据push到result对象中
        });
      });
      console.log(result);
    },
    fail: (err) => {
      console.log('err', err);
    },
  });

  return (
    <View className="index">
      <View>Hello issue!</View>
      <StackedLine /> {/* Use the component as a JSX element */}
    </View>
  );
};

export default Index;
