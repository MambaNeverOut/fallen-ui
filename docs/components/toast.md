---
title: Toast 全局提示
---

# Toast 全局提示

全局展示操作反馈信息。

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<toast-demos></toast-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-button @click="$toast('点击弹出提示')">上方弹出</f-button>
<f-button @click="$toast('点击弹出提示', {position:'middle'})"
  >中间弹出</f-button
>
<f-button @click="$toast('点击弹出提示', { autoClose: 3, position:'bottom'})"
  >下方弹出</f-button
>
```

```vue
<script>
  import { FButton,Toast, ToastPlugin } from "fallen-ui";
  import Vue from "vue";
  Vue.use(ToastPlugin);

  export default {
    components: {
      "f-button": FButton,
      "f-toast": FToast,
    },
  };
</script>
```

:::
:::warning 提示：
使用 Toast 组件使不要忘记添加 **`Vue.use(ToastPlugin);`**
:::
<br/>

<h2 style="font-weight:normal">设置关闭按钮</h2>

<ClientOnly>

<toast-close-demos></toast-close-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-button @click="onClickButton">上方弹出</f-button>
```

```vue
<script>
  import { FButton,Toast, ToastPlugin } from "fallen-ui";
  import Vue from "vue";
  Vue.use(ToastPlugin);

  export default {
    components: {
      "f-button": FButton,
      "f-toast": FToast,
    },
    methods: {
      onClickButton() {
        this.$toast("我在这里提示你", {
          position: "middle",
          closeButton: {
            text: "我知道了",
            callback: () => {
              console.log("他关闭了提示");
            },
          },
        });
      },
    },
  };
</script>
```

:::
<br/>

<h2 style="font-weight:normal">设置HTML</h2>

<ClientOnly>

<toast-html-demos></toast-html-demos>

</ClientOnly>

:::warning
将 enableHtml 属性设置为 true 后可能会有风险，请谨慎使用
:::

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-button @click="onClickButton">上方弹出</f-button>
```

```vue
<script>
  import { FButton,Toast, ToastPlugin } from "fallen-ui";
  import Vue from "vue";
  Vue.use(ToastPlugin);

  export default {
    components: {
      "f-button": FButton,
      "f-toast": FToast,
    },
    methods: {
      onClickButton() {
        this.$toast('<strong style="color:green;">原谅色加粗提示</strong>', {
          enableHtml: true
        });
      }
    }
  };
</script>
```
:::

### Attributes

|    参数     |                  说明                  |      类型      |                           可选值                           |                   默认值                   |
| :---------: | :------------------------------------: | :------------: | :--------------------------------------------------------: | :----------------------------------------: |
|  autoClose  |      是否自动关闭或设置指定的时间      | Boolean/Number | **true/false**， 也可以使用 **数字** 设置关闭时间（默认单位为秒) |                     5                      |
| closeButton | 可设置关闭按钮文本及后续要进行的操作 |     Object     |                                无                            | **`{text: "关闭", callback: undefined,}`** |
|  position   |              提示弹出位置              |     String     |                   **'top'/'middle'/'bottom'**                    |                   'top'                     |
| enableHtml  |           是否支持 HTML 标签           |    Boolean     |                       **true/false**                       |                   false                    |
