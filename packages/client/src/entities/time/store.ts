import { createEvent, createStore } from 'effector'

import { Daemon } from 'src/shared/lib/daemon'

export type Time = Date

const store = createStore<Time>(new Date())
const set = createEvent<Time>()
store.on(set, (_, time) => time)

const daemon: Daemon = {
  watch: () => {
    setInterval(() => {
      set(new Date())
    }, 1000)
  }
}

export const time = {
  store,
  set,
  daemon,
}
