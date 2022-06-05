import { category } from '@data/category'
import { Stack } from 'types/stack'

export const UIComponentStacks: Stack[] = [
  {
    category: category.uicomponent,
    url: 'https://chakra-ui.com',
    repo: 'chakra-ui/chakra-ui',
    description:
      'A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    name: 'Chakra UI',
    image: 'chakra_ui.svg',
  },
  {
    category: category.uicomponent,
    url: 'https://mui.com',
    repo: 'mui',
    description: 'The React component library you always wanted.',
    name: 'MUI',
    image: 'mui.png',
  },
]
