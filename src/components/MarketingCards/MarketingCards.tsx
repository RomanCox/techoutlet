import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'

import { marketingCards } from '@/constants/constants'

import cls from './MarketingCards.module.scss'
import {classNames} from "@/helpers/classNames";


export const MarketingCards = () => {



  return (
    <div className={cls.marketingCardsContainer}>
      {marketingCards.map(card => (
        <div className={classNames(cls.card, {}, [cls[`card${card.id}`]])}>
          <Text className={cls.cardText}>{card.text}</Text>
          <Picture
            png={card.imagePNG}
            webp={card.imageWEBP}
            alt={'not important image'}
            className={cls.cardImage}
            isCover
          />
        </div>
      ))}
    </div>
  )
}