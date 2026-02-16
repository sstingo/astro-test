// @ts-check
import { defineConfig, envField } from 'astro/config';
import dotenv from 'dotenv';
import sanity from '@sanity/astro';

// 手動加載環境變數
dotenv.config();

// 注意：此文件在 Node.js 環境中運行（Astro 構建時）
// 必須使用 process.env 讀取環境變數
// 不能使用 import.meta.env（構建配置文件在 Node.js 中執行）
// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: true,
      apiVersion: process.env.PUBLIC_SANITY_API_VERSION,
    }),
  ],
  output: 'static',
});
