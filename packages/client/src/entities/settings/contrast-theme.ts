import { createEvent, createStore } from 'effector'

export type ContrastTheme = 'low' | 'high'
const store = createStore<ContrastTheme>('low')
const set = createEvent<ContrastTheme>()
store.on(set, (_, theme) => theme)

export const contrastTheme = {
  store,
  set,
}
