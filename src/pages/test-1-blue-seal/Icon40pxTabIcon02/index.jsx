import React from 'react';

import './index.less';

const Icon40pxTabIcon02 = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_40px_tab_icon02 ${className}`}>
      <Image
        className="user_combined_shape_2"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804849794/b204/3088/6267/95eb48d68669994eaa761196ef305d91.png"
      />
      <View className="user_combined_shape_3">
        <Image
          className="user_group_1"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804852019/2d21/9384/4715/a2453e21cdaea5f518819e3a29d16306.png"
        />
        <Image
          className="user_oval"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804851782/e72f/5c05/4e8a/4520ddf6192c96ca03239544a895f15c.png"
        />
      </View>
    </View>
  );
};

export default Icon40pxTabIcon02;
