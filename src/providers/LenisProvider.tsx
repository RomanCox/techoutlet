'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

import { ScrollTrigger } from '@/lib/gsap'

const LenisContext = createContext<Lenis | null>(null)
export const  useLenis = () => useContext(LenisContext)

type Props = {
  children: ReactNode
}

export default function LenisProvider({ children }: Props) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      prevent: (node) => {
        return !!node.closest('[data-lenis-prevent]')
      },
    })

    setLenis(lenis)

    // синхронизация с GSAP
    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    // GSAP ticker вместо requestAnimationFrame
    // const update = (time: number) => {
    //   lenis.raf(time * 1000)
    // }
    //
    // gsap.ticker.add(update)
    // gsap.ticker.lagSmoothing(0)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.off('scroll', onScroll)
      // gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  return <LenisContext.Provider value={lenis}>
    {children}
  </LenisContext.Provider>
}