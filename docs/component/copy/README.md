---
title: Copy 复制
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E5%9F%BA%E7%A1%80-copy-%E5%A4%8D%E5%88%B6--story-1
---

# Copy 复制

### 安装
``` bash
npm install plutojs/copy
```

### 引用
``` js
import Copy from '@plutojs/copy';
```

### 判断是否支持复制
``` js
Copy.isSupported();
```

### 复制操作
``` js
Copy.copy(ele: HTMLElement);
```

### 实例方法
| 名称 | 说明 | 参数 |
| :-- | :-- | :--: |
| isSupported | 是否支持复制 | - |
| copy | 复制节点文本内容 | (ele: HTMLElement) |