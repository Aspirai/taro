import Taro from '@tarojs/taro';
import React, { useState, useEffect, useContext } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';
import { observer } from 'mobx-react';

import Store from '../../../store/index';

const LogInButton = ({ countdown_button }) => {
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);

  const { registerStore } = useContext(Store); // 通过useContext获取全局状态
  const { time } = registerStore;
  const { phone_number } = registerStore;
  const { verification_code } = registerStore;
  const { select_box } = registerStore;


  // 监听验证码输入框的值
  useEffect(() => {
    if (select_box && verification_code.length === 6 || time === 0) {
      console.log(countdown_button)
      setIsLoginEnabled(true);
    } else {
      setIsLoginEnabled(false);
    }
  }, [verification_code, time]);

  // 设置点击事件
  const handleClick = () => {
    if (select_box === 'false') {
      Taro.showToast({
        title: '请阅读并同意用户协议',
        icon: 'none',
        duration: 2000
      });
      return;
    } else if (phone_number.length !== 11 || verification_code.length !== 6) {
      Taro.showToast({
        title: '请输入正确的手机号和验证码',
        icon: 'none',
        duration: 2000
      });
    } else {
      Taro.request({
        url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/ReCaptcha/',
        method: 'POST',
        data: {
          "phone": phone_number,
          "code": verification_code
        },
        success: function (res) {
          console.log(res.data)
        }
      });
      registerStore.timeOut();
      console.log('获取验证码', countdown_button);
    }
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

export default observer(LogInButton);
