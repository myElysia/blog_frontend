<template>
  <pre :class="$props.class"><slot /></pre>
</template>

<script setup lang="ts">
// code prepare from https://github.com/nuxt-modules/mdc/blob/main/src/runtime/components/prose/ProsePre.vue
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
});
</script>

<style>
pre code .line {
  display: block;
}
</style>