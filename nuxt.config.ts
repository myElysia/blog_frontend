// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@formkit/auto-animate',
    '@nuxtjs/i18n',
    'pinia-plugin-persistedstate',
    '@nuxtjs/mdc',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@nuxt/fonts',
    'dayjs-nuxt',
    '@ant-design-vue/nuxt',
  ],
  srcDir: 'src/',
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://blogapi.shinestar.fun/api',
        changeOrigin: true,
        prependPath: true,
      },
    },
    routeRules: {
      '/api/**': {
        cors: true,
        preset: 'vercel',
        proxy: 'https://blogapi.shinestar.fun/api/**',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
      },
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  mdc: {
    components: {
      map: {
        pre: 'PreMD',
        code: 'CodeMD',
      },
    },
  },
});

