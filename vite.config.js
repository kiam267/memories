import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['redux', 'react-redux', 'redux-thunk'],
  },
  server: {
    proxy: {
      '/posts': {
        target: 'http://localhost:5000/posts',
      },
    },
  },
});
