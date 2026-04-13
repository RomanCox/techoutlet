import { memo, useRef, useLayoutEffect, useMemo } from 'react'

import { classNames } from '@/helpers'

import cls from './Row.module.scss'

export const Row = memo(({
                           text,
                           animationIndex,
                           onBrandMeasure,
                         }: {
  text: string
  animationIndex: number
  onBrandMeasure: (rect: DOMRect) => void
}) => {

  const fakeBrandRef = useRef<HTMLSpanElement | null>(null)

  const lines = useMemo(() => {
    return text.replace(/ /g, '\u00A0').split('\n')
  }, [text])

  useLayoutEffect(() => {
    if (!fakeBrandRef.current) return
    onBrandMeasure(fakeBrandRef.current.getBoundingClientRect())
  }, [lines])

  let index = 0

  return (
    <h2 className={cls.rowText}>
      {lines.map((line, lineIndex) => {
        const parts = line.split('\u00A0')
        const brand = parts[0]
        const rest = parts.slice(1).join('\u00A0')

        const content = lineIndex === 0 ? rest : line

        return (
          <div key={lineIndex}>

            {lineIndex === 0 && (
              <span ref={fakeBrandRef} className={cls.fakeBrand}>
                {brand}
              </span>
            )}

            {lineIndex === 0 && rest && '\u00A0'}

            {content.split('').map((s, i) => {
              const iGlobal = index++

              return (
                <span
                  key={`${lineIndex}-${i}`}
                  className={classNames(cls.symbol, {
                    [cls.coloredSymbol]: iGlobal < animationIndex,
                  })}
                >
                  {s}
                </span>
              )
            })}
          </div>
        )
      })}
    </h2>
  )
})