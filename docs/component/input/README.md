---
title: Input 输入框
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E8%A1%A8%E5%8D%95-input-%E8%BE%93%E5%85%A5%E6%A1%86--story-1
---

# Input 输入框

### 安装
``` bash
npm install @plutojs/input
```

### 引用
``` js
import Input from '@plutojs/input';
```

### 使用
``` js
const [text, setText] = useState('');
<Input type="textarea" value={text} onChange={e => setText(e.target.value)} />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| type | 输入框类型 | String | - | text | 是 |
| value | 输入内容 | String | - | - | 是 |
| className | 样式名称 | String | - | - | 否 |
| placeholder | 占位文字 | String | - | - | 否 |
| onChange | 输入响应方法 | Function | - | - | 否 |
| onFocus | 聚焦响应方法 | Function | - | - | 否 |
| maxLength | 最大输入长度 | Number | - | - | 否 |
| offsetTop | 顶部预留空间 | Number | - | 100 | 否 |
| disabled | 是否禁止使用 | Boolean | - | false | 否 |

### 实例方法
| 名称 | 说明 | 参数 |
| :-- | :-- | :--: |
| clear | 清空输入框内容 | - |