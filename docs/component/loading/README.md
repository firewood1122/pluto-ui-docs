---
title: Loading 加载中
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%8F%90%E7%A4%BA-loading-%E5%8A%A0%E8%BD%BD%E4%B8%AD--story-1
---

# Loading 加载中

### 安装
``` bash
npm install @plutojs/loading
```

### 引用
``` js
import Loading from '@plutojs/loading';
import '@plutojs/loading/build/index.css';
```

### 显示loading
``` js
Loading.show('提交中');
```

### 隐藏loading
``` js
Loading.hide();
```

### 实例方法
| 名称 | 说明 | 参数 |
| :-- | :-- | :--: |
| show | 显示loading | (msg: String) |
| hide | 隐藏loading | - |