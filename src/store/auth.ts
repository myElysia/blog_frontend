import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

export enum AuthStatus {
  Running = 'Running',
  Redirecting = 'Redirecting',
  Authenticated = 'Authenticated',
  Failed = 'Failed',
}

export const authState = defineStore('authStore', {
  state: () => ({
    id: '',
    status: '',
  }),
  actions: {
    init() {
      if (this.id === ''){ this.id = uuid(); }
    },
  },
});