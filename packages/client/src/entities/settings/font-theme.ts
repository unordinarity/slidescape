import { createEvent, createStore } from 'effector'

export type FontTheme = 'thin' | 'normal' | 'thick'
const store = createStore<FontTheme>('normal')
const set = createEvent<FontTheme>()
store.on(set, (_, theme) => theme)

export const fontTheme = {
  store,
  set,
}
