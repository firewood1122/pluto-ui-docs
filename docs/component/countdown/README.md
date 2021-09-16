---
title: Countdown 倒计时
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E5%9F%BA%E7%A1%80-countdown-%E5%80%92%E8%AE%A1%E6%97%B6--story-1
---

# Countdown 倒计时

### 安装
``` bash
npm install @plutojs/countdown 
```

### 引用
``` js
import Countdown from '@plutojs/countdown';
```

### 使用
``` js
<Countdown leftSecond={20} done={() => { Toast.info('倒计时结束'); }} />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| leftSecond | 剩余时间(秒) | Number | - | - | 是 |
| callback | 倒计时回调方法 | (secod: number) => void | - | - | 否 |
| renderChildren | 内容构造方法 | (hour: number, min: number, second: number) => React.ReactNode | - | `${hour}小时${min}分${second}秒` | 否 |
| done | 结束回调方法 | Function | - | - | 否 |