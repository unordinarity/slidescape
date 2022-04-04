import { createEvent, createStore } from 'effector'

export type GlobalState = 'tools-view' | 'tools-edit' | 'feedback-modal' | 'info-modal' | 'settings-modal'

const store = createStore<GlobalState>('tools-view')

const set = createEvent<GlobalState>()
store.on(set, (_, payload) => payload)

export const globalState = {
  store,
  set,
}
