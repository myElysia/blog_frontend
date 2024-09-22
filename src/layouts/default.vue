<script lang="ts">
export default {
  name: 'DefaultLayouts',
}
</script>
<template>
<div>
  <NuxtLoadingIndicator />
  <div class="header">

  </div>
  <slot />
  <div class="footer"> </div>
</div>
</template>

<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>