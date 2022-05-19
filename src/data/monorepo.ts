import { category } from '@data/category'
import { Stack } from 'types/stack'

export const MonorepoStacks: Stack[] = [
  {
    category: category.Monorepo,
    url: 'https://turborepo.org',
    repo: 'vercel/turborepo',
    description:
      'A high-performance build system for JavaScript and TypeScript codebases.',
    name: 'Turborepo',
    image: 'turborepo.png',
  },
  {
    category: category.Monorepo,
    url: 'https://github.com/changesets/changesets',
    repo: 'changesets/changesets',
    description:
      'A tool to manage versioning and changelogs with a focus on multi-package repositories',
    name: 'Changeset',
    image: 'changesets.svg',
  },
]
