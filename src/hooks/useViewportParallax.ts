import { useEffect, useRef } from 'react'

type Coeffs = Record<string, number>

type Options = {
	/** Насколько далеко может «уйти» нормализованное смещение (0..1). По умолчанию 0.9 */
	maxFraction?: number
	/** Сила демпфирования (0..1), больше — плавнее. По умолчанию 0.12 */
	lerp?: number
	/** Отключить на устройствах с грубым pointer'ом (тач). По умолчанию true */
	disableOnCoarsePointer?: boolean
}

export function useViewportParallax(coeffs: Coeffs, opts: Options = {}) {
	const { maxFraction = 0.9, lerp = 0.12, disableOnCoarsePointer = true } = opts

	const nodesRef = useRef<Record<string, HTMLElement | null>>({})
	const register = (key: keyof typeof coeffs | string) => (el: HTMLElement | null) => {
		nodesRef.current[key as string] = el
		if (el) {
			el.style.setProperty("--tx", "0px")
			el.style.setProperty("--ty", "0px")
		}
	}

	const targetRef = useRef({ x: 0, y: 0 })
	const currentRef = useRef({ x: 0, y: 0 })
	const rafRef = useRef<number | null>(null)

	useEffect(() => {
		if (disableOnCoarsePointer && window.matchMedia?.("(pointer: coarse)").matches) {
			return
		}

		const onMove = (e: MouseEvent) => {
			const vw = window.innerWidth || 1
			const vh = window.innerHeight || 1

			const nx = ((e.clientX - vw / 2) / (vw / 2))
			const ny = ((e.clientY - vh / 2) / (vh / 2))

			const clamp = (v: number) => Math.max(-maxFraction, Math.min(maxFraction, v))
			targetRef.current.x = clamp(nx)
			targetRef.current.y = clamp(ny)

			if (rafRef.current == null) tick()
		}

		const onLeave = () => {
			targetRef.current.x = 0
			targetRef.current.y = 0
			if (rafRef.current == null) tick()
		}

		const tick = () => {
			const c = currentRef.current
			const t = targetRef.current
			c.x += (t.x - c.x) * lerp
			c.y += (t.y - c.y) * lerp

			Object.entries(coeffs).forEach(([key, k]) => {
				const el = nodesRef.current[key]
				if (!el) return
				el.style.setProperty("--tx", `${-c.x * k}px`)
				el.style.setProperty("--ty", `${-c.y * k}px`)
			})

			if (Math.abs(t.x - c.x) < 0.001 && Math.abs(t.y - c.y) < 0.001) {
				rafRef.current = null
				return
			}
			rafRef.current = requestAnimationFrame(tick)
		}

		const tickBound = tick
		const start = () => {
			if (rafRef.current == null) rafRef.current = requestAnimationFrame(tickBound)
		}

		window.addEventListener("mousemove", onMove, { passive: true })
		window.addEventListener("mouseleave", onLeave)

		return () => {
			window.removeEventListener("mousemove", onMove)
			window.removeEventListener("mouseleave", onLeave)
			if (rafRef.current) cancelAnimationFrame(rafRef.current)
			rafRef.current = null
		}
	}, [coeffs, maxFraction, lerp, disableOnCoarsePointer])

	return { register }
}
