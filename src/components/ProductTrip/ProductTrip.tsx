import { memo } from 'react'

import { Arrow } from '@/components/shared/Icon/Arrow/Arrow'
import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'

import LogoPNG from '@/assets/images/logo/title_white.png'
import LogoWEBP from '@/assets/images/logo/title_white.webp'
import CheckManPNG from '@/assets/images/other/checkman.png'
import CheckManWEBP from '@/assets/images/other/checkman.webp'

import { directions, typeOfGoods } from '@/constants'

import cls from './ProductTrip.module.scss'

export const ProductTrip = memo(() => {
  return (
    <div className={cls.productTripContainer}>
      <div className={cls.contentContainer}>
        <Text as='h4' className={cls.title}>Покупаем</Text>
        <div className={cls.directionContainer}>
          {directions.map(item => (
            <div key={item.title} className={cls.direction}>
              <Text>{item.title}</Text>
              <Picture className={cls.flag} png={item.imageJPG} webp={item.imageWEBP} alt={item.alt} isCover/>
            </div>
          ))}
        </div>
      </div>
      <div className={cls.arrowContainer}>
        <Arrow />
      </div>
      <div className={cls.contentContainer}>
        <Text as='h4' className={cls.title}>Проверяем</Text>
        <div className={cls.logoContainer}>
          <Picture className={cls.checkman} png={CheckManPNG} webp={CheckManWEBP} alt="TechOutlet"/>
          <Picture className={cls.logo} png={LogoPNG} webp={LogoWEBP} alt="TechOutlet"/>
        </div>
      </div>
      <div className={cls.arrowContainer}>
        <Arrow />
      </div>
      <div className={cls.contentContainer}>
        <Text as='h4' className={cls.title}>Продаем</Text>
        <div className={cls.typesOfGoodsContainer}>
          {typeOfGoods.map(item => (
            <div key={item} className={cls.typeOfGood}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
})