<script setup lang="ts">
import type { Article } from '~/models/article';

const { article, md5 } = defineProps({
  article: {
    type: Object as () => Article,
    required: true,
  },
  md5: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="article-card">
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
    <NuxtLink :to="`/article/${md5}`">{{ article.title }}</NuxtLink>
  </div>
</template>

<style scoped></style>
