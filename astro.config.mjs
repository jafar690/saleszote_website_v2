// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { writeFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

const isDevDeploy = process.env.CLOUDFLARE_ENV === 'dev';

// Dev deploys also send `X-Robots-Tag: noindex` on every file (images, videos, robots.txt...), which the
// <meta name="robots"> tag can't cover. Written into the static assets as Cloudflare's _headers file.
const noindexDevAssets = {
  name: 'noindex-dev-assets',
  hooks: {
    'astro:build:done': ({ dir }) => {
      if (isDevDeploy) writeFileSync(new URL('_headers', dir), '/*\n  X-Robots-Tag: noindex, nofollow\n');
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://saleszote.com',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap({ filter: (page) => !page.includes('/design-system') }), noindexDevAssets],
  vite: {
    plugins: [tailwindcss()],
    // Dev deploys (CLOUDFLARE_ENV=dev) are marked noindex so web-dev.saleszote.com stays out of search results.
    define: {
      'import.meta.env.PUBLIC_NOINDEX': JSON.stringify(isDevDeploy),
    },
  }
});