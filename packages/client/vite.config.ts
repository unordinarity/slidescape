import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { packageDirectorySync } from 'pkg-dir'

const packageRoot = packageDirectorySync()

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['UNSPLASH_'],
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(packageRoot, './src'),
    },
  },
})