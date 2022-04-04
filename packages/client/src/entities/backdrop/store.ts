import { createStore, createEffect, combine, createEvent, sample } from 'effector'
import { Basic } from 'unsplash-js/src/methods/photos/types'
import { Random } from 'unsplash-js/dist/methods/photos/types'

import { unsplashApi } from 'src/shared/api/unsplash'

export type Backdrop = Basic

const pool = createStore<Array<Backdrop>>([])
const currentId = createStore<number | null>(null)

// increase currentId on next call
// but only if pool is big enough and

const pickNext = createEvent()

sample({
  clock: pickNext,
  source: [pool, currentId],
  filter: ([pool, id]) => (
    Array.isArray(pool) &&
    typeof id === 'number' &&
    id < pool.length - 1
  ),
  fn: ([pool, id]) => (
    Array.isArray(pool) &&
    typeof id === 'number'
      ? id + 1
      : null
  ),
  target: currentId,
})

currentId.on(
  pickNext,
  state => state === null ? null : state + 1,
)

// refresh pool if we are using last pool element

const refresh = createEffect(
  async () => {
    const apiResponse = await unsplashApi.photos.getRandom({
      featured: true,
      count: 30,
    })

    return apiResponse.response as Array<Random>
  },
)

pool.on(
  refresh.done,
  (state, payload) => payload.result,
)

currentId.on(
  refresh.done,
  (state, payload) => 0,
)

sample({
  source: [pool, currentId],
  filter: (src) => {
    const [pool, id] = src as [Array<Basic>, number | null]
    return id !== null && id >= pool.length
  },
  target: refresh,
})

//

const current = combine(
  pool, currentId,
  (pool, id) => (id === null ? null : (pool[id] ?? null)),
)

export const backdrop = {
  current,
  pickNext,
  refresh,
}
