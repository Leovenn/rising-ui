<template>
  <div class="example">
    <!-- 123 -->
    <div class="component">
      <slot></slot>
    </div>

    <div class="source">
      <div v-html="sourceHtml"></div>
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
.example {
  border: 1px solid #ccc;
  .example_source {
    background-color: #ccc;
  }
}
</style>
