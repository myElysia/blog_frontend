import type {Params} from "~/models/base";
import type {Article} from "~/models/article";
import {Apis} from "~/models/apis";
import type {IResponse} from "~/composables/base";

export async function fetchArticles(params: Params): Promise<Article[]> {
    const {data, status, error} = await useFetch<IResponse<Article[]>>(Apis.Article, {
        method: 'GET',
        params: params,
    });
    if (status.value === 'error' || error.value) {
        throw error;
    }
    return data.value ? data.value.data : [];
}

export async function fetchArticle(md5: string): Promise<Article> {
    const {data, status, error} = await useFetch<IResponse<Article>>(`${Apis.Article}/${md5}/`, {
        method: 'GET',
    });
    if (status.value === 'error' || error.value) {
        throw error;
    }
    if (data.value) {
        return data.value.data;
    }
    throw new Error('Article not found');
}

export async function createArticle(body: Article): Promise<Article | null> {
    const {data, status, error} = await useFetch<IResponse<Article>>(Apis.Article, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    if (status.value !== 'success' || error.value) {
        throw error;
    }
    return data.value ? data.value.data : null;
}