import { defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainImage',
      title: '主圖',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: '替代文字',
          type: 'string',
        },
      ],
    },
    {
      name: 'category',
      title: '分類',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'tags',
      title: '標籤',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: '內容',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: '替代文字',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO 設定',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta 標題',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta 描述',
          type: 'text',
          rows: 3,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
  },
  orderings: [
    {
      title: '發布日期（新到舊）',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
