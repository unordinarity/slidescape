import { createEvent, createStore } from 'effector'

export type BackgroundDarken = boolean
const store = createStore<BackgroundDarken>(false)
const set = createEvent<BackgroundDarken>()
store.on(set, (_, theme) => theme)

export const backgroundDarken = {
  store,
  set,
}
