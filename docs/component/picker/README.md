---
title: Picker 选择器
exampleUrl: http://pluto.smallpig.cn/iframe.html?id=%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6-picker-%E9%80%89%E6%8B%A9%E5%99%A8--story-1
---

# Picker 选择器

### 安装
``` bash
npm install @plutojs/picker
```

### 引用
``` js
import Picker from '@plutojs/picker';
import '@plutojs/picker/build/index.css';
```

### 单列选择器
``` js
 const items = [
    {
      text: '天河区',
      value: 1,
    },
    {
      text: '海珠区',
      value: 2,
    },
    {
      text: '白云区',
      value: 3,
    },
  ];
  const [isOpened, setIsOpened] = useState(true);
  const [selected, setSelected] = useState([]);

<Picker
  isOpened={isOpened}
  onCancel={() => { setIsOpened(false); }}
  onConfirm={data => {
    setIsOpened(false);
    setSelected(data);
  }}
  selected={selected}
  items={items}
  />
```

### 多列选择器
``` js
 const items = [
    {
      text: '天河区',
      value: 1,
      children: [
        {
          text: '天河小学',
          value: 10,
        }
      ],
    },
    {
      text: '海珠区',
      value: 2,
      children: [
        {
          text: '海珠小学',
          value: 20,
        }
      ],
    },
    {
      text: '白云区',
      value: 3,
      children: [
        {
          text: '白云小学',
          value: 30,
        }
      ],
    },
  ];
  const [isOpened, setIsOpened] = useState(true);
  const [selected, setSelected] = useState([]);

<Picker
  isOpened={isOpened}
  onCancel={() => { setIsOpened(false); }}
  onConfirm={data => {
    setIsOpened(false);
    setSelected(data);
  }}
  selected={selected}
  group={2}
  items={items}
  />
```

### Props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| :-- | :-- | :-- | :-- | :-- | :--: |
| isOpened | 是否显示 | Boolean || 无 | 是 |
| onCancel | 取消回调方法 | Function || 无 | 是 |
| onConfirm | 确定回调方法 | Function || 无 | 是 |
| items | 可选择节点 | Array<{ text: string, value: any }> || [] | 是 |
| selected | 已选择节点 | Array<{ text: string, value: any }> || [] | 否 |
| group | 可选择列数 | Number || 1 | 否 |
| renderItem | 选择项渲染方法 | Function(item, index) || 无 | 否 |