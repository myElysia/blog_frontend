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
    '@nuxtjs/google-fonts',
    '@nuxtjs/mdc'
  ],
  srcDir: 'src/',
  ssr: false,
  app: {
    head: {
      titleTemplate: '筑梦小站~ | %s',
      charset: 'utf-8',
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/api',
        changeOrigin: true,
        prependPath: true
      }
    },
    routeRules: {
      "/api/**": {
        cors: true,
        proxy: 'https://blogbackend.shinestar.com/api/*',
      }
    }
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional',
    preload: true
  }
})