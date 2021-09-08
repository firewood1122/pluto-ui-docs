---
title: Swipe 滑块
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E6%BB%9A%E5%8A%A8-swipe-%E6%BB%91%E5%9D%97--story-1
---

# Swipe 滑块

### 安装
``` bash
npm install @plutojs/swipe
```

### 引用
``` js
import Swipe from '@plutojs/swipe';
import '@plutojs/swipe/build/index.css';
```

### 使用
``` js
const [show, setShow] = useState(false);
<Swipe show={show} setShow={setShow}>
	<div className="swipe-demo-field" />
	{show && <div className="swipe-extend-demo-field" />}
</Swipe>
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| show | 是否展开状态 | Boolean | - | - | 是 |
| setShow | 设置展开状态 | (bol: boolean) => void | - | - | 是 |
| className | 定制class名称 | String | - | - | 否 |
| disabled | 是否关闭拖拽 | Boolean | - | false | 否 |
| zIndex | 浮层层级 | Number | - | 999 | 否 |
| openDistance | 展开滑动距离阀值 | Number | - | 150 | 否 |
| closeDistance | 关闭滑动距离阀值 | Number | - | 20 | 否 |