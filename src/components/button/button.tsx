import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export const Button = ({ active, ...restProps }: ButtonProps) => {
  return (
    <button
      type='button'
      className={classNames(styles.button, {
        [styles.active]: active,
      })}
      {...restProps}
    />
  )
}
