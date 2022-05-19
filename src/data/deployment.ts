import { category } from '@data/category'
import { Stack } from 'types/stack'

export const DeploymentStacks: Stack[] = [
  {
    category: category.Deployment,
    url: 'https://vercel.com',
    repo: 'vercel/vercel',
    description: 'Develop. Preview. Ship.',
    name: 'Vercel',
    image: 'vercel.png',
  },
  {
    category: category.Deployment,
    url: 'https://netlify.com',
    repo: 'netlify',
    description:
      'The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.',
    name: 'Netlify',
    image: 'netlify.jpeg',
  },
  {
    category: category.Deployment,
    url: 'https://pages.cloudflare.com',
    repo: '',
    description:
      'A JAMstack platform for frontend developers to collaborate and deploy websites.',
    name: 'Cloudflare Pages',
    image: 'cloudflare_pages.svg',
  },
]
