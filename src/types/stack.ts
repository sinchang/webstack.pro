import type { CategoryValue } from '@data/category'

export interface Stack {
  category: CategoryValue
  repo: string
  description: string
  name: string
  tags?: string[]
  url: string
  image: string
  twitter?: string
}
