# 快速开始

本节将介绍如何在项目中使用 RisingUI。

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

> main.ts

```ts
import { createApp } from 'vue'
import App from './App.vue'
import 'rising-ui/theme-chalk/index.css'
import risingUi from 'rising-ui'

createApp(App).use(risingUi).mount('#app')
```

### 按需导入

在组件中手动导入

> main.ts

```ts
import { createApp } from 'vue'
import App from './App.vue'
import 'rising-ui/theme-chalk/index.css'

createApp(App)mount('#app')
```

:::warning

您需要在 main.ts 导入样式

:::

> App.vue

```vue
<template>
  <r-button>I am ElButton</r-button>
</template>

<script lang="ts" setup>
import { RButton } from 'rising-ui'
</script>

<style lang="less" scoped></style>
```

## 开始使用

到现在、您可以启动您的项目。对于每个组件的用法，请参考单个组件对应文档。
