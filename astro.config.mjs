import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
import { cjsInterop } from 'vite-plugin-cjs-interop';

import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vkemonight.pages.dev',

  vite: {
    plugins: [
      tailwindcss(),
      cjsInterop({
        // List of CJS dependencies that require interop
        dependencies: ['react-use'],
      }),
    ],

    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['framer-motion'],
          },
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
  },

  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'sendGAEvent'],
        debug: false,
      },
    }),
    sitemap(),
  ],
});
