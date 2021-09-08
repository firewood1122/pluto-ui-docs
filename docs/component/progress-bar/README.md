---
title: ProgressBar 进度条
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E5%9F%BA%E7%A1%80-progressbar-%E8%BF%9B%E5%BA%A6%E6%9D%A1--story-1
---

# ProgressBar 进度条

### 安装
``` bash
npm install @plutojs/progress-bar
```

### 引用
``` js
import ProgressBar from '@plutojs/progress-bar';
import '@plutojs/progress-bar/build/index.css';
```

### 使用
``` js
<ProgressBar percent={percent}>
  <div className="progress-bar-demo-info">15:00</div>
</ProgressBar>
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| startColor | 进度条起点颜色 | String | - | #6DC9FF | 否 |
| endColor | 进度条终点颜色 | String | - | #3B99FF | 否 |
| contentColor | 底部圆环颜色 | String | - | #EAEFF3 | 否 |
| barLineWidth | 进度条宽度（物理像素） | Number | - | 20 | 否 |
| contentLineWidth | 底部圆环宽度（物理像素） | Number | - | 32 | 否 |
| percent | 进度条百分比 | Number | - | 100 | 否 |