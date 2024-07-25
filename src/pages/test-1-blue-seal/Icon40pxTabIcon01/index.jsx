import React from 'react';

import './index.less';

const Icon40pxTabIcon01 = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_40px_tab_icon01 ${className}`}>
      <Image
        className="user_combined_shape"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804850440/22c7/a52d/0daa/a0044e7becb2af6a91d9ef3ce18d1a0d.png"
      />
      <View className="user_combined_shape_1">
        <Image
          className="user_group"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804851893/f9c1/9c1a/5cd0/acef44209710aba9bb771d1105f8e666.png"
        />
        <Image
          className="user_shape_6"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804851826/80de/2537/f277/c1a62b637e3c563745360d8c6c650c78.png"
        />
      </View>
    </View>
  );
};

export default Icon40pxTabIcon01;
