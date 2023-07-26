import { defineField, defineType } from 'sanity'

export const CategorySchema = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
  ],
})
