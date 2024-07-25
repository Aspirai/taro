import React from 'react';
import './index.less';
import { View, Image, Span } from '@tarojs/components';

const ListPersonalCenter = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_list_personal_center ${className}`}>
      <Image
        className="user_line"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804848941/9cd2/b2e0/19b0/34cddf989b0b5b27df6e9a046f3d4947.png"
      />
      <Span className="user_text">申请记录</Span>
      <Image
        className="user_icon_20px_arrow"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804846798/672e/5055/6c8b/b6821b6b8a84d7becf07973a994e1940.png"
      />
      <Icon30pxAdd className="user_icon_30px_add" />
    </View>
  );
};

export default ListPersonalCenter;
