import { ImageKey } from '@/constants'
import { RefObject } from 'react'
import gsap from 'gsap'

interface ParallaxState {
  targetX: number
  targetY: number
  currentX: number
  currentY: number
  rafId: number | null
}

interface ParallaxOptions {
  maxFraction?: number;
  lerp?: number;
  disableOnCoarsePointer?: boolean;
}

export const setupParallax = (
  imagesRef: RefObject<Record<ImageKey, HTMLDivElement | null>>,
  coeffs: Record<ImageKey, number>,
  options: ParallaxOptions = {},
) => {
  const { maxFraction = 0.9, lerp = 0.12, disableOnCoarsePointer = true } = options

  if (disableOnCoarsePointer && window.matchMedia?.('(pointer: coarse)').matches) {
    return () => {}
  }

  const state: ParallaxState = {
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    rafId: null,
  }

  const currentImages = imagesRef.current
  if (currentImages) {
    Object.values(currentImages).forEach((el) => {
      if (el) {
        el.style.setProperty("--tx", "0px")
        el.style.setProperty("--ty", "0px")
      }
    })
  }

  const onMove = (e: MouseEvent) => {
    const vw = window.innerWidth || 1
    const vh = window.innerHeight || 1

    // Нормализуем координаты от -1 до 1 относительно центра экрана
    const nx = ((e.clientX - vw / 2) / (vw / 2))
    const ny = ((e.clientY - vh / 2) / (vh / 2))

    // Ограничиваем значение (как в хуке)
    const clamp = (v: number) => Math.max(-maxFraction, Math.min(maxFraction, v))
    state.targetX = clamp(nx)
    state.targetY = clamp(ny)

    if (state.rafId == null) tick()
  }

  const onLeave = () => {
    state.targetX = 0
    state.targetY = 0
    if (state.rafId == null) tick()
  }

  const tick = () => {
    const c = state
    const currentImages = imagesRef.current

    if (!currentImages) return

    // Плавное демпфирование (как в хуке)
    c.currentX += (c.targetX - c.currentX) * lerp
    c.currentY += (c.targetY - c.currentY) * lerp

    // Применяем смещение ко всем изображениям (как в хуке)
    Object.entries(coeffs).forEach(([key, k]) => {
      const el = currentImages[key as ImageKey]
      if (!el) return

      // Точно такое же вычисление смещения как в хуке
      const moveX = -c.currentX * k
      const moveY = -c.currentY * k

      // Обновляем CSS переменные (как в хуке)
      el.style.setProperty("--tx", `${moveX}px`)
      el.style.setProperty("--ty", `${moveY}px`)

      // Применяем трансформацию через GSAP для плавности
      gsap.to(el, {
        duration: 0.1,
        x: moveX,
        y: moveY,
        ease: 'none',
        overwrite: true,
      })
    })

    // Продолжаем анимацию, если есть движение (как в хуке)
    if (Math.abs(c.targetX - c.currentX) > 0.001 || Math.abs(c.targetY - c.currentY) > 0.001) {
      state.rafId = requestAnimationFrame(tick)
    } else {
      state.rafId = null
    }
  }

  const tickBound = tick

  // Добавляем слушатели
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mouseleave', onLeave)

  // Запускаем анимацию
  if (state.rafId == null) state.rafId = requestAnimationFrame(tickBound)

  // Возвращаем функцию очистки
  return () => {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseleave', onLeave)
    if (state.rafId) {
      cancelAnimationFrame(state.rafId)
      state.rafId = null
    }
  }
}