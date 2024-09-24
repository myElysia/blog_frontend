import { defineStore } from 'pinia';
import type { Article } from '~/models/article';
import {
  createArticle,
  fetchArticle,
  fetchArticles,
} from '~/composables/article';

const INIT_Article: Article = {
  title: '',
  content: '',
  background: '',
  description: '',
};

const INIT_Articles: { [key: string]: Article } = {};

export const useArticleStore = defineStore('article', {
  state: () => ({
    article: INIT_Article,
    editing: false,
    loading: false,
    article_cache: INIT_Articles,
  }),
  actions: {
    async fetchArticles() {
      this.loading = true;
      const data = await fetchArticles({});
      data.forEach((article: Article) => {
        if (article.md5) {
          this.article_cache[article.md5] = article;
        }
      });
      this.loading = false;
    },
    async fetchArticle(md5: string) {
      this.loading = true;
      if (this.article_cache[md5]) {
        this.article = this.article_cache[md5];
      }
      const data = await fetchArticle(md5);
      this.article_cache[md5] = data;
      this.article = data;
      this.loading = false;
    },
    async createArticle(article: Article) {
      const data = await createArticle(article);
      if (data) {
        this.article_cache[<string>data.md5] = data;
      }
    },
  },
});
