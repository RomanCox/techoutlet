import type { FC, ReactNode } from 'react'
import { CloseIcon } from '@/components/shared/Icon'
import cls from './ModalShell.module.scss'

type ModalShellProps = {
  onClose: () => void
  children: ReactNode
}

export const ModalShell: FC<ModalShellProps> = ({ onClose, children }) => (
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
      <div className={cls.windowContent}>
        {children}
      </div>
    </div>
  </div>
)