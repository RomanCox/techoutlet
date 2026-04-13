import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { useWindowSize } from '@/hooks/useWindowSize'
import { gsap, ScrollTrigger } from '@/lib/gsap'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import { Row } from '@/components/CompanyDescription/Row'
import OriginalPNG from '@/assets/images/other/original.png'
import OriginalWEBP from '@/assets/images/other/original.webp'

import { companyDescription, IMounted } from '@/constants'

import cls from './NewCompanyDescription.module.scss'

export const NewCompanyDescription = memo(({ mounted }: IMounted) => {
  const [animationIndex, setAnimationIndex] = useState<number>(-1)
  const [restTitle, setRestTitle] = useState<string>('')
  const [targetRect, setTargetRect] = useState<DOMRect| null>(null)

  const { width } = useWindowSize()

  const isDesktop = mounted ? width > 1300 : false
  const isBigTablet = mounted ? (width > 705 && width <= 1300) : false
  const isSmallTablet = mounted ? (width > 460 && width <= 705) : false

  const sectionRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLSpanElement>(null)
  const subTitleRef = useRef<HTMLParagraphElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const lastTextRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const totalCharacters = companyDescription.restTitle.length

  const handleBrandMeasure = useCallback((rect: DOMRect) => {
    if (!rect) return

    setTargetRect(rect)
  }, [])

  useGSAP(() => {
    if (
      !sectionRef.current ||
      !brandRef.current ||
      !subTitleRef.current ||
      !listRef.current ||
      !textRef.current ||
      !lastTextRef.current ||
      !imageRef.current
    ) return

    if (!targetRect) return

    const section = sectionRef.current
    const brand = brandRef.current

    const subTitle = subTitleRef.current
    const list = listRef.current
    const text = textRef.current
    const lastText = lastTextRef.current
    const image = imageRef.current

    gsap.set(brand, {
      x: 0,
      y: 0,
      scale: 1,
    })

    const fromRect = brand.getBoundingClientRect()
    const toRect = targetRect

    const dx =
      (toRect.left + toRect.width / 2) -
      (fromRect.left + fromRect.width / 2)

    const dy =
      (toRect.top + toRect.height / 2) -
      (fromRect.top + fromRect.height / 2)

    const scaleX = toRect.width / fromRect.width
    const scaleY = toRect.height / fromRect.height

    // =========================
    // TIMELINE (ОДИН И ЕДИНСТВЕННЫЙ)
    // =========================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center+=20% bottom',
        end: 'top 15%',
        scrub: true,
        invalidateOnRefresh: true,
      }
    })

    // =========================
    // BRAND PHASE
    // =========================
    tl.to(brand, {
      x: dx,
      y: dy,
      // scale: 0.33,
      scaleX,
      scaleY,
      // ease: 'none',
      ease: 'power2.out',
      duration: 0.4,
    })

    tl.to({}, { duration: 0.6 })

    // =========================
    // CONTENT PHASE
    // =========================
    tl.to(subTitle, { opacity: 1 }, '<')
    tl.to(list, { opacity: 1 }, '<')
    tl.to(text, { opacity: 1 }, '<')
    tl.to(lastText, { opacity: 1 }, '<')
    tl.to(image, { opacity: 1 }, '<')

    // =========================
    // TEXT ANIMATION
    // =========================
    ScrollTrigger.create({
      trigger: section,
      start: 'center+=20% bottom',
      end: 'top 15%',
      scrub: true,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        const progress = self.progress

        if (progress < 0.4) {
          setAnimationIndex(0)
          return
        }

        const p = (progress - 0.4) / 0.6
        const index = Math.floor(p * totalCharacters)

        setAnimationIndex(
          Math.max(0, Math.min(totalCharacters, index))
        )
      }
    })

  }, {
    scope: sectionRef,
    dependencies: [targetRect],
  })

  useEffect(() => {
    setRestTitle(isDesktop ? companyDescription.restTitle :
      isBigTablet ? companyDescription.restTitleBigTablet :
        isSmallTablet ? companyDescription.restTitleSmallTablet : companyDescription.restTitleMobile)
  }, [isDesktop, isBigTablet, isSmallTablet])

  return (
    <div ref={sectionRef} className={cls.companyDescriptionContainer}>
      <Text ref={brandRef} as={'h2'} className={cls.brand}>
        {companyDescription.highlightTitle}
      </Text>

      <div className={cls.textContainer}>
        <Row
          text={restTitle}
          animationIndex={animationIndex}
          onBrandMeasure={handleBrandMeasure}
        />
        <Text ref={subTitleRef} as={'p'}>{companyDescription.subTitle}</Text>
        <ul ref={listRef} className={cls.list}>
          {companyDescription.variants.map(item => {
            const [title, rest] = item.split(' (')
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