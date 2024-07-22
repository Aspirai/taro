// import { ComponentType } from 'react'
import { View, Camera, Button } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { useState } from 'react'




const Index = () => {
  const [devicePosition, setDevicePosition] = useState<'front' | 'back'>('back')

  const handleTakePhoto = () => {
    Taro.createSelectorQuery()
      .select('#camera')
      .context((res) => {
        const cameraContext = res.context
        cameraContext.takePhoto({
          quality: 'high',
          success: (res) => {
            console.log('Photo taken:', res.tempImagePath)
            // 在这里处理拍摄的照片
          },
        })
      })
      .exec()
  }

  const handleSwitchCamera = () => {
    setDevicePosition(devicePosition === 'back' ? 'front' : 'back')
  }

  return (
    <View className="index">
      <Camera id="camera" devicePosition={devicePosition} />
      <View className="controls">
        <Button onClick={handleTakePhoto}>拍照</Button>
        <Button onClick={handleSwitchCamera}>切换摄像头</Button>
      </View>
    </View>
  )
}

export default Index