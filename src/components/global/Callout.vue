<template>
<div><slot /></div>
</template>
<script setup lang="ts">
const { icon, message, to } = defineProps({
  icon: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
    default: 'primary',
  },
  to: {
    type: String,
    required: false,
  }
});
console.log(icon, message, to);
</script>
<script lang="ts">
export default {
  name: 'ArticleCallout',
}
</script>
<style scoped>

</style>