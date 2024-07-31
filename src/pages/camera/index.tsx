// import { ComponentType } from 'react'
import { View, Input, Text, Button, Image, Swiper, SwiperItem, Block } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import React, { useState } from 'react'




const Index = () => {
    const [imagePath, setImagePath] = useState('');
    const [imagePaths, setImagePaths] = useState<string[]>([]);

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

    // 选择媒体文件来源
    const handleChooseMedia = () => {
        Taro.chooseMedia({
            count: 5, // 最多可以选择20文件个数---4~5
            mediaType: ['image'], // 选择媒体文件的类型
            sourceType: ['album', 'camera'], // 选择图片的来源
            sizeType: ['original'], // 选择图片的尺寸----original 原图，compressed 压缩图，默认二者都有
            // maxDuration: 30, // 拍摄视频最长拍摄时间，单位秒
            camera: 'back', // 后置或前置摄像头，值为front, back
            success: (res) => {
                // 处理返回的文件，如上传到服务器或展示在页面上
                console.log('临时文件路径列表:', res.tempFiles);

                // 上传文件到开发者服务器
                //#region 
                // const url ="https://623f9398.r26.cpolar.top/upload/"  // 开发者服务器的 url
                const url = "http://127.0.0.1:4523/m1/4874230-4530188-default/upload/"

                Taro.uploadFile({
                    url: url, // 开发者服务器的 url
                    filePath: res.tempFiles[0].tempFilePath, // 要上传文件资源的路径
                    name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
                    formData: { // HTTP 请求中其他额外的 form data
                        'user': 'test'
                    },
                    success: (res) => {
                        console.log('上传成功:', res);
                    },
                    fail: (err) => {
                        console.log('上传失败:', err);
                    }
                });
                //#endregion

                // 设置图片路径 map() 方法创建一个新数组, 其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
                // file => file.tempFilePath 表示将每一个文件对象的 tempFilePath 属性提取出来，组成一个新的数组
                const newImagePaths = res.tempFiles.map(file => file.tempFilePath);
                setImagePaths(newImagePaths);

                // 循环输出临时文件路径中每一个文件的路径
                res.tempFiles.forEach((item) => {
                    // 提示当前文件索引和当前文件路径
                    console.log('当前文件索引:', res.tempFiles.indexOf(item) + 1, '当前文件路径:', item.tempFilePath);
                });
                console.log('媒体类型:', res.type);

                // 展示图片到页面上
                const thumbnail = document.getElementById('thumbnail');
                if (thumbnail) {
                    thumbnail.style.backgroundImage = `url(${res.tempFiles[0].tempFilePath})`;
                    // 存储临时路径
                    setImagePath(res.tempFiles[0].tempFilePath);
                }

                // 保存图片到相册
                // saveImageToAlbum(res.tempFiles[0].tempFilePath);
            },
            fail: (err) => {
                console.log('选择媒体失败:', err);
            }
        });
    };

    // 预览图片
    const previewImage = async (index) => {
        if (!imagePaths.length) {
            Taro.showToast({
                title: '请先选择图片',
                icon: 'none',
            });
            return;
        }
        try {
            const res = await Taro.previewImage({
                urls: [imagePaths[index]],
            });
            console.log('预览成功:', res);
        } catch (err) {
            console.log('预览失败:', err);
            console.log(imagePath);
        }
    };

    // 删除图片
    const deleteImage = (index) => {
        // 删除指定索引的图片
        const newImagePaths = imagePaths.filter((_, i) => i !== index); //filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
        setImagePaths(newImagePaths);
    }

    return (
        <View className='form-container'>
            <View className='form-item'>
                <Text className='label'>白</Text>
                <View className='input-group'>
                    <Input className='input' type='text' />
                    <Text className='unit'>^g/L</Text>
                </View>
            </View>
            <View className='form-item'>
                <Text className='label'>粒</Text>
                <View className='input-group'>
                    <Input className='input' type='text' />
                    <Text className='unit'>^g/L</Text>
                </View>
            </View>
            <View className='form-item'>
                <Text className='label'>红</Text>
                <View className='input-group'>
                    <Input className='input' type='text' />
                    <Text className='unit'>^g/L</Text>
                </View>
            </View>
            <View className='form-item'>
                <Text className='label'>板</Text>
                <View className='input-group'>
                    <Input className='input' type='text' />
                    <Text className='unit'>^g/L</Text>
                </View>
            </View>
            <View className='add-more'>
                <Text className='add-more-text'>+ 我要添加更多录入项</Text>
            </View>
            <View className='bottom-bar'>
                <View className='thumbnail'>
                    {imagePaths.length > 0 && <View className='tip'>点击图片预览</View>}
                    {imagePaths.map((path, index) => (
                        <View className='1'>
                            <Image className='image' src={path} mode='aspectFit' key={index} onClick={() => previewImage(index)}/>
                            <Image className='close-button' src={require('../../assets/camera/close.png')} onClick={() => deleteImage(index)} />
                        </View>
                    ))}
                </View>
                <Button className='add-button' onClick={handleChooseMedia}>智能添加</Button>
            </View>
        </View>
    )
}

export default Index
