import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/300.css'

import { createTheme } from '@stitches/react'

import { stacks } from '../utils/font-stacks'

import { stitches } from '../stitches'

const globalStyles = stitches.globalCss({
  body: {
    fontFamily: ['$paragraph', stacks.sansSerif].join(', '),
  },
})

const light = createTheme({
  fonts: {
    paragraph: 'IBM Plex Sans',
  },
  fontWeights: {
    paragraph: '300',
  },
})

const normal = createTheme({
  fonts: {
    paragraph: 'IBM Plex Sans',
  },
  fontWeights: {
    paragraph: '400',
  },
})

const bold = createTheme({
  fonts: {
    paragraph: 'IBM Plex Sans',
  },
  fontWeights: {
    paragraph: '500',
  },
})

export const font = {
  globalStyles,
  themes: {
    light,
    normal,
    bold,
  },
}
