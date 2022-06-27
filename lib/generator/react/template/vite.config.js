import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import importDynamicModule from 'vite-plugin-dynamic-import-module'
import eslintPlugin from 'vite-plugin-eslint'
<% if (projectType === 'PC') {%>
import styleImport, { AntdResolve } from 'vite-plugin-style-import'
<%}%>
const path = require('path')


export default defineConfig({
  <% if (projectType === 'PC') {%>
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  <%}%>
  plugins: [
    react(),
    <% if (projectType === 'PC') {%>
    styleImport({ resolves: [AntdResolve()] }),
    <%}%>
    importDynamicModule(), 
    eslintPlugin({
    include: ['src/**/*.js', 'src/**/*.jsx', 'src/*.js', 'src/*.jsx'],
    cache: false
  })],
  resolve: {
    alias: {
      'pages': path.resolve(__dirname, './src/pages'),
      'store': path.resolve(__dirname, './src/store/modules'),
      'router': path.resolve(__dirname, './src/router'),
      'utils': path.resolve(__dirname, './src/utils')
    }
  },
  server: {
    host: true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://www.xxxxxx.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
