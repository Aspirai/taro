// import { ComponentType } from 'react'
import { View, Camera, Button } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { useState } from 'react'




const Index = () => {
    const [devicePosition, setDevicePosition] = useState<'front' | 'back'>('back')
    const cameraContext = Taro.createCameraContext()

    const handleSwitchCamera = () => {
        setDevicePosition(devicePosition === 'back' ? 'front' : 'back')
    }

    //#region
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

    // 保存图片到相册 ----imagePath: 图片路径未传入时，会截取当前页面
    const saveImageToAlbum = async (imagePath) => {
        const permissionGranted = await requestWritePhotosAlbumPermission();
        if (!permissionGranted) {
            Taro.showModal({
                title: '提示',
                content: '请授权访问相册权限',
                showCancel: false,
            });
            return;
        }

        try {
            const res = await Taro.saveImageToPhotosAlbum({
                filePath: imagePath,
            });
            console.log('保存成功:', res);
            Taro.showToast({
                title: '图片保存成功',
                icon: 'success',
            });
        } catch (err) {
            console.log('保存失败:', err);
            Taro.showToast({
                title: '图片保存失败',
                icon: 'none',
            });
        }
    };
    

    const handleChooseMedia = () => {
        Taro.chooseMedia({
            count: 1, // 最多可以选择的文件个数
            mediaType: ['image'], // 选择媒体文件的类型
            sourceType: ['album','camera'], // 选择图片的来源
            sizeType: ['original'], // 选择图片的尺寸----original 原图，compressed 压缩图，默认二者都有
            // maxDuration: 30, // 拍摄视频最长拍摄时间，单位秒
            camera: 'back', // 后置或前置摄像头，值为front, back
            success: (res) => {
                // 处理返回的文件，如上传到服务器或展示在页面上
                console.log('临时文件路径列表:', res.tempFiles);

                // 循环输出临时文件路径中每一个文件的路径
                res.tempFiles.forEach((item) => {
                    // 提示当前文件索引和当前文件路径
                    console.log('当前文件索引:', res.tempFiles.indexOf(item) + 1, '当前文件路径:', item.tempFilePath);
                });
                console.log('媒体类型:', res.type);
                // 展示图片到页面上
                const test = document.getElementById('test');
                if (test) {
                    test.style.backgroundImage = `url(${res.tempFiles[0].tempFilePath})`;
                }
                // 保存图片到相册
                // saveImageToAlbum(res.tempFiles[0].tempFilePath);

            },
            fail: (err) => {
                console.log('选择媒体失败:', err);
            }
        });
    };

    //#endregion

    return (
        <View className="index">
            {/* <Camera
                mode='normal' // 拍照模式，有效值为normal, scanCode
                resolution='medium'  // 分辨率，有效值为low, medium, high, medium
                flash='auto' // 闪光灯，有效值为auto, on, off, 默认auto
                frameSize='medium' // 扫码框的大小，有效值为small, medium, large, 默认medium
                // outputDimension='1080p' // 输出分辨率，有效值为1080p, 720p, 480p, 默认720
                id="camera"
                devicePosition={devicePosition}
                style={{ height: "20vh" }} /> */}
            <View className="controls">
                <View className='photograph' onClick={handleChooseMedia} />
                <View className='test' id='test' style={{width:"300px",height:"300px"}}></View>
                {/* <View onClick={handleSwitchCamera}>切换摄像头</View> */}
            </View>
        </View>
    )

}

export default Index
