import React, { useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';

const VerificationButton = () => {
  const [countdown, setCountdown] = useState(0);

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

  const handleClick = () => {
    if (countdown === 0) {
      setCountdown(60);
      // 在这里添加获取验证码的逻辑，例如发起网络请求
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
