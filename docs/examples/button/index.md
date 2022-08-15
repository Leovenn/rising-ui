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

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
   <s-button />
</div>

<details>
<summary>展开查看</summary>

```vue
<template><SageButton /></template>
<script lang="ts" setup>
import { SageButton } from '@sage-ui/components'
</script>
```

</details>
