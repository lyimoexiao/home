import { mergeConfigs } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetTypography from '@unocss/preset-typography'
import presetWind4 from '@unocss/preset-wind4'
import { defineConfig } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  theme: {
    breakpoint: {
      sm: '528px',
      xs: '768px',
      xl: '1080px',
    },
    font: {
      sans: 'var(--home-font-sans)',
    },
  },

  presets: [
    presetIcons(),
    presetRemToPx(),
    presetTypography(),
    presetWind4({
      preflights: {
        reset: true,
        theme: true,
      },
    }),
  ],

}])
