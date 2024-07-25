import React from 'react';

import './index.less';

const Icon30pxServiceManagement = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_30px_service_management ${className}`}>
      <Image
        className="user_shape_3"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804851043/94f3/db19/c931/0d7550a4f521db9e927da1d2c44fe07e.png"
      />
    </View>
  );
};

export default Icon30pxServiceManagement;
