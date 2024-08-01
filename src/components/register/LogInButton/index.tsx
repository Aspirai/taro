import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';

const LogInButton = () => {
  const [countdown, setCountdown] = useState(0);
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);

  // 设置倒计时
  useEffect(() => {
    if (verificationCode.length === 6 && countdown > 0) {
      setIsLoginEnabled(true);
    } else {
      setIsLoginEnabled(false);
    }
  }, [verificationCode, countdown]);

  // 设置点击事件
  const handleClick = () => {
    if (countdown === 0) {
      setCountdown(60);
      Taro.request({
        url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/ReCaptcha2/',
        method: 'POST',
        data: {
        },
        success: function (res) {
          console.log(res.data)
        }
      });
      console.log('获取验证码');
    }
  };

  return (
    <View className="login-button-container">
      <Button
        className="login-button"
        disabled={!isLoginEnabled}  // disabled 属性用于控制按钮是否可点击
      >
        登录
      </Button>
    </View>
  );
};

export default LogInButton;
