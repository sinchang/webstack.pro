import { category } from '@data/category'
import { Stack } from 'types/stack'

export const BundlerStacks: Stack[] = [
  {
    category: category.bundler,
    url: 'https://rollupjs.org',
    repo: 'rollup/rollup',
    description:
      'A module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.',
    name: 'Rollup',
    image: 'rollupjs.svg',
  },
  {
    category: category.bundler,
    url: 'https://esbuild.github.io',
    repo: 'evanw/esbuild',
    description: 'An extremely fast JavaScript bundler.',
    name: 'esbuild',
    image: 'esbuild.svg',
  },
  {
    category: category.bundler,
    url: 'https://tsup.egoist.sh',
    repo: 'egoist/tsup',
    description:
      'Bundle your TypeScript library with no config, powered by esbuild.',
    name: 'tsup',
    image: 'js.png',
  },
  {
    category: category.bundler,
    url: 'https://vitejs.dev',
    repo: 'vitejs/vite',
    description: 'Next Generation Frontend Tooling.',
    name: 'Vite',
    image: 'vite.svg',
  },
  {
    category: category.bundler,
    url: 'https://parceljs.org',
    repo: 'parcel-bundler/parcel',
    description: 'A build tool for the rest of us.',
    name: 'Parcel',
    image: 'parcel.png',
  },
]
