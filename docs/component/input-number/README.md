---
title: InputNumber 计数器
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-inputnumber-%E6%95%B0%E5%AD%97%E8%BE%93%E5%85%A5%E6%A1%86--story-1
---

# InputNumber 计数器

### 安装
``` bash
npm install @plutojs/input-number
```

### 引用
``` js
import InputNumber from '@plutojs/input-number';
import '@plutojs/input-number/build/index.css';
```

### 使用
``` js
<InputNumber min={1} max={5} keyboard={false} onChange={val => { console.log(val); }} />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| default | 默认值 | Number || 无 | 否 |
| min | 最小值 | Number || 1 | 否 |
| max | 最大值 | Number || 无 | 否 |
| keyboard | 可键盘输入 | Boolean || true | 否 |
| onChange | 值变化回调方法 | Function || 无 | 是 |