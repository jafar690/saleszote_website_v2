// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://saleszote.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap({ filter: (page) => !page.includes('/design-system') })],
  vite: {
    plugins: [tailwindcss()],
    // Dev deploys (CLOUDFLARE_ENV=dev) are marked noindex so web-dev.saleszote.com stays out of search results.
    define: {
      'import.meta.env.PUBLIC_NOINDEX': JSON.stringify(process.env.CLOUDFLARE_ENV === 'dev'),
    },
  }
});