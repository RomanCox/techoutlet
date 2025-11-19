import { memo } from 'react'
import { classNames } from '@/helpers'

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'

import { marketingCards } from '@/constants'

import cls from './MarketingCards.module.scss'

export const MarketingCards = memo(() => {
  return (
    <div className={cls.marketingCardsWrapper}>
      <div className={cls.marketingCardsContainer}>
        {marketingCards
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