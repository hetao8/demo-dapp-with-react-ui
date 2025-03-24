import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // 确保输出目录设置正确
  },
  base: '/', // 在Vercel上部署使用根路径
})
