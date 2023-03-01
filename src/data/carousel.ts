import { category } from '@data/category'
import { Stack } from 'types/stack'

export const CarouselStacks: Stack[] = [
  {
    category: category.carousel,
    url: 'https://www.embla-carousel.com',
    repo: 'davidjerleke/embla-carousel',
    description:
      'A lightweight carousel library with fluid motion and great swipe precision.',
    name: 'Embla Carousel',
    image: 'embla-carousel.svg',
  },
  {
    category: category.carousel,
    url: 'https://splidejs.com',
    repo: 'Splidejs/splide',
    description: 'A lightweight, flexible and accessible slider and carousel. No dependencies, no Lighthouse errors.',
    name: 'Splide',
    image: 'splide.svg',
  },
]
