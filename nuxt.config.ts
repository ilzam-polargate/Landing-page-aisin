export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/global.css'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'
        }
      ]
    }
  },
  plugins: [
    '~/plugins/bootstrap.client.js'
  ],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'id',
        iso: 'id-ID',
        file: 'id.json',
        name: 'Indonesia'
      },
      {
        code: 'jp',
        iso: 'jp-JP',
        file: 'jp.json',
        name: '日本語'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    }
  }
})