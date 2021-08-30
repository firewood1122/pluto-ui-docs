---
title: Toast 文字提示
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88-toast-%E8%BD%BB%E6%8F%90%E7%A4%BA--story-1
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

### 错误提示
``` js
Toast.error(new Error('发生了错误'));
```