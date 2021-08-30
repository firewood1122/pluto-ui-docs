---
title: Video 播放视频
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E8%A7%86%E5%9B%BE%E7%BB%84%E4%BB%B6-video-%E8%A7%86%E9%A2%91%E7%BB%84%E4%BB%B6--story-1
---

# Video 播放视频

### 安装
``` bash
npm install @plutojs/video
```

### 引用
``` js
import Video from '@plutojs/video';
import '@plutojs/video/build/index.css';
```

### 使用
``` js
<Video
  coverUrl="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg"
  videoUrl="https://media.w3.org/2010/05/sintel/trailer.mp4" />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| coverUrl | 封面图片链接 | String || 无 | 是 |
| videoUrl | 视频链接 | String || 无 | 是 |
| controls | 是否有控制条 | Boolean || true | 否 |
| playsInline | 播放时局域播放 | Boolean || true | 否 |
| onClose | 视频关闭回调方法 | Function || 无 | 否 |