import { category } from '@data/category'
import { Stack } from 'types/stack'

export const DocumentationStacks: Stack[] = [
  {
    category: category.documentation,
    url: 'https://docusaurus.io',
    repo: 'facebook/docusaurus',
    description: 'Easy to maintain open source documentation websites.',
    name: 'Docusaurus',
    image: 'docusaurus.svg',
  },
  {
    category: category.documentation,
    url: 'https://docsify.js.org',
    repo: 'docsifyjs/docsify',
    description: 'A magical documentation site generator.',
    name: 'docsify',
    image: 'docsify.svg',
  },
  {
    category: category.documentation,
    url: 'https://markdoc.io',
    repo: 'markdoc/markdoc',
    description: 'a powerful, flexible, Markdown-based authoring framework',
    name: 'Markdoc',
    image: 'markdoc.svg',
  },
]
