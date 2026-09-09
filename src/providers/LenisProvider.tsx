'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

import { gsap } from '@/lib/gsap'

const LenisContext = createContext<Lenis | null>(null)
export const  useLenis = () => useContext(LenisContext)

type Props = {
  children: ReactNode
}

export default function LenisProvider({ children }: Props) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      prevent: (node) => {
        return !!node.closest('[data-lenis-prevent]')
      },
    })

    setLenis(instance)

    // Keep Lenis in sync with the native scroll reset done in _document.tsx
    // (scroll-driven animations rely on starting from position 0).
    instance.scrollTo(0, { immediate: true })

    gsap.ticker.add((time) => {
      instance.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(instance.raf as any)
      instance.destroy()
    }
  }, [])

  return <LenisContext.Provider value={lenis}>
    {children}
  </LenisContext.Provider>
}