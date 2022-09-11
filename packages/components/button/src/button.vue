<template>
  <button :class="className">
    <slot />
  </button>
</template>
<script setup lang="ts">
// defineOptions({ name: 'RButton' })
import { computed } from 'vue'
const ButtonSize = ['small', 'large', ''] as const
const ButtonType = ['primary', 'success', 'warning', 'error', 'info', ''] as const
type Size = typeof ButtonSize[number]
type Type = typeof ButtonType[number]
interface PropsType {
  size?: Size
  type?: Type
}
const props = withDefaults(defineProps<PropsType>(), {
  size: '',
  type: '',
})
const className = computed(() => {
  const className = ['r-button']
  if (ButtonSize.includes(props.size)) className.push(`r-button--${props.size}`)
  if (ButtonType.includes(props.type)) className.push(`r-button--${props.type}`)
  return className
})
</script>
