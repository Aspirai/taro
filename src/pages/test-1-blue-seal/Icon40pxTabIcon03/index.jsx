import React from 'react';

import './index.less';

const Icon40pxTabIcon03 = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_40px_tab_icon03 ${className}`}>
      <Image
        className="user_shape_7"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804853903/1722/c746/3aac/99a705e07b93764fa715659220d215a0.png"
      />
      <View className="user_shape_8">
        <Image
          className="user_path"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804852970/bdfb/9f77/0a95/0ba37d178e1a1103b2c368f9c8e6f9be.png"
        />
        <Image
          className="user_path_1"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804850707/9a6f/972a/3027/5bf07236eb70c958dd88c7df3d0a404c.png"
        />
      </View>
    </View>
  );
};

export default Icon40pxTabIcon03;
