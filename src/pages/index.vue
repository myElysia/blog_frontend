<script setup lang="ts">
import { useArticleStore } from "~/store/article";
import { onBeforeMount } from 'vue';
import { callOnce } from "#app";
import ArticleCard from "~/components/ArticleCard.vue";

const articleStore = useArticleStore();

onBeforeMount(() => {
  callOnce(articleStore.fetchArticles);
});
</script>

<script lang="ts">
export default {
  name: "BlogIndex",
}
</script>

<template>
  <div class="container">
    <ArticleCard v-for="(article, md5, index) in articleStore.article_cache" :key="index" :article="article" :md5="md5"/>
  </div>
</template>

<style scoped>

</style>