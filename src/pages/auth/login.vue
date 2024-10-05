<script setup lang="ts">
import { Auth } from '~/composables/user';

const clickLogin = async () => {
  const auth = Auth('github');
  await auth.useAuth();
};
</script>
<script lang="ts">
export default {
  name: 'BlogLogin',
};
</script>

<template>
  <div class="auth">
    <button @click="clickLogin">登录</button>
  </div>
</template>

<style scoped></style>
