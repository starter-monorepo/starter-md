import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  plugins: [
    vue({
      // For Vue Markdown Plugin
      include: [/\.vue$/, /\.md$/],
    }),
    Unocss({ /* options */ }),

    Pages({
      extensions: ['vue', 'md'],
    }),
    
    Markdown()
  ]
})
