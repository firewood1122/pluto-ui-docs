---
title: Toast 文字提示
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%8F%90%E7%A4%BA-toast-%E6%96%87%E5%AD%97%E6%8F%90%E7%A4%BA--story-1
---

# Toast 文字提示

### 安装
``` bash
npm install @plutojs/toast
```

### 引用
``` js
import Toast from '@plutojs/toast';
import '@plutojs/toast/build/index.css';
```

### 正常提示
``` js
Toast.info('你点击了按钮');
```

### 异常提示
``` js
Toast.error(new Error('发生了错误'));
```

### 实例方法
| 名称 | 说明 | 参数 |
| :-- | :-- | :--: |
| info | 正常提示 | (msg: String) |
| error | 异常提示 | (err: Error) |