import React from 'react';

import './index.less';

const Icon30pxSet = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_30px_set ${className}`}>
      <Image
        className="user_shape_5"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804851311/05f1/c2f7/b180/2a573ae733e38957c5d62f7deb2aaba0.png"
      />
    </View>
  );
};

export default Icon30pxSet;
