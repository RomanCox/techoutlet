import { useLayoutEffect, useRef, useState } from 'react'

export const MAX_MOBILE_WIDTH = 705
export const MAX_TABLET_WIDTH = 980

export interface ISize {
  width: number
  height: number
}

export interface IUseWindowSizeOptions {
  /** debounce in ms. If 0, will use requestAnimationFrame (default true). */
  debounceMs?: number
  /** if true (default) use requestAnimationFrame when debounceMs === 0 */
  useRaf?: boolean
  /** initial size to avoid hydration flashes; default: undefined on server, window size on client */
  initialSize?: ISize | undefined
}

export function useWindowSize({
                                debounceMs = 0,
                                useRaf = true,
                                initialSize,
                              }: IUseWindowSizeOptions = {}): ISize {
  const isClient = typeof window !== "undefined";
  const [size, setSize] = useState<ISize>(
    initialSize ?? (isClient ? { width: window.innerWidth, height: window.innerHeight } : { width: 0, height: 0 })
  )

  const rafId = useRef<number | null>(null)
  const timeoutId = useRef<number | null>(null)

  useLayoutEffect(() => {
    if (!isClient) return

    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const handler = () => {
      if (debounceMs > 0) {
        if (timeoutId.current) {
          window.clearTimeout(timeoutId.current)
        }
        timeoutId.current = window.setTimeout(() => {
          update()
          timeoutId.current = null
        }, debounceMs)
      } else if (useRaf && "requestAnimationFrame" in window) {
        if (rafId.current) cancelAnimationFrame(rafId.current)
        rafId.current = requestAnimationFrame(() => {
          update()
          rafId.current = null
        })
      } else {
        update()
      }
    };

    // passive listener for better scrolling/resize perf
    window.addEventListener("resize", handler, { passive: true })

    // update once on mount in case initialSize was different
    handler()

    return () => {
      window.removeEventListener("resize", handler)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      if (timeoutId.current) window.clearTimeout(timeoutId.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceMs, useRaf]) // only reattach if options change

  return size
}
