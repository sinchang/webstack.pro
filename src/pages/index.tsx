import { Card } from '@components/card'
import { Categories } from '@components/categories'
import type { Stack } from '@custypes/stack'
import { category, CategoryKey, CategoryValue } from '@data/category'
import { stacks } from '@data/index'
import shuffle from 'lodash.shuffle'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

import styles from '../styles/home.module.css'

const Home: NextPage<{
  stacksProps: Stack[]
  categoryProps: CategoryKey
}> = ({ stacksProps, categoryProps }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryValue | null>(category[categoryProps])
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>(stacksProps)

  const handleSelect = (category: CategoryValue) => {
    if (category === selectedCategory) {
      setSelectedCategory(null)
      setSelectedStacks(shuffle(stacks))
      return
    }

    setSelectedCategory(category)
  }

  useEffect(() => {
    if (!selectedCategory) {
      return
    }

    setSelectedStacks(
      shuffle(stacks).filter((stack) => stack.category === selectedCategory)
    )
  }, [selectedCategory])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Webstack.Pro</h1>
      <h3 className={styles.desc}>
        Discover the brilliant open-source web tech stacks
      </h3>
      <div className={styles.main}>
        <div className={styles.categories_wrapper}>
          <Categories
            onSelect={handleSelect}
            activeCategory={selectedCategory}
          />
        </div>
        <div className={styles.card_wrapper}>
          {selectedStacks.map((stack) => (
            <div key={stack.name} className={styles.card}>
              <Card
                image={stack.image ? `/logos/${stack.image}` : ''}
                name={stack.name}
                description={stack.description}
                url={stack.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let stacksProps = shuffle(stacks)
  if (query.category) {
    stacksProps = shuffle(stacks).filter(
      (stack) => stack.category === category[query.category as CategoryKey]
    )
  }

  return {
    props: {
      stacksProps,
      categoryProps: query.category ?? null,
    },
  }
}
export default Home
