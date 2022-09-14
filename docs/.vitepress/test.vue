<template>
  <div class="example_box">
    <!-- 123 -->
    <div class="component">
      <slot></slot>
    </div>

    <div class="operation">
      <!-- <div v-html="sourceHtml"></div> -->
      <button>复制代码</button>
      <button>查看源代码</button>

      <svg width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19.53 8L14 2.47a.75.75 0 0 0-.53-.22H11A2.75 2.75 0 0 0 8.25 5v1.25H7A2.75 2.75 0 0 0 4.25 9v10A2.75 2.75 0 0 0 7 21.75h7A2.75 2.75 0 0 0 16.75 19v-1.25H17A2.75 2.75 0 0 0 19.75 15V8.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94Zm1 14.19A1.25 1.25 0 0 1 14 20.25H7A1.25 1.25 0 0 1 5.75 19V9A1.25 1.25 0 0 1 7 7.75h1.25V15A2.75 2.75 0 0 0 11 17.75h4.25ZM17 16.25h-6A1.25 1.25 0 0 1 9.75 15V5A1.25 1.25 0 0 1 11 3.75h1.75V8.5a.76.76 0 0 0 .75.75h4.75V15A1.25 1.25 0 0 1 17 16.25Z"
        />
      </svg>
    </div>
  </div>

  <!-- <div v-html="decodeURIComponent(props.source)"></div> -->
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  source: string
  rawSource: string
}>()

const sourceHtml = computed(() => decodeURIComponent(props.source))
</script>

<style scoped lang="less">
.example_box {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  // padding: 10px;
  margin: 10px 0;
  .component {
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  .operation {
  }
}
</style>
