---
title: Dialog 对话框
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%8F%90%E7%A4%BA-dialog-%E5%AF%B9%E8%AF%9D%E6%A1%86--story-1
---

# Dialog 对话框

### 安装

```bash
npm install @plutojs/dialog
```

### 引用

```js
import Dialog from "@plutojs/dialog";
import "@plutojs/dialog/build/index.css";
```

### 提示对话框

```js
Dialog.alert("这是一个Alert对话框，通常用于二次确认", () => {
  alert("点击了确定");
});
```

### 确认对话框

```js
Dialog.confirm("这是一个Confirm对话框，通常用于二次确认", () => {
  alert("点击了确定");
});
```

### 实例方法

| 名称           | 说明         | 参数                                                                |
| :------------- | :----------- | :------------------------------------------------------------------ |
| alert          | 提示对话框   | (options: AlertOptions)                                             |
| alertCustomize | 可定制对话框 | (customize: () => React.ReactNode, options?: AlertCustomizeOptions) |
| confirm        | 确认对话框   | (options: ConfirmOptions)                                           |
| destroy        | 销毁对话框   | -                                                                   |

### AlertOptions

| 参数                | 说明               | 类型       | 可选值 | 默认值 | 必填 |
| :------------------ | :----------------- | :--------- | :----- | :----- | :--- |
| text                | 提示内容           | String     | -      | -      | 是   |
| customizeClass      | 定制样式名称       | String     | -      | -      | 否   |
| confirmText         | 确定按钮文案       | String     | -      | -      | 否   |
| confirm             | 确定安钮响应方法   | () => void | -      | -      | 是   |
| closeOnClickOverlay | 点击背景关闭模态框 | Boolean    | -      | true   | 否   |

### AlertCustomizeOptions

| 参数                | 说明               | 类型    | 可选值 | 默认值 | 必填 |
| :------------------ | :----------------- | :------ | :----- | :----- | :--- |
| isMask              | 背景是否透明       | Boolean | -      | true   | 否   |
| closeOnClickOverlay | 点击背景关闭模态框 | Boolean | -      | true   | 否   |

### ConfirmOptions

| 参数                | 说明               | 类型       | 可选值 | 默认值 | 必填 |
| :------------------ | :----------------- | :--------- | :----- | :----- | :--- |
| text                | 提示内容           | String     | -      | -      | 是   |
| customizeClass      | 定制样式名称       | String     | -      | -      | 否   |
| confirmText         | 确定按钮文案       | String     | -      | -      | 否   |
| cancelText          | 取消按钮文案       | String     | -      | -      | 否   |
| confirm             | 确定按钮响应方法   | () => void | -      | -      | 是   |
| cancel              | 取消按钮响应方法   | () => void | -      | -      | 否   |
| closeOnClickOverlay | 点击背景关闭模态框 | Boolean    | -      | true   | 否   |
