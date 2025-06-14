<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}>()

const positionClass = computed(() => {
  switch (props.position) {
    case 'top-left':
      return 'top-6 left-6'
    case 'top-right':
      return 'top-6 right-6'
    case 'bottom-left':
      return 'bottom-6 left-6'
    case 'bottom-right':
    default:
      return 'bottom-6 right-6'
  }
})
</script>

<template>
  <div :class="['absolute z-50', positionClass]">
    <button class="btn btn-circle text-white bg-purple-600 hover:bg-purple-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
      <slot />
    </button>
  </div>
</template>
