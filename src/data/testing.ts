import { category } from '@data/category'
import { Stack } from 'types/stack'

export const TestingStacks: Stack[] = [
  {
    category: category.testing,
    url: 'https://playwright.dev',
    repo: 'microsoft/playwright',
    description: 'A framework for Web Testing and Automation.',
    name: 'Playwright',
    image: 'playwright.svg',
  },
  {
    category: category.testing,
    url: 'https://vitest.dev',
    repo: 'vitest-dev/vitest',
    description: 'A blazing fast unit-test framework powered by Vite.',
    name: 'Vitest',
    image: 'vitest.svg',
  },
  {
    category: category.testing,
    url: 'https://jestjs.io',
    repo: 'facebook/jest',
    description:
      'A delightful JavaScript Testing Framework with a focus on simplicity.',
    name: 'Jest',
    image: 'jest.png',
  },
  {
    category: category.testing,
    url: 'https://testing-library.com',
    repo: 'facebook/jest',
    description:
      'Simple and complete testing utilities that encourage good testing practices.',
    name: 'Testing Library',
    image: 'testing_library.png',
  },
]
