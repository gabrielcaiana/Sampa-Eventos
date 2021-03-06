export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sampa Eventos',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'O maior portal de eventos de São Paulo',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/base.scss', '@/assets/scss/main.scss'],

  layoutTransition: "slide",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  // https://go.nuxtjs.dev/axios
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', 'cookie-universal-nuxt'],

  styleResources: {
    scss: ['@/components/bosons/colors.scss']
   },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3333'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
