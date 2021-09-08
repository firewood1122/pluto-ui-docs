---
title: LoadMore 加载更多
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%BB%9A%E5%8A%A8-loadmore-%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9A--story-1
---

# LoadMore 加载更多

### 安装
``` bash
npm install @plutojs/load-more
```

### 引用
``` js
import LoadMore from '@plutojs/load-more';
```

### 页面内加载更多
``` js
<LoadMore loadMore={() => { Toast.info('load more'); }}>
	<div className="load-more-demo-field"></div>
</LoadMore>
```

### 区块内加载更多
``` js
<LoadMore loadMore={() => { Toast.info('load more'); }} bodyScroll={false}>
  <div className="load-more-demo-container">
    <div className="load-more-demo-field"></div>
  </div>
</LoadMore>
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| bodyScroll | 是否页面body滚动 | Boolean | - | true | 否 |
| scrollThreshold | 滚动边界系数 | 小于或等于1的正小数 | - | 1 | 否 |
| loadMore | 响应方法 | Function | -| - | 否 |
| debounceTime | 防抖间隔时间 | number | - | 1000 | 否 |