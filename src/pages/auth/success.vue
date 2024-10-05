<script setup lang="ts">
import { Auth } from '~/composables/user';
import { onMounted } from 'vue';

onMounted(() => {
  const auth = Auth('github');
  auth.useAuth('Token');
});
</script>
<script lang="ts">
export default {
  name: 'AuthSuccess',
};
</script>
<template>
  <div />
</template>

<style scoped></style>
