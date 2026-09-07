import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://worth.ee',
  experimental: {
    clientPrerender: true,
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
