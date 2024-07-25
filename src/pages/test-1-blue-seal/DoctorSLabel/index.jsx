import React from 'react';

import './index.less';

const DoctorSLabel = (props) => {
  const { style, className = '' } = props;
  return (
    <View
      style={style}
      className={`user_doctor_s_label ${className}`}>
      <View className="user_edit_group">
        <View className="user_rectangle_5"></View>
        <Image
          className="user_polygon"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804756221/636f/6f85/25a3/5fc1a23fd01b42da1007e8d82966ad66.png"
        />
        <Image
          className="user_polygon_backup"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804756353/6234/bd08/40c0/3d3bf4544802ba954a2d5aff0dc9fb7f.png"
        />
        <Image
          className="user_polygon_backup_2"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804758072/82c6/d908/d048/ef78b5579b4c71839f46a766552f64d3.png"
        />
        <Image
          className="user_shape_12"
          src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804757192/6d69/0f0f/5632/c723d67a5761fa07d8b266c335b3f121.png"
        />
      </View>
      <Span className="user_text_5">护理医师</Span>
    </View>
  );
};

export default DoctorSLabel;
