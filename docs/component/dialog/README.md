---
title: Dialog 对话框
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%93%8D%E4%BD%9C%E5%8F%8D%E9%A6%88-dialog-%E5%AF%B9%E8%AF%9D%E6%A1%86--story-1
---

# Dialog 对话框

### 安装
``` bash
npm install @plutojs/dialog
```

### 引用
``` js
import Dialog from '@plutojs/dialog';
import '@plutojs/dialog/build/index.css';
```

### 提示对话框
``` js
Dialog.alert('这是一个Alert对话框，通常用于二次确认', () => {
  alert('点击了确定');
});
```

### 确认对话框
``` js
Dialog.confirm('这是一个Confirm对话框，通常用于二次确认', () => {
  alert('点击了确定');
});
```