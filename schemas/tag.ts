import { defineType } from 'sanity';

export default defineType({
  name: 'tag',
  title: '標籤',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
