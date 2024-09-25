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
    'dayjs-nuxt'
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
        target: 'http://127.0.0.1:8080/api',
        changeOrigin: true,
        prependPath: true,
      },
    },
    routeRules: {
      '/api/**': {
        cors: true,
        proxy: 'https://blogbackend.shinestar.com/api/*',
      },
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  mdc: {
    components: {
      map: {
        pre: 'PreMD',
        code: 'CodeMD'
      }
    }
  }
});