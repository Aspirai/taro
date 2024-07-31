import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Input, Image, Checkbox, Text } from '@tarojs/components';
import './index.scss';
import VerificationButton from '../verification/index';

const LoginModal = ({ isVisible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [openId, setOpenId] = useState('');
  const [countdown, setCountdown] = useState(60);


  if (!isVisible) {
    return null;
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.detail.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.detail.value);
  };

  // const url = "	http://127.0.0.1:4523/m1/4874230-4530188-default/user/"
  const getToken = () => {
    Taro.login({
      success: function (res) {
        console.log(res.code)
        if (res.code) {
          //发起网络请求
          Taro.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx97a15cfc77ef26a3&secret=f6b805e1d32873743dede70958f7b2aa&js_code=' +
              res.code + '&grant_type=authorization_code',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res.data)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });

    Taro.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        Taro.login() //重新登录
      }
    });
  }

  const wx_login = () => {
    Taro.getUserProfile(
      {
        desc: '用于完善会员资料',
        success: (res) => {
          console.log(res.userInfo)
          Taro.setStorageSync('nickName', res.userInfo.nickName)
          Taro.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
          Taro.login({
            success: function (res) {
              console.log(res.code)
              if (res.code) {
                //发起网络请求
                Taro.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx97a15cfc77ef26a3&secret=f6b805e1d32873743dede70958f7b2aa&js_code=' +
                    res.code + '&grant_type=authorization_code',
                  data: {
                    code: res.code
                  },
                  success: function (res) {
                    const newAccessToken = res.data.access_token
                    setAccessToken(newAccessToken)
                    const newOpenId = res.data.openid
                    setOpenId(newOpenId)
                    console.log(res.data)
                  }
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          });
        }
      }
    )

    // 延时关闭登录弹窗
    setTimeout(() => {
      onClose();
    }, 2000);

    // 删除页面缓存
    // Taro.removeStorageSync('nickName')
    // Taro.removeStorageSync('avatarUrl')

    // 跳转到首页
    Taro.switchTab({
      url: '/pages/home/index'
    })
  }

  const test = (countdown) => {
      let timer;
      console.log('获取验证码',countdown);
      if (countdown > 0) {
        timer = setInterval(() => {
          setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);
      } else {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
  }

  const phone_login = () => {
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
  }

  const phone_login2 = () => {
    Taro.request({
      url: 'http://127.0.0.1:4523/m1/4874230-4530188-default/ReCaptcha/',
      method: 'POST',
      data: {
        "phone": phoneNumber,
        "code": verificationCode
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }

  return (
    <View className='login-modal'>
      <View className='modal-content'>
        <View className='close-button' onClick={onClose}>×</View>
        <View className='top-bar'>
          <Image className='avatar' src={require('../../assets/register/logo_icon@3x.png')} />
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
          <Button className='code-button' onClick={() => test(countdown)}>
            {countdown < 60 ? `${countdown}秒后重新获取` : '获取验证码'}
          </Button>
        </View>
        <Button className='login-button' onClick={phone_login2}>登录</Button>
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
            <Image src={require('../../assets/register/wechat_icon@3x.png')} onClick={wx_login} />
            {/* </Button> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
