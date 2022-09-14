<template>
  <div class="example">
    123
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  source: string
  rawSource: string
}>()
</script>

<style scoped lang="less"></style>
