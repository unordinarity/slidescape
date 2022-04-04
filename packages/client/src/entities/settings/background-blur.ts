import { createEvent, createStore } from 'effector'

export type BackgroundBlur = boolean
const store = createStore<BackgroundBlur>(false)
const set = createEvent<BackgroundBlur>()
store.on(set, (_, theme) => theme)

export const backgroundBlur = {
  store,
  set,
}
