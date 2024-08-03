import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';

import Store from '../../../store/index';

const VerificationButton = ({phoneNumber, verificationCode, countdown_button}) => {
  const [countdown, setCountdown] = useState(countdown_button);

  // 设置倒计时
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  // 设置点击事件
  const handleClick = () => {
    console.log(countdown)
    if (countdown === 0) {
      setCountdown(60);
      Taro.request({
        url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/ReCaptcha2/',
        method: 'POST',
        data: {
          "phone": phoneNumber,
          "code": verificationCode
        },
        success: function (res) {
          console.log(res.data)
        }
      });
      console.log('获取验证码');
    }
  };

  return (
    <View className="verification-button-container">
      <Button
        className="verification-button"
        onClick={handleClick}
        disabled={countdown > 0}
      >
        {countdown > 0 ? `${countdown}s后重新获取` : '获取验证码'}
      </Button>
    </View>
  );
};

export default VerificationButton;
