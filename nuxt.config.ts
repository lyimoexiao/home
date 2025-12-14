// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '依如初梦 (@LyiMoeXiao)',
      htmlAttrs: {
        'lang': 'zh-CN',
        'data-theme': 'dark',
        'class': 'dark',
      },
      link: [
        // "LXGW WenKai Screen"
        { rel: 'stylesheet', href: 'https://s4.zstatic.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css', media: 'print', onload: 'this.media="all"' },
        // "MiSans"
        { rel: 'stylesheet', href: 'https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,450,500,600,650,700,900:Chinese_Simplify,Latin&display=swap', media: 'print', onload: 'this.media="all"' },
        // "InterVariable", "Inter", "InterDisplay"
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css', media: 'print', onload: 'this.media="all"' },
        // "JetBrains Mono", 思源黑体 "Noto Sans SC", 思源宋体 "Noto Serif SC"
        { rel: 'preconnect', href: 'https://fonts.gstatic.cn', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.cn/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+SC:wght@100..900&family=Noto+Serif+SC:wght@200..900&display=swap', media: 'print', onload: 'this.media="all"' },

      ],
    },

    rootAttrs: {
      'data-theme': 'dark',
      'class': 'dark home',
      'id': 'app-root',
    },
  },

  css: [
    '~/assets/styles/main.scss',
  ],

  components: [
    '~/components',
  ],

  modules: ['@nuxt/eslint', '@unocss/nuxt', '@element-plus/nuxt', '@nuxt/image'],

  elementPlus: {
    installMethods: ['ElLoading', 'ElMessage', 'ElMessageBox', 'ElNotification'],
    themes: ['dark'],
    // defaultLocale: 'zh-CN',
    themeChalk: {},
  },

  unocss: {
    nuxtLayers: true,
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

})
