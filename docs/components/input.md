---
title: Input 输入框
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<input-demos></input-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-input value="输入框"></f-input>
<f-input value="禁用" disabled></f-input>
<f-input value="只读" readonly></f-input>
<f-input error="输入内容必须符合规则"></f-input>
```

```vue
<script>
  import FInput from "fallen-ui";

  export default {
    components: {
      "f-input": FInput,
    },
  };
</script>
```

:::
<br/>

<h2 style="font-weight:normal">双向绑定</h2>

<ClientOnly>

<input-model-demos></input-model-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-input v-model="message"></f-input>
```

```vue
<script>
  import FInput from "fallen-ui";

  export default {
    components: {
      "f-input": FInput,
    },
    data() {
      return {
        message: "下面会跟着这里变吗？",
      };
    },
  };
</script>
```

:::

### Attributes

|   参数   |            说明            |  类型   |     可选值     | 默认值 |
| :------: | :------------------------: | :-----: | :------------: | :----: |
|  value   |       输入框内的文本       | String  |       无       |   无   |
| disabled |       是否为禁用状态       | Boolean | **true/false** | false  |
| readonly |       是否为只读状态       | Boolean | **true/false** | false  |
|  error   | 输入内容不合格时的提示文本 | String  |       无       |   无   |
