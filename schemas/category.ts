import { defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: '分類',
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
      name: 'description',
      title: '描述',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});
