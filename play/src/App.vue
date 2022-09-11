<template>
  <div class="box">
    <r-button>test</r-button>
    <r-button type="primary" size="small">test</r-button>
    <r-button type="success" size="large">test</r-button>
    <r-button type="error" size="large">test</r-button>
    <r-button type="warning" size="large">test</r-button>
    <r-button type="info" size="large">test</r-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.box {
  padding: 20px;
  button {
    margin-left: 10px;
  }
}
</style>
