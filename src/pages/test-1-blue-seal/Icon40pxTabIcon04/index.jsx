import React from 'react';

import './index.less';

const Icon40pxTabIcon04 = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_40px_tab_icon04 ${className}`}>
      <Image
        className="user_oval_3"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804854397/e894/f13a/6752/2a732bb3472b0094dd7f67858c0c9e2a.png"
      />
      <View className="user_rectangle_4"></View>
    </View>
  );
};

export default Icon40pxTabIcon04;
