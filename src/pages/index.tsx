import { Card } from '@components/card'
import { Categories } from '@components/categories'
import type { Stack } from '@custypes/stack'
import { CategoryValue } from '@data/category'
import { stacks } from '@data/index'
import shuffle from 'lodash.shuffle'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import styles from '../styles/home.module.css'

console.log(shuffle(stacks))

const Home: NextPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryValue | null>(null)
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>([])

  const handleSelect = (category: CategoryValue) => {
    if (category === selectedCategory) {
      setSelectedCategory(null)
      return
    }

    setSelectedCategory(category)
  }

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedStacks(stacks)
      return
    }
    console.log(selectedCategory)
    setSelectedStacks(
      stacks.filter((stack) => stack.category === selectedCategory)
    )
  }, [selectedCategory])

  useEffect(() => {
    setSelectedStacks(shuffle(stacks))
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Webstack.Pro</h1>
      <h3 className={styles.desc}>The index page for web developers</h3>
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
                image={`/logos/${stack.image}`}
                name={stack.name}
                description={stack.description}
                repo={stack.repo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
