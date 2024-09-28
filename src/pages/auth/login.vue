<script setup lang="ts">
import { authState } from '~/store/auth';
import { useFetch } from '#app';

const auth = authState();

const clickLogin = async () => {
  auth.init();
  await useFetch("/api/v1/auth/github/login", {
    method: "GET",
    params: {
      state: auth.id
    }
  });
}
</script>
<script lang="ts">
export default {
  name: "BlogLogin",
}
</script>

<template>
<div class="auth">
  <button @click="clickLogin">登录</button>
</div>
</template>

<style scoped>

</style>