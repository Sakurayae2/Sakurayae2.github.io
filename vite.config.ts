import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // !!!这里填你的github仓库名称，前后斜杠不能丢
  base: '/my-vue-blog/'
})
