import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    formatters: true,
    unocss: true,
    vue: true,
  },

  withNuxt,
)
