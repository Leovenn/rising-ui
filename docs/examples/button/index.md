<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .el-button {
        margin:10px 5px
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Button 按钮

## 基础用法

使用 type 来定义按钮的样式

<div class="example">
  <r-button>defaul</r-button>
  <r-button type="primary">primary</r-button>
  <r-button type="success">success</r-button>
  <r-button type="warning">warning</r-button>
  <r-button type="error">error</r-button>
  <r-button type="info">info</r-button>
</div>

<style lang="less" scoped>
.example{
    button {
        margin-right:10px
    }
}
</style>

<details>
<summary>展开查看</summary>

```vue
<template>
  <r-button>defaul</r-button>
  <r-button type="primary">primary</r-button>
  <r-button type="success">success</r-button>
  <r-button type="warning">warning</r-button>
  <r-button type="error">error</r-button>
  <r-button type="info">info</r-button>
</template>
<script lang="ts" setup>
import { RButton } from 'rising-ui'
</script>
```

</details>

使用 size 来定义按钮的大小

<div class="example">
   <r-button type="primary" size="small">small</r-button>
   <r-button size="default">defaul</r-button>
   <r-button type="success" size="large">large</r-button>
</div>

<style lang="less" scoped>
.example{
    button {
        margin-right:10px
    }
}
</style>

<details>
<summary>展开查看</summary>

```vue
<template>
  <r-button type="primary" size="small">small</r-button>
  <r-button size="default">defaul</r-button>
  <r-button type="success" size="large">large</r-button>
</template>
<script lang="ts" setup>
import { RButton } from 'rising-ui'
</script>
```

</details>
