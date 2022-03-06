export default {
  mode: 'universal',
  /**
   * Enviroment Variables
   */
  env: {},
  publicRuntimeConfig: {
    assetUrl: 'https://assets.guebbit.com/rogheneach/',
    baseUrl: 'https://rogheneach.com/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        type: 'image/x-icon',
        href: '/favicon/site.webmanifest',
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: "#465587"
      },
    ],
    script: [
      {hid: 'fontawesome5', src: 'https://use.fontawesome.com/releases/v5.8.2/js/all.js', defer: true}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/paypal.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/gtm', {
      id: 'GTM-WFXTM7G'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    ['nuxt-i18n', {
      locales: ['en', 'it'],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./locales/en.json'),
          it: require('./locales/it.json'),
        }
      }
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      /*
      // https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js#L382-L411
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1000, // 1kB
            name: 'img/[name].[contenthash:7].[ext]'
          }
        }]
      });
      config.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1000, // 1kB
            name: 'fonts/[name].[contenthash:7].[ext]'
          }
        }]
      });
      config.module.rules.push({
        test: /\.(webm|mp4|ogv)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
            name: 'videos/[name].[contenthash:7].[ext]'
          }
        }]
      });
      */
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    }
  },
}
