import { View, Span, Image } from '@tarojs/components';

import NavigationBarNoBackground from './NavigationBarNoBackground';
import DoctorSLabel from './DoctorSLabel';
import ListPersonalCenter from './ListPersonalCenter';
import StatusBarIcon from './StatusBarIcon';
import './index.scss';

const App = () => {
  return (
    <View className="user_mine">
      <View className="user_seal_group">
        <View className="user_seal_group_1">
          <View className="user_flexcontainer">
            <NavigationBarNoBackground className="user_the_navigation_bar_word_has_no_background" />
            <Span className="user_text_12">切换团队</Span>
          </View>
          <View className="user_rectangle_6">
            <Image
              className="user_avatar"
              src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804757091/efc9/e337/dec8/d70285ab4a5460d3077c6ad41052ae90.png"
            />
            <View className="user_flexcontainer_1">
              <Span className="user_text_13">阳兰广</Span>
              <DoctorSLabel className="user_doctor_s_label_1" />
            </View>
            <Image
              className="user_icon_40px_left_arrow_1"
              src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804757304/5fb9/f220/e200/89fcc7729f8332a59abea1ad65fbef98.png"
            />
          </View>
        </View>
        <View className="user_seal_group_2">
          <View className="user_2">
            <View className="user_team">
              <View className="user_edit_group_2">
                <Image
                  className="user_icon_40px_voice"
                  src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804754788/c055/1c80/a057/094acfe69578767def3d96cef9bf2e7b.png"
                />
                <View className="user_seal_group_3">
                  <Span className="user_text_15">所属团队</Span>
                  <Span className="user_text_16">阳兰广专科团队</Span>
                </View>
              </View>
              <View className="user_line_1"></View>
            </View>
            <View className="user_affiliated_organization">
              <View className="user_edit_group_2_1">
                <Image
                  className="user_icon_40px_voice_1"
                  src="https://seal-Image.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/44804758250/c686/c213/13c3/d3a51da34c89b91666f2d31361b4dc31.png"
                />
                <View className="user_seal_group_4">
                  <Span className="user_text_17">所属机构</Span>
                  <Span className="user_text_18">桂雅卫生服务站</Span>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="user_main">
        <ListPersonalCenter className="user_forms_personal_center" />
        <ListPersonalCenter className="user_forms_personal_central_backup" />
        <ListPersonalCenter className="user_forms_personal_center_backup_2" />
        <ListPersonalCenter className="user_forms_personal_center_backup_3" />
        <ListPersonalCenter className="user_forms_personal_center_backup_4" />
      </View>
      <StatusBarIcon className="user_status_bar_icon_1" />
    </View>
  );
};

export default App;
