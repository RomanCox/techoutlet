import { memo } from 'react'

import { extractTelegramUsername } from '@/helpers'

import { Button, ButtonTheme } from '@/components/shared/Button/Button'
import { Text } from '@/components/shared/Text/Text'

import { footerData } from '@/constants'
import cls from './Footer.module.scss'
import {useModal} from "@/components/ModalProvider/ModalProvider";

export const Footer = memo(() => {
  const { openModal } = useModal()

  return (
    <footer className={cls.footer}>
      <div className={cls.shop}>
        <Text as='h4'>{footerData.shop.label}</Text>
        <Text className={cls.text}>{footerData.shop.address.text}</Text>
        <Text className={cls.postText}>{footerData.shop.address.postText}</Text>
        <Text className={cls.text}>{footerData.shop.workingTime.text}</Text>
        <Text className={cls.postText}>{footerData.shop.workingTime.postText}</Text>
      </div>
      <div className={cls.contacts}>
        <Text as='h4'>{footerData.contacts.label}</Text>
        <a href={footerData.contacts.phoneNumber.link} className={cls.link}>{footerData.contacts.phoneNumber.text}</a>
        <a href={footerData.contacts.telegram.text} className={cls.link}>{extractTelegramUsername(footerData.contacts.telegram.text)}</a>
        <Text className={cls.postText}>{footerData.contacts.telegram.postText}</Text>
      </div>
      <div className={cls.shopInfo}>
        <Text as='h4'>{footerData.services.label}</Text>
        {footerData.services.servicesList.map(({ id, label }) => (
          <Button theme={ButtonTheme.CLEAR} key={id} onClick={() => openModal(id)}>
            <Text>{label}</Text>
          </Button>
        ))}
      </div>
    </footer>
  )
})