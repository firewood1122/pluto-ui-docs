---
title: Header 页头
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E5%AF%BC%E8%88%AA-header-%E9%A1%B5%E5%A4%B4--story-1 
---

# Header 页头

### 安装
``` bash
npm install @plutojs/header
```

### 引用
``` js
import Header from '@plutojs/header';
import '@plutojs/header/build/index.css';
```

### 使用
``` js
<Header title="头部导航标题" />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| title | 标题 | String | - | - | 否 |
| hide | 是否隐藏 | Boolean | - | false | 否 |
| zIndex | 组件层级 | Number | - | 999 | 否 |