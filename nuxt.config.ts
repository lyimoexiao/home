// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '依如初梦',
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@element-plus/nuxt',
  ],
  elementPlus: {
    installMethods: ['ElLoading', 'ElMessage', 'ElMessageBox', 'ElNotification'],
  },
})
