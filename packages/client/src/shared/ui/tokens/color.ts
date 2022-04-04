import { createTheme } from '@stitches/react'

import { stitches } from '../stitches'

interface Palette {
  background: string
  surfaceDormant: string
  surfaceActive: string
  uiDormant: string
  uiActive: string
  separator: string
  border: string
  textSecondary: string
  textPrimary: string
}

const palettes = {
  dark: {
    background: 'rgba(25, 25, 25, 1)',
    surfaceDormant: 'rgba(255, 255, 255, 0.17)',
    surfaceActive: 'rgba(255, 255, 255, 0.10)',
    uiDormant: 'rgba(0, 0, 0, 0.10)',
    uiActive: 'rgba(0, 0, 0, 0.17)',
    separator: 'rgba(0, 0, 0, 0.10)',
    border: 'rgba(0, 0, 0, 0.17)',
    textSecondary: 'rgba(0, 0, 0, 0.62)',
    textPrimary: 'rgba(0, 0, 0, 0.84)',
  } as Palette,
  light: {
    background: 'rgba(230, 230, 230, 1)',
    surfaceDormant: 'rgba(0, 0, 0, 0.17)',
    surfaceActive: 'rgba(0, 0, 0, 0.10)',
    uiDormant: 'rgba(255, 255, 255, 0.10)',
    uiActive: 'rgba(255, 255, 255, 0.17)',
    separator: 'rgba(255, 255, 255, 0.10)',
    border: 'rgba(255, 255, 255, 0.17)',
    textSecondary: 'rgba(255, 255, 255, 0.62)',
    textPrimary: 'rgba(255, 255, 255, 0.84)',
  } as Palette
} as const

const themes = {
  dark: createTheme({
    colors: {
      ...palettes.dark,
    }
  }),
  light: createTheme({
    colors: {
      ...palettes.light,
    }
  })
} as const

const globalStyles = stitches.globalCss({
  body: {
    color: '$textSecondary',
  },
})

export const color = {
  globalStyles,
  themes,
}
