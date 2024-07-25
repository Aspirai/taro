import React from 'react';
import Icon40pxTabIcon01 from '../Icon40pxTabIcon01';
import './index.less';

const StatusBarIcon011 = (props) => {
  const { style, className = '', homePageText } = props;
  return (
    <View
      style={style}
      className={`user_status_bar_icon01_1_1 ${className}`}>
      <Icon40pxTabIcon01 className="user_tab_icon01_4" />
      <Span className="user_text_24">{homePageText}</Span>
    </View>
  );
};

export default StatusBarIcon011;
