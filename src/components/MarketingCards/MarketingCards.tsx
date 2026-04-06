import { memo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { Icon } from '@/components/shared/Icon/Icon'

import { IMounted, marketingCards } from '@/constants'
import cls from './MarketingCards.module.scss'

import DarkBackgroundJPG from'@/assets/images/other/dark_card_background.jpg'
import DarkBackgroundWEBP from'@/assets/images/other/dark_card_background.webp'
import LightBackgroundJPG from'@/assets/images/other/light_card_background.jpg'
import LightBackgroundWEBP from'@/assets/images/other/light_card_background.webp'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const MarketingCards = memo(({ mounted }: IMounted) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const registerCard = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el
  }

  useGSAP(() => {
    if (!containerRef.current) return

    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)
    if (cards.length === 0) return

    // Устанавливаем начальное состояние: карточки повернуты "внутрь" относительно верхней грани
    gsap.set(cards, {
      // opacity: 0,
      rotationX: -90,
      transformOrigin: "top center",
      // y: -30,
      // scale: 0.95
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: false,
        markers: true,
        once: true,
      }
    })

    // Каскадное появление карточек с вращением и раскачиванием
    cards.forEach((card, index) => {
      tl.to(card, {
        // opacity: 1,
        rotationX: 0,
        // y: 0,
        // scale: 1,
        duration: 3,
        ease: "elastic.out(1, 0.5)", // Пружинящий эффект с раскачиванием
        delay: index * 0.15
      }, "<")

      // Дополнительная анимация для иконки
      const icon = card.querySelector(`.${cls.cardIcon}`)
      if (icon) {
        tl.fromTo(icon,
          {
            rotation: -15,
            scale: 0.8
          },
          {
            rotation: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.6)"
          },
          "-=0.4" // Начинается чуть раньше окончания основной анимации
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={cls.marketingCardsWrapper}>
      <div className={cls.marketingCardsContainer}>
        {marketingCards
          .map((card, index) => {
            const isOdd = card.id % 2 !== 0

            return (
              <div
                key={card.id}
                className={cls.cardContainer}
              >
                <div
                  // key={card.id}
                  ref={registerCard(index)}
                  className={cls.card}
                >
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
              </div>
            )
          })
        }
      </div>
    </div>
  )
})