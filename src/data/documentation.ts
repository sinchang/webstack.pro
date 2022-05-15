import { category } from '@data/category'
import { Stack } from 'types/stack'

export const DocumentationStacks: Stack[] = [
  {
    category: category.Documentation,
    url: 'https://docusaurus.io',
    repo: 'facebook/docusaurus',
    description: 'Easy to maintain open source documentation websites.',
    name: 'Docusaurus',
    image: 'docusaurus.svg',
  },
  {
    category: category.Documentation,
    url: 'https://www.docz.site',
    repo: 'doczjs/docz',
    description: "It's never been easier to document your things!",
    name: 'Docz',
    image: 'docz.svg',
  },
  {
    category: category.Documentation,
    url: 'https://docsify.js.org',
    repo: 'docsifyjs/docsify',
    description: 'A magical documentation site generator.',
    name: 'docsify',
    image: 'docsify.svg',
  },
  {
    category: category.Documentation,
    url: 'https://markdoc.io',
    repo: 'markdoc/markdoc',
    description: 'a powerful, flexible, Markdown-based authoring framework',
    name: 'Markdoc',
    image: 'markdoc.svg',
  },
]
