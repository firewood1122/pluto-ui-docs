---
title: InputCode 验证码输入框
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-inputcode-%E9%AA%8C%E8%AF%81%E7%A0%81%E8%BE%93%E5%85%A5%E6%A1%86--story-1
---

# InputCode 验证码输入框

### 安装
``` bash
npm install @plutojs/input-code
```

### 引用
``` js
import InputCode from '@plutojs/input-code';
import '@plutojs/input-code/build/index.css';
```

### 使用
``` js
<InputCode count={4} />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| count | 验证码位数 | Number || 4 | 否 |
| onChange | 输入回调方法 | Function || 无 | 否 |

### 实例方法
| 名称 | 说明 | 参数 |
| :-- | :-- | :--: |
| clear | 清空&聚焦输入框 | 无 |