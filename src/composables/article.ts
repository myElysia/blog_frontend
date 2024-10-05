import type { Params } from '~/models/base';
import type { Article } from '~/models/article';
import { Apis } from '~/models/apis';
import type { IResponse } from '~/composables/base';

export async function fetchArticles(params: Params): Promise<Article[]> {
  const { data, error } = await useFetch<IResponse<Article[]>>(Apis.Article, {
    method: 'GET',
    params: params,
  });
  if (error.value) {
    throw error;
  }
  return data.value ? data.value.data : [];
}

export async function fetchArticle(md5: string): Promise<Article> {
  const { data, error } = await useFetch<IResponse<Article>>(
    `${Apis.Article}/${md5}/`,
    { method: 'GET' }
  );
  if (error.value) {
    throw error;
  }
  if (data.value) {
    return data.value.data;
  }
  throw new Error('Article not found');
}

export async function createArticle(body: Article): Promise<Article | null> {
  const { data, error } = await useFetch<IResponse<Article>>(Apis.Article, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
  if (error.value) {
    throw error;
  }
  return data.value ? data.value.data : null;
}

export async function getParsedArticles(
  parseBody: Array<object>,
  language: string = 'txt'
): Promise<Array<object> | null> {
  for (const item of parseBody) {
    if (item.tag === 'pre') {
      await getParsedArticles(item.children, item.language);
    } else if (item.tag === 'code') {
      item.props = { ...item.props, language };
    }
  }
}
