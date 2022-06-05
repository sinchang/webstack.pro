import { category } from '@data/category'
import { Stack } from 'types/stack'

export const CodeGeneratorStacks: Stack[] = [
  {
    category: category.CodeGenerator,
    url: 'http://www.hygen.io',
    repo: 'jondot/hygen',
    description: 'The scalable code generator that saves you time.',
    name: 'Hygen',
    image: 'hygen.png',
  },
  {
    category: category.CodeGenerator,
    url: 'https://plopjs.com',
    repo: 'plopjs/plop',
    description:
      'A little tool that saves you time and helps your team build new files with consistency.',
    name: 'Plop',
    image: 'plop.png',
  },
]
