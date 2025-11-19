import { createContext, type FC, type ReactNode, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalShell, FooterModal } from '@/components/Modals'
import { MODAL } from '@/constants/modal'
import { lockScroll, unlockScroll } from '@/utils/lockScroll'


type ModalConfig = {
  type: MODAL
}

type ModalContextValue = {
  modal: ModalConfig | null
  openModal: (type: MODAL) => void
  closeModal: () => void
}

export interface FooterModalsProps {
  id: MODAL
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined)

export const useModal = (): ModalContextValue => {
  const ctx = useContext(ModalContext)
  if (!ctx) {
    throw new Error('useModal must be used inside ModalProvider')
  }
  return ctx
}

const ModalRoot: FC = () => {
  const { modal, closeModal } = useModal()
  const [ mounted, setMounted ] = useState(false)
  const [ modalRoot, setModalRoot ] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)
    const el = document.getElementById('modal-root')
    setModalRoot(el)
  }, [])

  if (!mounted || !modal || !modalRoot) return null

  let content: ReactNode = null

  switch (modal.type) {
    case MODAL.TRADE_IN:
      content = <FooterModal id={MODAL.TRADE_IN}/>
      break
    case MODAL.REPAIR:
      content = <FooterModal id={MODAL.REPAIR}/>
      break
    case MODAL.DELIVERY_PAYING:
      content = <FooterModal id={MODAL.DELIVERY_PAYING}/>
      break
    case MODAL.ABOUT:
      content = <FooterModal id={MODAL.ABOUT}/>
      break
    case MODAL.MAP:
      content = <FooterModal id={MODAL.MAP}/>
      break
  }

  if (!content) return null

  return createPortal(
    <ModalShell onClose={closeModal}>{content}</ModalShell>,
    modalRoot,
  )
}

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<ModalConfig | null>(null)

  const openModal: ModalContextValue['openModal'] = (type) => {
    lockScroll()
    setModal({type})
  }

  const closeModal = () => {
    unlockScroll()
    setModal(null)
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      <ModalRoot />
    </ModalContext.Provider>
  )
}
