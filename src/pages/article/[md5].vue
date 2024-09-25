<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from '#app';
import { fetchArticle, getParsedArticles } from '~/composables/article';
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

const markdown = ref();

const getArticle = async (md5: string) => {
  const articleInfo = await fetchArticle(md5);
  // 渲染 markdown 并加入title 和 description
  const parseMDC = await parseMarkdown(articleInfo.content);
  parseMDC.data = { ...parseMDC.data, title: articleInfo.title, description: articleInfo.description };
  // 透传 language 给 code
  await getParsedArticles(parseMDC.body.children);
  markdown.value = parseMDC;
}

onBeforeMount(() => {
  const route = useRoute();
  if (route.params.md5) {
    getArticle(route.params.md5);
  }
});
</script>
<script lang="ts">
export default {
  name: 'ArticleDetail',
};
</script>
<template>
  <MDCRenderer v-if="markdown?.data" :data="markdown.data" :body="markdown.body"></MDCRenderer>
</template>

<style scoped></style>
