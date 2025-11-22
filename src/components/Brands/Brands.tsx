import { memo } from 'react'

import { Text } from '@/components/shared/Text/Text'
import { Icon } from '@/components/shared/Icon'

import { brands } from '@/constants'

import cls from './Brands.module.scss'

export const Brands = memo(() => {
  return (
    <div className={cls.brandsContainer}>
      <Text as="h2">{"В наличии все\nизвестные бренды"}</Text>
      <div className={cls.brandsWrapper}>
        {brands.map(brand => (
          <Icon
            key={brand.id}
            name={brand.iconName}
            alt={brand.alt}
          />
        ))}
      </div>
    </div>
  )
})