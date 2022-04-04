import 'modern-css-reset/src/reset.css'

import { Daemon } from 'src/shared/lib/daemon'

import { stitches } from './stitches'
import { color } from './tokens/color'
import { font } from './tokens/font'

const fullPageSpaGlobalStyles = stitches.globalCss({
  'html, body, #root': {
    height: '100%',
  },
})

export const globalStylesDaemon: Daemon = {
  watch: () => {
    fullPageSpaGlobalStyles()
    color.globalStyles()
    font.globalStyles()
  }
}
