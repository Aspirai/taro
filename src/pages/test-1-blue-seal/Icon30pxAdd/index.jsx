import React from 'react';

import './index.less';

const Icon30pxAdd = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_30px_add_1 ${className}`}>
      <Image
        className="user_shape_binding_1"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804849044/a39a/f411/f2f1/80b0e38bdbef185bef4be594a99fb94e.png"
      />
      <Image
        className="user_shape_1"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804850810/871a/6f13/860d/631331f203ba7630160fdf89eb0e178e.png"
      />
    </View>
  );
};

export default Icon30pxAdd;
