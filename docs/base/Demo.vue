<template>
  <div class="example_box">
    <div class="component">
      <slot></slot>
    </div>
    <div class="operation">
      <div class="copy" @click="copy">
        <svg viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415ZM11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2h5Zm0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Z"
          />
        </svg>
      </div>

      <div class="fold" @click="toggle">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.17 12L15 8.83l1.41-1.42L21 12l-4.59 4.58L15 15.17L18.17 12M5.83 12L9 15.17l-1.41 1.42L3 12l4.59-4.58L9 8.83L5.83 12Z" />
        </svg>
      </div>
    </div>
    <div class="example_source" v-html="sourceHtml" v-show="state.showPanel"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { createPopper } from '@popperjs/core'
const state = reactive({ showPanel: false })
const toggle = () => (state.showPanel = !state.showPanel)
const props = defineProps<{
  source: string
  rawSource: string
}>()

const copy = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(decodeURIComponent(props.rawSource))
  }
}

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
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    cursor: pointer;
    > div {
      color: rgb(170, 167, 167);
      font-size: 16px;
      margin-left: 10px;
      transition: all 0.3s;
      > svg {
        width: 1.5em;
        height: 1.5em;
      }
      &:hover {
        color: #356ad2;
      }
    }
  }
  .example_source {
    padding: 10px;
    border-top: 1px solid #ccc;
    // background-color: rgba(#d3d8e2, 0.1);
    color: #a6accd;
    background-color: var(--vp-code-block-bg);
    overflow: hidden;
    overflow-x: auto;
  }
}
</style>
