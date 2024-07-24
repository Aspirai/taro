
import { View, Text, Image, Button } from '@tarojs/components';
import './index.scss';


const Index = () => {


  return (
    <View className='index'>
      <View className='head'>
        <View className='headPortrait-icon'>
          {/* <Image style={{ width: "10vw", height: "10vw" }} src='../../assets/home/'/> */}
          <Image style={{ width: "12vw", height: "12vw" }} src={require('../../assets/home/user.svg')} />
        </View>
        <View className='text' style={{ fontSize: "20px",display:"flex",alignItems:"center" }}>
          登录
        </View>
      </View>
    </View>
  );
};

export default Index;
