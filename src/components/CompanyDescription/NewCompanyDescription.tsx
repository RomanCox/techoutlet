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

  // Scroll-progress "high-water marks". Each phase only ever moves forward -
  // once it reaches 1 it stays there for good, so scrolling back up never
  // un-plays anything (per spec: forward-only, plays once, then stays put).
  const maxBrandProgressRef = useRef(0)
  // Drives BOTH the per-character title reveal and the content blocks
  // (subTitle/list/text/image/lastText) - they run in parallel and are
  // meant to finish together, not one after the other.
  const maxRevealProgressRef = useRef(0)

  const sectionRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLSpanElement>(null)
  const fakeBrandRef = useRef<HTMLSpanElement | null>(null)
  const subTitleRef = useRef<HTMLParagraphElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const lastTextRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const contentTLRef = useRef<gsap.core.Timeline | null>(null)

  const lenis = useLenis()

  const totalCharacters = companyDescription.restTitle.length

  const handleBrandRef = useCallback((el: HTMLSpanElement | null) => {
    fakeBrandRef.current = el
  }, [])

  // =========================
  // CONTENT REVEAL TIMELINE (built once, driven by scroll progress below)
  // =========================
  useGSAP(() => {
    if (
      !subTitleRef.current ||
      !listRef.current ||
      !textRef.current ||
      !imageRef.current ||
      !lastTextRef.current
    ) return

    const subTitle = subTitleRef.current
    const list = listRef.current
    const text = textRef.current
    const image = imageRef.current
    const lastText = lastTextRef.current

    gsap.set([subTitle, list, text, image, lastText], { y: 24 })

    // One after another - subTitle -> list -> text -> image -> lastText.
    // (image/lastText order can be swapped freely, it's not important.)
    contentTLRef.current = gsap.timeline({ paused: true })
      .to(subTitle, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      .to(list, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      .to(text, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      .to(image, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      .to(lastText, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
  }, { scope: sectionRef, dependencies: [] })

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const brandEase = gsap.parseEase('power2.out')

    // =========================
    // 1. BRAND: big title shrinks/moves onto the fakeBrand slot
    //
    // Both start/end are anchored purely to the section's TOP edge (not its
    // own height, e.g. NOT 'center+=20% bottom'). That matters: on tablet
    // widths the section is a lot taller (image drops into the text flow +
    // Row's bottom margin for it), and a height-relative anchor like
    // 'center+=20% bottom' can end up numerically *after* 'top 50%' once the
    // section is tall enough - the range inverts and the whole brand phase
    // collapses to an instant jump instead of a scrub. Top-based anchors are
    // always monotonic regardless of section height, so this can't happen.
    // =========================
    const brandTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'top 50%',
    })

    // =========================
    // 2. REVEAL: per-letter title typing AND the content blocks
    // (subTitle -> list -> text -> image -> lastText) run in PARALLEL over
    // the same scroll range, both finishing together around the same point
    // (~10-15% from the top of the viewport) - not one after another.
    // =========================
    const revealTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      end: 'top 12%',
    })

    const update = () => {
      const brand = brandRef.current
      const fakeBrand = fakeBrandRef.current
      if (!brand || !fakeBrand) return

      // ---- BRAND ----
      const rawBrandProgress = gsap.utils.clamp(0, 1, brandTrigger.progress)
      if (rawBrandProgress > maxBrandProgressRef.current) {
        maxBrandProgressRef.current = rawBrandProgress
      }

      // Measured live every single frame - both before AND after the brand
      // has docked (not just once, and not only reacting to a 'resize'
      // event). That's what keeps the landing spot accurate across
      // resizes/orientation changes on any desktop resolution or tablet:
      // there's no race with React re-rendering Row's text after a
      // breakpoint change, because we simply read whatever is on screen
      // right now, every frame, forever.
      const sectionRect = section.getBoundingClientRect()
      const naturalWidth = brand.offsetWidth
      const naturalHeight = brand.offsetHeight
      const naturalCenterX = sectionRect.left + sectionRect.width / 2
      const naturalCenterY = sectionRect.top + sectionRect.height / 2

      const toRect = fakeBrand.getBoundingClientRect()
      const targetCenterX = toRect.left + toRect.width / 2
      const targetCenterY = toRect.top + toRect.height / 2

      // brandEase(1) === 1, so once maxBrandProgressRef is maxed out this
      // naturally resolves to sitting exactly on the target - no separate
      // "locked" snap branch needed.
      const eased = brandEase(maxBrandProgressRef.current)

      gsap.set(brand, {
        x: (targetCenterX - naturalCenterX) * eased,
        y: (targetCenterY - naturalCenterY) * eased,
        scaleX: 1 + (toRect.width / naturalWidth - 1) * eased,
        scaleY: 1 + (toRect.height / naturalHeight - 1) * eased,
      })

      // ---- CHARACTERS + CONTENT (parallel, only once the brand has docked) ----
      if (maxBrandProgressRef.current >= 1) {
        const rawRevealProgress = gsap.utils.clamp(0, 1, revealTrigger.progress)
        if (rawRevealProgress > maxRevealProgressRef.current) {
          maxRevealProgressRef.current = rawRevealProgress
        }

        const index = Math.floor(maxRevealProgressRef.current * totalCharacters)
        if (index !== animationIndexRef.current) {
          animationIndexRef.current = index
          setAnimationIndex(index)
        }

        contentTLRef.current?.progress(maxRevealProgressRef.current)
      }
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
      brandTrigger.kill()
      revealTrigger.kill()
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
          onBrandRef={handleBrandRef}
        />/

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
