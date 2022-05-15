import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import styles from './card.module.css'

interface CardProps {
  image: string
  name: string
  description: string
  repo: string
}

export const Card = ({ image, name, description, repo }: CardProps) => {
  const githubUrl = `https://github.com/${repo}`

  return (
    <div className={styles.container}>
      <div className={styles.meta}>
        <Image src={image} alt={name} width={32} height={32} />
        <h3 className={styles.name}>{name}</h3>
        <a href={githubUrl}>
          <ExternalLinkIcon width={24} />
        </a>
      </div>
      <div className={styles.desc_container}>
        <p className={styles.desc} title={description}>
          {description}
        </p>
      </div>
    </div>
  )
}
