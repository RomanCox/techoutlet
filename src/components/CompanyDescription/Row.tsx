import { memo, useMemo } from 'react'

import { classNames } from '@/helpers'

import cls from './Row.module.scss'

export const Row = memo(({
                           text,
                           animationIndex,
                           onBrandRef,
                         }: {
  text: string
  animationIndex: number
  onBrandRef: (el: HTMLSpanElement | null) => void
}) => {

  const lines = useMemo(() => {
    return text.replace(/ /g, '\u00A0').split('\n')
  }, [text])

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
              // Kept as a live DOM ref (not a one-off measurement) so the
              // parent can always read its *current* position/size - that's
              // what keeps the brand title landing correctly at any desktop
              // resolution, including after a resize.
              <span ref={onBrandRef} className={cls.fakeBrand}>
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
