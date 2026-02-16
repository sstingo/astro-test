import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './schemas';

const projectId = '5h9e652k';

// 配置多個工作區，讓使用者可以在 Studio 介面中切換
export default defineConfig([
  {
    name: 'production',
    title: '正式環境',
    projectId,
    dataset: 'production',
    basePath: '/production',
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas },
  },
  {
    name: 'development',
    title: '開發環境',
    projectId,
    dataset: 'development',
    basePath: '/development',
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas },
  },
]);
