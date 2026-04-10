import { memo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useWindowSize } from '@/hooks/useWindowSize'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import OriginalPNG from '@/assets/images/other/original.png'
import OriginalWEBP from '@/assets/images/other/original.webp'

import { companyDescription, IMounted } from '@/constants'

import cls from './CompanyDescription.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const CompanyDescription = memo(({ mounted }: IMounted) => {
  const { width } = useWindowSize()

  const isDesktop = mounted ? width > 1300 : false
  const isBigTablet = mounted ? (width > 705 && width <= 1300) : false
  const isSmallTablet = mounted ? (width > 460 && width <= 705) : false

  const sectionRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLSpanElement>(null)
  const restRef = useRef<HTMLSpanElement>(null)
  const subTitleRef = useRef<HTMLParagraphElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const lastTextRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !brandRef.current || !restRef.current) return

    const section = sectionRef.current
    const brand = brandRef.current
    const rest = restRef.current
    const subTitle = subTitleRef.current
    const list = listRef.current
    const text = textRef.current
    const lastText = lastTextRef.current
    const image = imageRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center+=20% bottom',
        end: 'top 15%',
        scrub: true,
      }
    })

    // 1️⃣ бренд едет в своё место
    tl.to(brand,
      {
        scaleX: 0.34,
        scaleY: 0.3175,
        left: 40,
        top: 0,
        xPercent: -33,
        yPercent: -33.5,
        transform: 'none',
        ease: 'power3.out',
        duration: 1.2,
      }
    )

    // 2️⃣ сброс scale → ставим реальный font-size
    tl.set(brand, {
      scale: 1,
      fontSize: '36px',
      transform: 'none',
    })

    // 👉 появление остального текста
    tl.to(rest, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    })

    tl.to(subTitle, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.2')

    tl.to(list, {
      opacity: 1,
      duration: 0.9,
      ease: 'power2.out',
    }, '-=0.2')

    tl.to(text, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=0.2')

    tl.to(lastText, {
      opacity: 1,
      duration: 1.8,
      ease: 'power2.out',
    }, '-=0.2')

    tl.to(image, {
      opacity: 1,
      duration: 2.1,
      ease: 'power2.out',
    }, '-=0.2')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={sectionRef} className={cls.companyDescriptionContainer}>
      <Text ref={brandRef} as={'h2'} className={cls.brand}>
        {companyDescription.highlightTitle}
      </Text>

      <div className={cls.textContainer}>
        <Text as={'h2'} className={cls.title}>
          <span className={cls.fakeBrand}>
            {companyDescription.highlightTitle}
          </span>
          <span ref={restRef} className={cls.rest}>
            {
              isDesktop ? companyDescription.restTitle :
                isBigTablet ? companyDescription.restTitleBigTablet :
                  isSmallTablet ? companyDescription.restTitleSmallTablet : companyDescription.restTitleMobile
            }
          </span>
        </Text>
        <Text ref={subTitleRef} as={'p'}>{companyDescription.subTitle}</Text>
        <ul ref={listRef} className={cls.list}>
          {companyDescription.variants.map(item => {
            const [title, rest] = item.split(' (');
            return (
              <li key={item} className={cls.listItem}>
                <div className={cls.listMarker} />
                <Text className={cls.text}><span>{title}</span>{` (${rest}`}</Text>
              </li>
            )
          })}
        </ul>
        <Text ref={textRef} as={'p'}>{companyDescription.productsDescription}</Text>
        <Text ref={lastTextRef} as={'p'} className={cls.lastText}>
          {companyDescription.topGadgets.beforeBrands}
          <span>{companyDescription.topGadgets.brands}</span>
          {companyDescription.topGadgets.afterBrands}
          {companyDescription.topGadgets.secondLine}
        </Text>
      </div>
      <div ref={imageRef} className={cls.originalImage}>
        <Picture png={OriginalPNG} webp={OriginalWEBP} alt={'image with text original'}/>
      </div>
    </div>
  )
})