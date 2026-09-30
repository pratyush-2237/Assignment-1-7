import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const assignmentPages = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7].map((n) => [
    `assignment_${n}`,
    resolve(import.meta.dirname, `src/assignment_${n}/index.html`),
  ])
)

export default defineConfig({
  base: '/Assignment-1-7/',

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...assignmentPages,
      },
    },
  },
})