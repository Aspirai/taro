import Taro from '@tarojs/taro';
import { useState, useEffect, useContext } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';

import Store from '../../../store/index';
import { observer } from 'mobx-react';


const VerificationButton = ({ countdown_button }) => {
  const [countdown, setCountdown] = useState(countdown_button);

  const { registerStore } = useContext(Store); // 通过useContext获取全局状态
  const { phone_number } = registerStore;

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
    if (phone_number.length !== 11 && phone_number.replace(/[^0-9]/ig, "").length !== 11) { // 正则表达式判断是否为11位数字
      Taro.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000
      });
    } else {
      registerStore.setTime();
      console.log(phone_number)
      // console.log('countdown is: ',countdown)
      if (countdown === 0) {
        setCountdown(60);
        Taro.request({
          url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/ReCaptcha2/',
          method: 'POST',
          data: {
            "phone": phone_number,
          },
          success: function (res) {
            console.log(res.data)
          }
        });
        console.log('获取验证码');
      }
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

export default observer(VerificationButton);
