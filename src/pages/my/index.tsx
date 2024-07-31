
import { useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import LoginModal from '../../components/register';
import Taro from '@tarojs/taro';


const Index = () => {

  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  const avatarUrl = Taro.getStorageSync('avatarUrl');
  const nickName = Taro.getStorageSync('nickName');



  return (
    <View className='my-container'>
      <View className='my-header'>
        <View className='my-header-top'>
        </View>
        <View className='my-header-middle'>
          {avatarUrl ? (<Image className='my-avatar' src={avatarUrl} />) : (<Image className='my-avatar' src='https://via.placeholder.com/80' />)}
          <View className='my-user-info'>
            {/* 若nickName为空，则显示登录，不为空，则不显示登录 */}
            {nickName ? (<Text className='my-name'>{nickName}</Text>) : (<Text className='my-name' onClick={openLoginModal}>登录</Text>)}
            {/* <Text className='my-name'>{nickName}</Text> */}
            {/* <Text className='my-name' onClick={openLoginModal}>登录</Text> */}
          </View>
        </View>
      </View>

      <View className='my-container-bottom'>
        <View className='my-details'>
          <View className='my-detail-item'>
            <Text className='my-label'>所属团队</Text>
            <Text className='my-value'>******</Text>
          </View>
          <View className='my-detail-item'>
            <Text className='my-label'>所属机构</Text>
            <Text className='my-value'>*********</Text>
          </View>
        </View>
        <View className='my-menu'>
          <View className='my-menu-item'>
            <Text className='my-menu-text'>我的医生团队</Text>
          </View>
          <View className='my-menu-item'>
            <Text className='my-menu-text'>签约管理</Text>
          </View>
          <View className='my-menu-item'>
            <Text className='my-menu-text'>服务管理</Text>
          </View>
          <View className='my-menu-item'>
            <Text className='my-menu-text'>使用指南</Text>
          </View>
          <View className='my-menu-item'>
            <Text className='my-menu-text'>设置</Text>
          </View>
        </View>
      </View>

      {/* 登录弹窗 */}
      <LoginModal isVisible={isLoginModalVisible} onClose={closeLoginModal} />
    </View>
  );
};

export default Index;
