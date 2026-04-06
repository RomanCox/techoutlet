'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: ReactNode
}

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    // синхронизация с GSAP
    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    // GSAP ticker вместо requestAnimationFrame
    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // (опционально) доступ из window
    // @ts-ignore
    window.lenis = lenis

    return () => {
      lenis.off('scroll', onScroll)
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}