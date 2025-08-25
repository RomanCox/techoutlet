import { memo } from 'react'
import { classNames } from '@/helpers/classNames'

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'

import { CardPositionType, marketingCards } from '@/constants/constants'

import cls from './MarketingCards.module.scss'

export const MarketingCards = memo(() => {
  return (
    <div className={cls.marketingCardsWrapper}>
      <div className={cls.marketingCardsContainer}>
        {marketingCards
          .filter(({ cardPosition }) => cardPosition === CardPositionType.TOP)
          .map(card => (
            <div key={card.id} className={classNames(cls.card, {}, [cls[`card${card.id}`]])}>
              <Text className={cls.cardText}>{card.text}</Text>
              <Picture
                png={card.imagePNG}
                webp={card.imageWEBP}
                alt={'not important image'}
                className={cls.cardImage}
                isCover
              />
            </div>
          ))
        }
      </div>
      <div className={cls.marketingCardsContainer}>
        {marketingCards
          .filter(({ cardPosition }) => cardPosition === CardPositionType.BOTTOM)
          .map(card => (
            <div key={card.id} className={classNames(cls.card, {}, [cls[`card${card.id}`]])}>
              <Text className={cls.cardText}>{card.text}</Text>
              <Picture
                png={card.imagePNG}
                webp={card.imageWEBP}
                alt={'not important image'}
                className={cls.cardImage}
                isCover
              />
            </div>
          ))
        }
      </div>
    </div>
  )
})