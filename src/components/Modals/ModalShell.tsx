import { FC, ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { CloseIcon } from '@/components/shared/Icon'
import cls from './ModalShell.module.scss'

type ModalShellProps = {
  onClose: () => void
  children: ReactNode
}

export const ModalShell: FC<ModalShellProps> = ({ onClose, children }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.2,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, []);

  return (
    <div className={cls.backdrop} onClick={onClose}>
      <div
        className={cls.window}
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          className={cls.closeButton}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <CloseIcon size={30} strokeWidth={3} className={cls.closeIcon}/>
        </button>
        <div ref={wrapperRef} className={cls.windowContent}>
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}