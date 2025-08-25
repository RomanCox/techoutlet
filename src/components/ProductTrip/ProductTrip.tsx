import { memo } from 'react'

import { Arrow } from '@/components/shared/Icons/Arrow/Arrow'
import { Picture } from '@/components/shared/Picture/Picture'

import LogoPNG from '@/assets/images/logo/title_white.png'
import LogoWEBP from '@/assets/images/logo/title_white.webp'
import {directions, typeOfGoods} from '@/constants/constants'

import cls from './ProductTrip.module.scss'

export const ProductTrip = memo(() => {
  return (
    <div className={cls.productTripContainer}>
      <div className={cls.directionsContainer}>
        {directions.map(item => (
          <div key={item} className={cls.direction}>{item}</div>
        ))}
      </div>
      <div className={cls.leftArrows}>
        <Arrow />
        <Arrow />
      </div>
      <div className={cls.centerBlock}>
        <div className={cls.logoContainer}>
          <Picture className={cls.logo} png={LogoPNG} webp={LogoWEBP} alt="TechOutlet"/>
        </div>
      </div>
      <div className={cls.rightArrows}>
        <Arrow />
        <Arrow />
      </div>
      <div className={cls.typeOfGoodsContainer}>
        {typeOfGoods.map(item => (
          <div key={item} className={cls.typeOfGood}>{item}</div>
        ))}
      </div>
    </div>
  )
})