import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
import { cjsInterop } from 'vite-plugin-cjs-interop';

import react from '@astrojs/react';

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

  integrations: [react()],
});
