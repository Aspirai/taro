import React, { useState } from 'react';
import { View, Button, Input, Image, Checkbox, Text } from '@tarojs/components';
import './index.scss';

const LoginModal = ({ isVisible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  if (!isVisible) {
    return null;
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.detail.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.detail.value);
  };

  const handleInviteCodeChange = (e) => {
    setInviteCode(e.detail.value);
  };

  return (
    <View className='login-modal'>
      <View className='modal-content'>
        <View className='close-button' onClick={onClose}>×</View>
        <Image className='avatar' src='path/to/avatar.png' />
        <Text className='register-welcome-text'>HI, 欢迎登录</Text>
        <View className='input-group'>
          <Input
            type='number'
            placeholder='输入手机号'
            value={phoneNumber}
            onInput={handlePhoneNumberChange}
          />
        </View>
        <View className='input-group'>
          <Input
            placeholder='输入验证码'
            value={verificationCode}
            onInput={handleVerificationCodeChange}
          />
          <Button className='code-button'>获取验证码</Button>
        </View>
        <View className='input-group'>
          <Input
            placeholder='输入邀请码'
            value={inviteCode}
            onInput={handleInviteCodeChange}
          />
        </View>
        <Button className='login-button'>登录</Button>
        <Checkbox value='false' className='agreement'>
          我已阅读并同意
          <Text className='link'>《使用条款》</Text>和
          <Text className='link'>《隐私政策》</Text>
        </Checkbox>
        <View className='third-party-login'>
          <Text>使用第三方登录</Text>
          <View className='icons'>
            <Image src='path/to/wechat.png' />
            <Image src='path/to/qq.png' />
            <Image src='path/to/apple.png' />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
