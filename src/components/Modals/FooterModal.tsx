import { memo } from 'react'
import { Text } from '@/components/shared/Text/Text'
import { FooterModalsProps } from '@/components/ModalProvider/ModalProvider'
import { footerData } from '@/constants'
import cls from './FooterModal.module.scss'

export const FooterModal = memo(({ id }: FooterModalsProps) => {
  const item = footerData.services.servicesList.find(({id: serviceId} ) => serviceId === id)

  if (!item) return null

  return (
    <div className={cls.footerModal}>
      <Text as="h4">{item.label}</Text>
      <Text>
        {item.text}
        {item.link && <a href={item.link.url}>{item.link.text}</a>}
      </Text>
    </div>
  )
})