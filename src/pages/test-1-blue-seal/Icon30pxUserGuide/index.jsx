import React from 'react';

import './index.less';

const Icon30pxUserGuide = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_30px_user_guide ${className}`}>
      <Image
        className="user_shape_4"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804851198/aee9/dcad/0754/439bf926b672cf398a2b3bf144c366af.png"
      />
    </View>
  );
};

export default Icon30pxUserGuide;
