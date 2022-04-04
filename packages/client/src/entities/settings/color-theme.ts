import { combine, createEvent, createStore, sample, Store } from 'effector'
import { Daemon } from 'src/shared/lib/daemon'
import { backdrop } from 'src/entities/backdrop'
import tinycolor from 'tinycolor2'

import { color } from 'src/shared/ui'

// selected in options theme

type ThemeOption = 'light' | 'dark' | 'system' | 'backdrop'

const themeOptionStore = createStore<ThemeOption>('backdrop')

const themeOptionSet = createEvent<ThemeOption>()
themeOptionStore.on(themeOptionSet, (_, theme) => theme)

// system color theme

type SystemScheme = 'light' | 'dark' | 'unknown'

const systemSchemeStore = createStore<SystemScheme>('unknown')

const systemSchemeSet = createEvent<SystemScheme>()
systemSchemeStore.on(systemSchemeSet, (_, theme) => theme)

const systemSchemeDaemon: Daemon = (() => {
  const listener = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      systemSchemeSet('dark')
    else if (window.matchMedia('(prefers-color-scheme: light)').matches)
      systemSchemeSet('light')
    else
      systemSchemeSet('unknown')
  }

  const mqlList: Array<MediaQueryList> = [
    window.matchMedia('(prefers-color-scheme: dark)'),
    window.matchMedia('(prefers-color-scheme: light)'),
  ]

  return {
    watch: () => mqlList.forEach(mql => mql.addEventListener('change', listener)),
    sleep: () => mqlList.forEach(mql => mql.removeEventListener('change', listener)),
  }
})()

// background color theme

type BackdropColor = 'light' | 'dark' | 'unknown'

const backdropColorStore = createStore<BackdropColor>('unknown')

const backdropColorSet = createEvent<BackdropColor>()
backdropColorStore.on(backdropColorSet, (_, theme) => theme)

const backdropColorDaemon: Daemon = {
  watch: () => {
    sample({
      source: backdrop.current,
      fn: (backdropCurrent) => {
        if (!backdropCurrent || !backdropCurrent.color) return 'unknown'
        if (tinycolor(backdropCurrent?.color).isLight()) return 'light'
        else return 'dark'
      },
      target: backdropColorSet,
    })
  },
}

// real color theme

const themeList = ['light', 'dark'] as const
type Theme = (typeof themeList)[number]

const themeStore: Store<Theme> = combine(
  themeOptionStore, systemSchemeStore, backdropColorStore,
  (option, system, backdrop) => {
    if (option === 'light') return 'light'
    if (option === 'dark') return 'dark'
    if (option === 'system' && system === 'light') return 'light'
    if (option === 'system' && system === 'dark') return 'dark'
    if (option === 'backdrop' && backdrop === 'light') return 'dark'
    if (option === 'backdrop' && backdrop === 'dark') return 'light'
    return 'light'
  }
)

// theme applying

const themeToStitchesClass: Record<Theme, string> = {
  light: color.themes.light,
  dark: color.themes.dark,
}

const applyDaemon: Daemon = {
  watch: () => {
    themeStore.watch(state => {
      for (let theme of themeList) {
        const themeClass = themeToStitchesClass[theme]
        document.body.classList.remove(themeClass)
      }
      document.body.classList.add(themeToStitchesClass[state])
    })
  }
}

export type ColorThemeOption = ThemeOption
export type ColorTheme = Theme
export const colorTheme = {
  store: themeOptionStore,
  set: themeOptionSet,
  calculated: themeStore,
  daemons: [
    systemSchemeDaemon,
    backdropColorDaemon,
    applyDaemon,
  ],
}
