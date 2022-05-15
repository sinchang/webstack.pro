import { Button } from '@components/button'
import { category, CategoryKey, CategoryValue } from '@data/category'

interface CategoriesProps {
  onSelect: (name: CategoryValue) => void
  activeCategory: CategoryValue | null
}

export const Categories = ({ onSelect, activeCategory }: CategoriesProps) => {
  return (
    <>
      {(Object.keys(category) as unknown as CategoryKey[]).map((key) => (
        <Button
          key={key}
          onClick={() => onSelect(category[key])}
          active={activeCategory === category[key]}
        >
          {category[key]}
        </Button>
      ))}
    </>
  )
}
