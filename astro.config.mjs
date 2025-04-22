import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
import { cjsInterop } from 'vite-plugin-cjs-interop';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      cjsInterop({
        // List of CJS dependencies that require interop
        dependencies: ['react-use'],
      }),
    ],
  },

  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
