import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { useWindowSize } from '@/hooks/useWindowSize'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useLenis } from '@/providers/LenisProvider'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import { Row } from '@/components/CompanyDescription/Row'
import OriginalPNG from '@/assets/images/other/original.png'
import OriginalWEBP from '@/assets/images/other/original.webp'

import { companyDescription, IMounted } from '@/constants'

import cls from './NewCompanyDescription.module.scss'

export const NewCompanyDescription = memo(({ mounted }: IMounted) => {
  const [animationIndex, setAnimationIndex] = useState(0)
  const [restTitle, setRestTitle] = useState<string>('')
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  const { width } = useWindowSize()

  const isDesktop = mounted ? width > 1300 : false
  const isBigTablet = mounted ? (width > 705 && width <= 1300) : false
  const isSmallTablet = mounted ? (width > 460 && width <= 705) : false

  useEffect(() => {
    const next =
      isDesktop
        ? companyDescription.restTitle
        : isBigTablet
          ? companyDescription.restTitleBigTablet
          : isSmallTablet
            ? companyDescription.restTitleSmallTablet
            : companyDescription.restTitleMobile

    setRestTitle(prev => (prev === next ? prev : next))
  }, [isDesktop, isBigTablet, isSmallTablet])

  const animationIndexRef = useRef(0)
  const lockedRef = useRef(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLSpanElement>(null)
  const subTitleRef = useRef<HTMLParagraphElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const lastTextRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const brandCompletedRef = useRef<boolean>(false)

  const lenis = useLenis()

  const totalCharacters = companyDescription.restTitle.length

  const handleBrandMeasure = useCallback((rect: DOMRect) => {
    setTargetRect(rect)
  }, [])

  // =========================
  // GSAP ONLY FOR BRAND (ONE TIME CONTROLLED)
  // =========================
  useGSAP(() => {
    if (
      !sectionRef.current ||
      !brandRef.current ||
      !subTitleRef.current ||
      !listRef.current ||
      !textRef.current ||
      !lastTextRef.current ||
      !imageRef.current ||
      !targetRect
    ) return

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
    // BRAND TIMELINE (CONTROLLED)
    // =========================
    const brandTL = gsap.timeline({ paused: true })

    brandTL.to(brand, {
      x: dx,
      y: dy,
      scaleX,
      scaleY,
      ease: 'power2.out',
      duration: 1,
    })

    // =========================
    // CONTENT TIMELINE
    // =========================
    const contentTL = gsap.timeline({ paused: true, progress: 0 })

    contentTL
      .to(subTitle, { opacity: 1, duration: 0.3 })
      .to(list, { opacity: 1, duration: 0.3 }, '<')
      .to(text, { opacity: 1, duration: 0.3 }, '<')
      .to(lastText, { opacity: 1, duration: 0.3 }, '<')
      .to(image, { opacity: 1, duration: 0.3 }, '<')

    // expose
    ;(window as any).__brandTL = brandTL
    ;(window as any).__contentTL = contentTL
  }, {
    scope: sectionRef,
    dependencies: [targetRect],
  })

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current

    // =========================
    // 1. BRAND RANGE
    // =========================
    const brandTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'center+=20% bottom',
      end: 'top 50%',
    })

    // =========================
    // 2. TEXT RANGE (SEPARATE)
    // =========================
    const textTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      end: 'top 10%',
    })

    const update = () => {

      // =========================
      // BRAND
      // =========================
      const brandProgress = brandTrigger.progress

      if (!lockedRef.current) {
        ;(window as any).__brandTL?.progress(brandProgress)
      }

      if (brandProgress >= 0.98) {
        lockedRef.current = true
        brandCompletedRef.current = true
      }

      // =========================
      // CONTENT (after brand)
      // =========================
      if (brandCompletedRef.current) {
        ;(window as any).__contentTL?.progress(brandProgress)
      }

      // =========================
      // TEXT (SEPARATE TIMELINE → FIX SPEED)
      // =========================
      const textProgress = textTrigger.progress

      const index = Math.floor(textProgress * totalCharacters)

      if (index !== animationIndexRef.current) {
        animationIndexRef.current = index
        setAnimationIndex(index)
      }
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
      brandTrigger.kill()
      textTrigger.kill()
    }
  }, [lenis, totalCharacters])

  // =========================
  // RENDER
  // =========================
  return (
    <div ref={sectionRef} className={cls.companyDescriptionContainer}>

      <Text ref={brandRef} as="h2" className={cls.brand}>
        {companyDescription.highlightTitle}
      </Text>

      <div className={cls.textContainer}>
        <Row
          text={restTitle}
          animationIndex={animationIndex}
          onBrandMeasure={handleBrandMeasure}
        />

        <Text ref={subTitleRef} as="p">
          {companyDescription.subTitle}
        </Text>

        <ul ref={listRef} className={cls.list}>
          {companyDescription.variants.map(item => {
            const [title, rest] = item.split(' (')
            return (
              <li key={item} className={cls.listItem}>
                <div className={cls.listMarker} />
                <Text className={cls.text}>
                  <span>{title}</span>{` (${rest}`}
                </Text>
              </li>
            )
          })}
        </ul>

        <Text ref={textRef} as="p">
          {companyDescription.productsDescription}
        </Text>

        <Text ref={lastTextRef} as="p" className={cls.lastText}>
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