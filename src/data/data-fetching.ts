import { category } from '@data/category'
import { Stack } from 'types/stack'

export const DataFetchingStacks: Stack[] = [
  {
    category: category.datafetching,
    url: 'https://swr.vercel.app',
    repo: 'vercel/swr',
    description: 'React Hooks for Data Fetching',
    name: 'SWR',
    image: 'swr.svg',
  },
  {
    category: category.datafetching,
    url: 'https://react-query.tanstack.com',
    repo: 'tannerlinsley/react-quer',
    description: 'Performant and powerful data synchronization for React',
    name: 'React Query',
    image: 'react_query.svg',
  },
]
