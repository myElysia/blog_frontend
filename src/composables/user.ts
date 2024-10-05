import { Apis } from '~/models/apis';
import type { IResponse } from '~/composables/base';
import { authState } from '~/store/auth';

const store = authState();

export async function getUserInfo() {
  const { data, error } = await useFetch<IResponse<object>>(Apis.User, {
    method: 'GET',
  });
  if (error.value) {
    throw error;
  }
  return data.value;
}

export class Auth {
  authMethod: string;

  constructor(authMethod: string) {
    this.authMethod = authMethod;
  }

  useAuth(extra?: string, ...args: any[]) {
    const method = `${this.authMethod}${extra}`;
    if (method !== '' && typeof this[method] === 'function') {
      return Reflect.apply(this[method], this, args);
    }
    throw new Error(`Method [${method}] is not exists.`);
  }

  async github() {
    store.init();
    await useFetch(`${Apis.GitAuth}login/`, {
      method: 'GET',
      params: { id: store.id },
    });
  }

  async githubToken() {
    const { data, error } = await useFetch<IResponse<object>>(
      `${Apis.GitAuth}token/`,
      {
        method: 'GET',
        params: { id: store.id },
      }
    );
    if (error.value) {
      throw error;
    }
    const { access_token, error } = data.value;
    if (error) {
      throw new Error(error);
    }
    store.token = access_token;
  }
}
