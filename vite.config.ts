import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8211,
    open: false,
    proxy: {
      '/api': {
        target: 'https://xxxxxx.test.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/mini': {
        target: 'https://xxxxxx.test.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mini/, ''),
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    tailwindcss(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
