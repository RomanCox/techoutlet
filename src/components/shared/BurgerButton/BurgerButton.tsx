import { memo, useState } from 'react'
import { classNames } from '@/helpers'

import cls from './BurgerButton.module.scss'

interface IBurgerButtonProps {
  onClick?: () => void
}

export const BurgerButton = memo((props: IBurgerButtonProps) => {
  const { onClick } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsOpen(!isOpen)
    onClick?.()
  }

  return (
    <button className={cls.burgerButton} onClick={onClickHandler}>
      <div className={classNames(cls.strip, { [cls.open]: isOpen }, [])}/>
    </button>
  )
})