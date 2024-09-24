<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps({
  error: Object as () => NuxtError,
});
</script>

<script lang="ts">
export default {
  name: 'ErrorPage',
};
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
