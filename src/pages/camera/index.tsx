// import { ComponentType } from 'react'
import { View, Camera, Button } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { useState } from 'react'




const Index = () => {
    const [devicePosition, setDevicePosition] = useState<'front' | 'back'>('back')
    const cameraContext = Taro.createCameraContext()

    const handleTakePhoto = () => {

    }

    const handleSwitchCamera = () => {
        setDevicePosition(devicePosition === 'back' ? 'front' : 'back')
    }

    // 请求授权
    const requestWritePhotosAlbumPermission = async () => {
        try {
            // 解释：Taro.authorize() 是 Taro 的 API，用于请求用户授权。
            // scope: 'scope.writePhotosAlbum' 是请求授权的目标，表示请求用户授权访问用户的相册。
            const res = await Taro.authorize({
                scope: 'scope.writePhotosAlbum',
            });
            console.log('授权成功:', res);
            return true;
        } catch (err) {
            console.log('授权失败:', err);
            return false;
        }
    };


    return (
        <View className="index">
            {/* <Camera 
      mode='normal' // 拍照模式，有效值为normal, scanCode
      resolution='medium'  // 分辨率，有效值为low, medium, high, medium
      flash='auto' // 闪光灯，有效值为auto, on, off, 默认auto
      frameSize='medium' // 扫码框的大小，有效值为small, medium, large, 默认medium
      outputDimension='1080p' // 输出分辨率，有效值为1080p, 720p, 480p, 默认720
      id="camera" 
      devicePosition={devicePosition}
      style={{height:"100vh"}} /> */}
            <View className="controls">
                <View className='photograph' onClick={requestWritePhotosAlbumPermission} />
                <View onClick={handleSwitchCamera}>切换摄像头</View>
            </View>
        </View>
    )
}

export default Index
