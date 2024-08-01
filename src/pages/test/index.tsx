import { useState } from 'react';
import './index.scss';
import { View, Button, Input, Image, Checkbox, Text } from '@tarojs/components';
import VerificationButton from '../../components/register/VerificationButton/index';
import LogInButton from '../../components/register/LogInButton';

// isVisible 和 onClose 是父组件传递给子组件的两个属性，用于控制登录弹窗的显示和关闭
const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [openId, setOpenId] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.detail.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.detail.value);
  };

  return (
    <View className='login-modal'>
      <View className='modal-content'>
        <View className='close-button'>×</View>
        <View className='top-bar'>
          <Image className='avatar' src='../../assets/register/logo_icon@3x.png' />
          <View className='icon-strip'></View>
          <View className='register-welcome-text'>
            <Text className='register-welcome-text-top'>HI,</Text>
            <Text className='register-welcome-text-bottom'>欢迎登录</Text>
          </View>
        </View>
        <View className='input-group'>
          <Input
            type='number'
            placeholder='输入手机号'
            // value={phoneNumber}
            value={"12345678901"}
            onInput={handlePhoneNumberChange}
          />
        </View>
        <View className='input-group-code'>
          <Input
            placeholder='输入验证码'
            // value={verificationCode}
            value={"123456"}
            onInput={handleVerificationCodeChange}
          />

          {/* 实现点击之后60秒倒计时 */}
          <VerificationButton phoneNumber={1} verificationCode={2} countdown_button={countdown}/>
        </View>
        <LogInButton countdown_button={countdown}/>
        <View className='agreement-bottom'>
          <Checkbox value='false' className='agreement'>
            我已阅读并同意
            <Text className='link'>《使用条款》</Text>和
            <Text className='link'>《隐私政策》</Text>
          </Checkbox>
        </View>
        <View className='third-party-login'>
          <Text>使用第三方登录</Text>
          <View className='icons'>
            {/* button实现获取用户信息 */}
            {/* <Button className='getUserInfo' openType='getUserInfo' onGetUserInfo={onGetUserInfo}> */}
            <Image src='../../assets/register/wechat_icon@3x.png' />
            {/* </Button> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
