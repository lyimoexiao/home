import presetIcons from '@unocss/preset-icons'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetTypography from '@unocss/preset-typography'
import presetWind4 from '@unocss/preset-wind4'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetRemToPx(),
    presetTypography(),
    presetWind4(),
  ],
})
