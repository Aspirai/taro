// components/SaveImageButton.jsx
import Taro from '@tarojs/taro';
import { Button } from '@tarojs/components';
import React from 'react';

const requestWritePhotosAlbumPermission = async () => {
  try {
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

const SaveImageButton = ({ imagePath }) => {
  const handleSaveImage = () => {
    saveImageToAlbum(imagePath);
  };

  return (
    <Button onClick={handleSaveImage}>保存图片到相册</Button>
  );
};

export default SaveImageButton;
