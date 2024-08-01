import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';

const LogInButton = ({countdown_button}) => {
  const [countdown, setCountdown] = useState(countdown_button);
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);

  // 监听验证码输入框的值
  useEffect(() => {
    if (verificationCode.length === 6 || countdown > 0) {
      setIsLoginEnabled(true);
    } else {
      setIsLoginEnabled(false);
    }
  }, [verificationCode, countdown]);

  // 设置点击事件
  const handleClick = () => {
    console.log('获取验证码');
  };

  return (
    <View className="login-button-container">
      <Button
        className="login-button"
        disabled={!isLoginEnabled}  // disabled 属性用于控制按钮是否可点击
        onClick={handleClick}
      >
        登录
      </Button>
    </View>
  );
};

export default LogInButton;
