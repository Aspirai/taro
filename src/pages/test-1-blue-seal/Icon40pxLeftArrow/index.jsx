import React from 'react';

import './index.less';

const Icon40pxLeftArrow = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_40px_left_arrow ${className}`}>
      <View className="user_ellipsoid_1"></View>
      <Image
        className="user_path_6"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804856646/037e/306b/3b32/a7a3419894a212020f567b6d62890b4f.png"
      />
    </View>
  );
};

export default Icon40pxLeftArrow;
