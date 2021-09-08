---
title: Modal 模态框
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%8F%90%E7%A4%BA-modal-%E6%A8%A1%E6%80%81%E6%A1%86--story-1 
---

# Modal 模态框

### 安装
``` bash
npm install @plutojs/modal
```

### 引用
``` js
import Modal from '@plutojs/modal';
import '@plutojs/modal/build/index.css';
```

### 模态框
``` js
const [isOpened, setIsOpened] = useState(false);
<Modal
  isOpened={isOpened}
  position="center"
  isLock={false}
  onHide={() => { setIsOpened(false); }}
  isMask={true}>
  <div className="modal-demo-text">模态框内容</div>
</Modal>
```

### 通过方法调用
```js
const { destroy } = Modal.popup({
  children: <div className="modal-demo-text">模态框内容</div>,
  isOpened: true,
  position: "center",
  isMask: true,
  isLock: true,
  onHide: () => { destroy(); },
});
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| isOpened | 是否显示模态框 | Boolean | - | - | 是 |
| position | 模态框内容定位 | top/center/bottom | - | center | 否 |
| isMask | 背景是否透明 | Boolean | - | true | 否 |
| isLock | 锁定页面滚动 | Boolean | - | true | 否 |
| closeOnClickOverlay | 点击背景关闭模态框 | Boolean | - | true | 否 |
| zIndex | 组件层级 | Number | - | 999 | 否 |
| target | 模态框内可滚动区域的ref | RefObject\<HTMLElement\> | - | - | 否 |
| onHide | 关闭模态框方法 | Function | - | - | 是 |