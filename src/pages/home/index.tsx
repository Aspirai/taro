import { View, Text, Image, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

const Index = () => {

  // 跳转路由到camera页面
  const handleJumpToCamera = () => {
    Taro.navigateTo({
      url: '/pages/camera/index',
    });
  };


  return (
    <View className='index'>
      {/* 顶部栏 */}
{/*       <View className='top-bar'>
        <Button className='login-button' onClick={openLoginModal}>
          <Text className='text' style={{ fontSize: "12px" }}>
            登录
          </Text>
        </Button>
        <View className='headPortrait-icon'>
          <Image style={{ width: "10vw", height: "10vw", right: "10px", position: "relative" }} src={require('../../assets/home/user.png')} />
        </View>
      </View> */}

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
