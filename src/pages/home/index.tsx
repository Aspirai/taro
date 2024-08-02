import { View, Text, Image, Button, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import LineCharts from '@/components/LineCharts';
import './index.scss';
import { useState } from 'react';

const Index = () => {

  // 跳转路由到camera页面
  const handleJumpToCamera = () => {
    Taro.navigateTo({
      url: '/pages/camera/index',
    });
  };

  // 跳转路由到chat页面
  const handleJumpToChat = () => {
    Taro.navigateTo({
      url: '/pages/chat/index',
    });
  };

  // 图表数据
  //#region 
  const option = ['白细胞', '粒细胞', '红细胞', '血小板'];
  const [selectedValue, setSelectedValue] = useState(option[0]);
  const handleChange = (e) => {
    const { value } = e.detail;
    setSelectedValue(option[value]);
    setSelectedData(data[value]);
  };

  const whiteBloodCell = [1, 2, 1.2, 1.5, 1.8, 2, 1.2];
  const granularCell = [0.1, 1, 1.2, 1.5, 1.8, 2, 1.2];
  const redBloodCell = [1, 2, 1.2, 1, 1.8, 3, 1];
  const bloodPlatelet = [1, 2, 1, 0.5, 1.8, 2, 1.2];
  const data = [whiteBloodCell, granularCell, redBloodCell, bloodPlatelet];
  const [selectedData, setSelectedData] = useState(data[0]);

  //#endregion

  return (
    <View className='index'>

      {/* 欢迎信息 */}

      <View className='welcome'>
        <View className='welcome-text'>HI，你好</View>
        <View className='sub-text'>美好的一天从健康生活开始</View>
      </View>

      {/* 功能按钮 */}
      <View className='features'>
        <View className='feature1' onClick={handleJumpToCamera}>
          <View className='feature-icon ai-scan' ></View>
          <Text className='feature-text' >AI扫描</Text>
          <Text className='core-sub-text'>1型学校 院外照护</Text>
        </View>
        <View className='feature2' onClick={handleJumpToChat}>
          <View className='feature-icon knowledge-search'></View>
          <Text className='feature-text'>知识速查</Text>
          <Text className='core-sub-text'>控糖效果 一目了然</Text>
        </View>
      </View>

      {/* 图表区域 */}
      <View className='charts'>
        <View className='chart-title'>
          <Text className='chart-title-text'>血糖趋势</Text>
          <Picker mode="selector" range={option} onChange={handleChange}>
            <View className="picker">
              {selectedValue}
              <View className='arrow'></View>
            </View>
          </Picker>
        </View>
        <LineCharts data={selectedData} />
      </View>
    </View>
  );
};

export default Index;
