import Taro from "@tarojs/taro";

export function getcrossTalkList(){
    let a = Taro.request({
        url: 'http://echo.apifox.com', //仅为示例，并非真实的接口地址
        data: {
          q1: 'v1',
          q2: 'v2'
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res)
        }
      })
    // let httpUrl: string = 'http://echo.apifox.com/get?q1=v1&q2=v2';

    // return Taro.request({url:httpUrl})
    return a
}