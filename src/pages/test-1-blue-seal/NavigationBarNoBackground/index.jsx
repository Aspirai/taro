import React from 'react';
import './index.less';

const NavigationBarNoBackground = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_navigation_bar_no_background ${className}`}>
      <View className="user_electric_quantity">
        <View className="user_battery">
          <View className="user_border"></View>
          <Image
            className="user_cap"
            src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804856430/1bda/d8e4/f733/4b610c1374e4b3ad9a618c171af4e5be.png"
          />
          <View className="user_capacity"></View>
        </View>
        <Image
          className="user_wifi"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804856525/f63b/2a5c/3561/2c1ef0368840e7d54c4ee5ac1b055fd8.png"
        />
        <Image
          className="user_cellular_connection"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804857136/46bc/cdb5/e417/bb494fff3db7edbc630ee777c39810eb.png"
        />
        <Span className="user_text_6">9:41</Span>
      </View>
      <View className="user_status">
        <Span className="user_text_7">菜单</Span>
        <Icon40pxLeftArrow className="user_left_arrow" />
        <Span className="user_text_8">菜单</Span>
      </View>
    </View>
  );
};

export default NavigationBarNoBackground;
