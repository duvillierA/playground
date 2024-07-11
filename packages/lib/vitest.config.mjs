/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['src/*.test.ts'],
    coverage: {
      include: ['src/*'],
      exclude: ['**/*.d.ts'],
      reporter: ['html']
    },
    environmentMatchGlobs: [['**/*.test.ts']],
    setupFiles: ['./vitest-setup.ts'],
    env: loadEnv('', process.cwd(), '')
  }
})
