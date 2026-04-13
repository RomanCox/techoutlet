import { memo, useRef, useLayoutEffect, useMemo, useCallback } from 'react'

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
  const fakeBrandRef = useRef<HTMLDivElement | null>(null)

  const normalizeText = (text: string) =>
    text.replace(/ /g, '\u00A0')

  let globalIndex = 0

  useLayoutEffect(() => {
    if (!fakeBrandRef.current) return

    const rect = fakeBrandRef.current.getBoundingClientRect()

    onBrandMeasure?.(rect)
  }, [fakeBrandRef, text])

  return (
    <h2 className={cls.rowText}>
      {normalizeText(text).split('\n').map((line, lineIndex) => {
        if (lineIndex === 0) {
          const [brand, ...rest] = line.split('\u00A0')
          const restOfLine = rest.join('\u00A0')

          return (
            <div key={lineIndex}>
              <span
                ref={fakeBrandRef}
                className={cls.fakeBrand}
              >
                {brand}
              </span>

              {restOfLine && '\u00A0'}

              {restOfLine.split('').map((symbol, index) => {
                const currentIndex = globalIndex++

                return (
                  <span
                    key={index}
                    className={classNames(cls.symbol, {
                      [cls.coloredSymbol]: currentIndex < animationIndex
                    })}
                  >
                    {symbol}
                  </span>
                )
              })}
            </div>
          )
        }

        return (
          <div key={lineIndex}>
            {line.split('').map((symbol, index) => {
              const currentIndex = globalIndex++

              return (
                <span
                  key={index}
                  className={classNames(cls.symbol, {
                    [cls.coloredSymbol]: currentIndex < animationIndex
                  })}
                >
                  {symbol}
                </span>
              )
            })}
          </div>
        )
      })}
    </h2>
  )
})