import { category } from '@data/category'
import { Stack } from 'types/stack'

export const HeadlessComponentStacks: Stack[] = [
  {
    category: category.HeadlessComponent,
    url: 'https://radix-ui.com/docs/primitives',
    repo: 'radix-ui/primitives',
    description:
      'An open-source UI component library for building high-quality, accessible design systems and web apps.',
    name: 'Radix Primitives',
    image: 'radix.svg',
  },
  {
    category: category.HeadlessComponent,
    url: 'https://headlessui.dev',
    repo: 'tailwindlabs/headlessui',
    description:
      'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
    name: 'Headless UI',
    image: 'headlessui.jpeg',
  },
  {
    category: category.HeadlessComponent,
    url: 'https://headlessui.dev',
    repo: 'adobe/react-spectrum',
    description:
      'A library of React Hooks that provides accessible UI primitives for your design system.',
    name: 'React Aria',
    image: 'adobe.png',
  },
]
