"use client"

import { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { MAX_MOBILE_WIDTH, useWindowSize } from '@/hooks/useWindowSize'
import { setupParallax } from '@/helpers/setupParallax'

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { Button } from '@/components/shared/Button/Button'
import { TgIcon } from '@/components/shared/Icon/TgIcon/TgIcon'

import { heroImages, heroSlide, ImageKey, IMounted } from '@/constants'

import DarkBackgroundJPG from '@/assets/images/other/dark_card_background.jpg'
import DarkBackgroundWEBP from '@/assets/images/other/dark_card_background.webp'

import cls from './HeroSlider.module.scss'

gsap.registerPlugin(useGSAP)

export const HeroSlider = memo(({ mounted }: IMounted) => {
  const slideRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const imagesRef = useRef<Record<ImageKey, HTMLDivElement | null>>({
    notebook: null,
    camera: null,
    iphones: null,
    headphones: null,
    actionCamera: null,
  })

  const register = (key: ImageKey) => (el: HTMLDivElement | null) => {
    if (el) {
      imagesRef.current[key] = el
      el.style.setProperty('--tx', '0px')
      el.style.setProperty('--ty', '0px')
    }
  }

  const { width } = useWindowSize()

  const isMobile = mounted ? width <= MAX_MOBILE_WIDTH : false

  useGSAP(() => {
    const setupFloat = () => {
      const images = Object.values(imagesRef.current)
        .filter((img): img is HTMLDivElement => img !== null)
      const animations: gsap.core.Tween[] = []

      const floatConfig: Record<ImageKey, {
        distance: number
        duration: number
        delay: number
        isCentered?: boolean
      }> = {
        notebook: { distance: 12, duration: 6, delay: 0 },
        camera: { distance: 12, duration: 6, delay: 1 },
        iphones: { distance: 12, duration: 6, delay: 0.5 },
        headphones: { distance: 10, duration: 6, delay: 1.5, isCentered: true },
        actionCamera: { distance: 12, duration: 6, delay: 0.8 }
      }

      images.forEach((img) => {
        const key = Object.keys(imagesRef.current).find(
          (k) => imagesRef.current[k as ImageKey] === img
        ) as ImageKey

        const config = floatConfig[key]
        if (!config) return

        if (config.isCentered) {
          const anim = gsap.to(img, {
            y: config.distance,
            duration: config.duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: config.delay,
            modifiers: {
              y: gsap.utils.unitize(y => parseFloat(y) % (config.distance * 2))
            }
          })
          animations.push(anim)
        } else {
          const anim = gsap.to(img, {
            y: config.distance,
            duration: config.duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: config.delay,
            modifiers: {
              y: gsap.utils.unitize(y => parseFloat(y) % (config.distance * 2))
            }
          })
          animations.push(anim)

          if (key === 'notebook' || key === 'actionCamera') {
            const anim2 = gsap.to(img, {
              x: key === 'notebook' ? 8 : -8,
              duration: config.duration + 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: config.delay * 0.5
            })
            animations.push(anim2)
          }
        }
      })

      return () => {
        animations.forEach(anim => anim.kill())
      }
    }

    const tl = gsap.timeline({
      onComplete: () => {
        const isMobileDevice = window.matchMedia('(max-width: 1024px)').matches

        if (!isMobileDevice) {
          tl.parallaxCleanup = setupParallax(
            imagesRef,
            {
              notebook: 36,
              camera: 44,
              iphones: 22,
              headphones: 28,
              actionCamera: 40,
            },
            {
              maxFraction: 0.9,
              lerp: 0.12,
              disableOnCoarsePointer: true
            }
          )
        } else {
          setupFloat()
        }
      }
    })

    if (titleRef.current) {
      tl.to(titleRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: 'power1.out' }
      )
    }

    if (subTitleRef.current) {
      tl.to(subTitleRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
    }

    if (buttonRef.current) {
      tl.to(buttonRef.current,
        { opacity: 1, scale: 1, duration: 0.5, ease: 'backOut(0.6)' },
        '-=0.4'
      )
    }

    const images = Object.values(imagesRef.current).filter((img): img is HTMLDivElement => img !== null)

    images.forEach((img, index) => {
      gsap.set(img, { opacity: 0, scale: 0.8 })

      tl.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'backOut(0.4)',
        delay: index * 0.1
      }, '-=0.5')
    })

    return () => {
      const extraCleanup = (tl as any).extraCleanup
      if (extraCleanup) extraCleanup()
    }
  }, { scope: slideRef })

  return (
    <div className={cls.heroSliderContainer}>
      <div ref={slideRef} className={cls.slide}>
        <div className={cls.textContainer}>
          <Text ref={titleRef} as="h1" className={cls.title}>
						{isMobile  ? heroSlide.labelMobile : heroSlide.label}
          </Text>
					<Text ref={subTitleRef} as="p" className={cls.subTitle}>
						{isMobile  ? heroSlide.brandsMobile : heroSlide.brands}
					</Text>
					<Button
						as="a"
            ref={buttonRef}
						href="https://t.me/techoutlet"
						target="_blank"
						rel="noopener noreferrer"
						className={cls.catalogButton}
					>
						Каталог
						<TgIcon className={cls.tgIcon}/>
					</Button>
        </div>
				<div className={cls.imagesContainer}>
          {heroImages.map(item => (
            <div ref={register(item.name)} className={cls[`${item.name}Image`]}>
              <Picture
                key={item.id}
                png={item.PNG}
                webp={item.WEBP}
                alt={item.alt}
              />
            </div>
          ))}
				</div>
        <Picture
          jpg={DarkBackgroundJPG}
          webp={DarkBackgroundWEBP}
          alt="background image"
          className={cls.slideImage}
          isCover={mounted}
        />
      </div>
    </div>
  )
})