import { defineCliConfig } from 'sanity/cli';
import dotenv from 'dotenv';

dotenv.config();

// 注意：此文件在 Node.js 環境中運行（執行 sanity CLI 命令時）
// 必須使用 process.env 讀取環境變數
// 不能使用 import.meta.env（Node.js 不支援）
export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
  },
  deployment: {
    appId: 'yjvlpl771hetolrmtpxhi0i3',
  },
});
