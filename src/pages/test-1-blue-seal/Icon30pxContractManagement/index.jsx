import React from 'react';

import './index.less';

const Icon30pxContractManagement = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_icon_30px_contract_management ${className}`}>
      <Image
        className="user_shape_2"
        src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804849172/1320/069b/f1a0/04cc64540f13958f92f9c4328f720614.png"
      />
    </View>
  );
};

export default Icon30pxContractManagement;
