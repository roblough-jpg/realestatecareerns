import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://realestatecareerns.ca',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
