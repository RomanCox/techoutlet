import { memo } from 'react'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'

import { brands } from '@/constants/constants'

import cls from './Brands.module.scss'

export const Brands = memo(() => {
  return (
    <div className={cls.brandsContainer}>
      <Text as="h2">{"В наличии все\nизвестные бренды"}</Text>
      <div className={cls.brandsWrapper}>
        {brands.map(brand => (
          <Picture
            key={brand.id}
            png={brand.imagePNG}
            webp={brand.imageWEBP}
            alt={brand.alt}
            className={cls.brandImage}
          />
        ))}
      </div>
    </div>
  )
})