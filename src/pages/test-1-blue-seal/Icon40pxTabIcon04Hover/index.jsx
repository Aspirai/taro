import React from 'react';

import './index.less';

const Icon40pxTabIcon04Hover = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_40px_tab_icon04_hover ${className}`}>
      <Image
        className="user_path_2"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804850789/5157/58a5/e7de/afd8d015b38768e457f8ba0bb437dca0.png"
      />
      <View className="user_rectangle"></View>
      <View className="user_rectangle_backup"></View>
      <View className="user_rectangle_1"></View>
    </View>
  );
};

export default Icon40pxTabIcon04Hover;
