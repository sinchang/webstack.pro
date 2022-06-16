import { category } from '@data/category'
import { Stack } from 'types/stack'

export const DateStacks: Stack[] = [
  {
    category: category.date,
    url: 'https://date-fns.org',
    repo: 'date-fns/date-fns',
    description:
      'Provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.',
    name: 'date-fns',
    image: 'date_fns.png',
  },
  {
    category: category.date,
    url: 'https://day.js.org',
    repo: 'iamkun/dayjs',
    description: 'Fast 2kB alternative to Moment.js with the same modern API.',
    name: 'Day.js',
    image: 'dayjs.png',
  },
]
