import { memo } from 'react'

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { Icon } from '@/components/shared/Icon/Icon'

import { IMounted, marketingCards } from '@/constants'
import cls from './MarketingCards.module.scss'

import DarkBackgroundJPG from'@/assets/images/other/dark_card_background.jpg'
import DarkBackgroundWEBP from'@/assets/images/other/dark_card_background.webp'
import LightBackgroundJPG from'@/assets/images/other/light_card_background.jpg'
import LightBackgroundWEBP from'@/assets/images/other/light_card_background.webp'

export const MarketingCards = memo(({ mounted }: IMounted) => {
  return (
    <div className={cls.marketingCardsWrapper}>
      <div className={cls.marketingCardsContainer}>
        {marketingCards
          .map(card => {
            const isOdd = card.id % 2 !== 0

            return (
              <div key={card.id} className={cls.card}>
                <Text className={cls.cardText}>{card.text}</Text>
                <Picture
                  jpg={isOdd ? DarkBackgroundJPG : LightBackgroundJPG}
                  webp={isOdd ? DarkBackgroundWEBP : LightBackgroundWEBP}
                  alt={'not important image'}
                  className={cls.cardImage}
                  isCover={mounted}
                />
                <Icon
                  name={card.icon}
                  width={64}
                  height={64}
                  className={cls.cardIcon}
                  alt="icon"
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
})