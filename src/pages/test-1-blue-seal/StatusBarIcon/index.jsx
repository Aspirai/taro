import React from 'react';
import './index.less';

const StatusBarIcon = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_status_bar_icon ${className}`}>
      <View className="user_bg">
        <View className="user_bg_backup"></View>
        <View className="user_rectangle_2"></View>
        <Image
          className="user_straight_line"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804847714/b878/7ce4/42b5/7cce5653a839d05285a80df49d4fd63f.png"
        />
      </View>
      <View className="user_bg_1"></View>
      <StatusBarIcon01 className="user_status_bar_icon01" />
      <StatusBarIcon01 className="user_status_bar_icon02" />
      <StatusBarIcon01 className="user_status_bar_icon03" />
      <StatusBarIcon01 className="user_status_bar_icon04" />
    </View>
  );
};

export default StatusBarIcon;
