// @ts-check
import { defineConfig, envField } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';

// 手動加載環境變數
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL,
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: true,
      apiVersion: env.PUBLIC_SANITY_API_VERSION,
    }),
  ],
  output: 'static',
});
