"use client"

import { memo } from 'react'
import Marquee from "react-fast-marquee"
import { useWindowSize } from '@/hooks/useWindowSize'

import { Text } from '@/components/shared/Text/Text'
import { Icon } from '@/components/shared/Icon/Icon'

import { brands, IMounted } from '@/constants'
import cls from './Brands.module.scss'

export const Brands = memo(({ mounted }: IMounted) => {
  const { width } = useWindowSize()

  if (mounted && width <= 1100) {
    const firstRow = brands.filter(({ id }) => id < brands.length / 2)
    const secondRow = brands.filter(({ id }) => id >= brands.length / 2)

    return (
      <div className={cls.brandsContainer}>
        <Text as="h2">{"В наличии все\nизвестные бренды"}</Text>
        <Marquee
          gradient
          pauseOnHover
          speed={30}
          direction="left"
          gradientColor={'#F5F5F5'}
        >
          <div className={cls.brandsWrapper}>
            {firstRow.map(brand => (
              <div key={brand.id} className={cls.brandContainer}>
                <Icon
                  key={brand.id}
                  name={brand.iconName}
                  alt={brand.alt}
                />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          gradient
          pauseOnHover
          speed={30}
          direction="right"
          gradientColor={'#F5F5F5'}
        >
          <div className={cls.brandsWrapper}>
            {secondRow.map(brand => (
              <div key={brand.id} className={cls.brandContainer}>
                <Icon
                  key={brand.id}
                  name={brand.iconName}
                  alt={brand.alt}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    )
  }

  return (
    <div className={cls.brandsContainer}>
      <Text as="h2">{"В наличии все\nизвестные бренды"}</Text>
      <div className={cls.brandsWrapper}>
        {brands.map(brand => (
          <div key={brand.id} className={cls.brandContainer}>
            <Icon
              key={brand.id}
              name={brand.iconName}
              alt={brand.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
})