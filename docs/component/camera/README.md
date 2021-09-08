---
title: Camera 调用摄像头
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E5%AE%9E%E9%AA%8C%E5%AE%A4-camera-%E8%B0%83%E7%94%A8%E6%91%84%E5%83%8F%E5%A4%B4--story-1
---

# Camera 调用摄像头

### 安装
``` bash
npm install @plutojs/camera
```

### 引用
``` js
import Camera from '@plutojs/camera';
import '@plutojs/camera/build/index.css';
```

### 使用
``` js
const onChange = (files) => {
  ...
};
<Camera text="点击录制" onChange={onChange} />
<Camera text="点击拍照" type="image" onChange={onChange} />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| text | 显示文案 | string | - | 开始录制 | 否 |
| type | 文件类型 | video/image | - | video | 否 |
| onChange | 回调方法 | Function | - | - | 否 |