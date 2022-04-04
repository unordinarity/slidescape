import { createApi } from 'unsplash-js'

console.log(import.meta.env.UNSPLASH_API)

export const unsplashApi = createApi({
  apiUrl: import.meta.env.UNSPLASH_HOST,
  fetch: fetch,
})
