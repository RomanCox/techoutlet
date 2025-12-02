import {memo, useEffect, useState} from 'react'
import { classNames } from '@/helpers'
import {MAX_TABLET_WIDTH, useWindowSize} from '@/hooks/useWindowSize'

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'

import { IMarketingCards, marketingCards } from '@/constants'

import cls from './MarketingCards.module.scss'

export const MarketingCards = memo(() => {
  const { width } = useWindowSize()

  const [cards, setCards] = useState<IMarketingCards[]>(marketingCards)

  useEffect(() => {
    if (width > MAX_TABLET_WIDTH) {
      setCards(marketingCards)
      return
    }

    const reordered = [...marketingCards]
    const index3 = reordered.findIndex(c => c.id === 3)
    const index4 = reordered.findIndex(c => c.id === 4)

    if (index3 === -1 || index4 === -1) {
      setCards(marketingCards)
      return
    }

    ;[reordered[index3], reordered[index4]] = [reordered[index4], reordered[index3]]
    setCards(reordered)
  }, [width])

  return (
    <div className={cls.marketingCardsWrapper}>
      <div className={cls.marketingCardsContainer}>
        {cards
          .map(card => (
            <div key={card.id} className={classNames(cls.card, {}, [cls[`card${card.id}`]])}>
              <Text className={cls.cardText}>{card.text}</Text>
              <Picture
                png={card.imagePNG}
                webp={card.imageWEBP}
                alt={'not important image'}
                className={cls.cardImage}
                isCover={width > 600}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
})