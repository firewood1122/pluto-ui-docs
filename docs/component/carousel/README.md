---
title: Carousel 走马灯
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E8%A7%86%E5%9B%BE%E7%BB%84%E4%BB%B6-carousel-%E8%BD%AE%E6%92%AD%E5%9B%BE--story-1
---

# Carousel 走马灯

### 安装
```bash
npm install @plutojs/carousel
```

### 引用
``` js
import Carousel from '@plutojs/carousel';
import '@plutojs/carousel/build/index.css';
```

### 使用
``` js
<Carousel>
  <img src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg" />
  <img src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/112811/33/9121/246982/5ed786a7E22ec29b5/dc259bda64040882.jpg" />
</Carousel>
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| selectedItem | 默认选中项 | Number | | 0 | 否 |
| showArrows | 显示前退/后退 | Boolean | | false | 否 |
| showStatus | 显示状态栏 | Boolean | | false | 否 |
| showThumbs | 显示缩略图 | Boolean | | false | 否 |
| showIndicators | 显示进度条 | Boolean | | true | 否 |
| transitionTime | 动画切换时间（毫秒） | Number | | 150 | 否 |
| onChange | 响应切换事件 | Function | | | 否 |