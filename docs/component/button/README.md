---
title: Button 按钮
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6-button-%E6%8C%89%E9%92%AE--story-1
---

# Button 按钮

### 安装
``` bash
npm install @plutojs/button
```

### 引用
``` js
import Button from '@plutojs/button';
import '@plutojs/button/build/index.css';
```

### 正常按钮
``` js
<Button className="test-btn" onClick={() => { alert('点击按钮'); }}>点击按钮</Button>
```

### 禁用按钮
``` js
<Button disabled={true} className="test-btn" onClick={() => { alert('点击按钮'); }}>不可点击</Button>
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| type | 类型 | String | button/submit/rest | button | 否 |
| className | 自定义样式名 | String | | | 否 |
| disabled | 是否禁用 | Boolean | true/false | false | 否 |
| onClick | 点击事件 | Function | | | 是 |