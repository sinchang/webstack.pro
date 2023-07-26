import { defineField, defineType } from 'sanity'

export const StackSchema = defineType({
  name: 'stack',
  type: 'document',
  title: 'Stack',
  fields: [
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Category',
    }),
    defineField({
      name: 'repo',
      type: 'string',
      title: 'Repo',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Tags',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
  ],
})
