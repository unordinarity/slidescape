/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly UNSPLASH_HOST: string
  readonly OPENWEATHER_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
