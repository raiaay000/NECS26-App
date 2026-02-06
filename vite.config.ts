import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/NECS26-App/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      {
        find: /^figma:asset\//,
        replacement: `${path.resolve(__dirname, './src/assets')}/`,
      },
    ],
  },

  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})
