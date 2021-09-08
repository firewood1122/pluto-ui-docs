---
title: Dialog 对话框
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%8F%90%E7%A4%BA-dialog-%E5%AF%B9%E8%AF%9D%E6%A1%86--story-1
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

### 实例方法
| 名称 | 说明 | 参数 |
| :-- | :-- | :--: |
| alert | 提示对话框 | (text: string, confirm: Function, confirmText = '确定') |
| confirm | 确认对话框 | (text: string, confirm: Function, cancelText: string = '取消', confirmText = '确定', cancel = () => { }) |