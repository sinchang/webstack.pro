import { type SchemaTypeDefinition } from 'sanity'

import { CategorySchema } from './schemas/category'
import { StackSchema } from './schemas/stack'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CategorySchema, StackSchema],
}
