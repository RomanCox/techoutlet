import { memo } from 'react'

import { extractTelegramUsername } from '@/helpers'
import { useModal } from '@/components/ModalProvider/ModalProvider'

import { Button, ButtonTheme } from '@/components/shared/Button/Button'
import { Text } from '@/components/shared/Text/Text'
import { Visa } from '@/components/shared/Icon/Visa/Visa'
import { MasterCard } from '@/components/shared/Icon/MasterCard/MasterCard'
import { Maestro } from '@/components/shared/Icon/Maestro/Maestro'
import { Mir } from '@/components/shared/Icon/Mir/Mir'

import { footerData } from '@/constants'
import cls from './Footer.module.scss'
import TitlePNG from "@/assets/images/logo/title_blue.png";
import TitleWEBP from "@/assets/images/logo/title_blue.webp";
import {Picture} from "@/components/shared/Picture/Picture";
import {TgIcon} from "@/components/shared/Icon";

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
        <a href={footerData.contacts.phoneNumber.link} className={cls.phoneLink}>{footerData.contacts.phoneNumber.label}</a>
        <a href={footerData.contacts.telegram.link} className={cls.tgLink}>{extractTelegramUsername(footerData.contacts.telegram.link)}</a>
        <Text className={cls.postText}>{footerData.contacts.telegram.postText}</Text>
        <div className={cls.payments}>
          <Visa />
          <MasterCard />
          <Maestro />
          <Mir />
        </div>
      </div>
      <div className={cls.shopInfo}>
        <Text as='h4'>{footerData.services.label}</Text>
        {footerData.services.servicesList.map(({ id, label }) => (
          <Button theme={ButtonTheme.CLEAR} key={id} onClick={() => openModal(id)}>
            <Text>{label}</Text>
          </Button>
        ))}
      </div>
      <div className={cls.companyInfo}>
        <Picture className={cls.title} png={TitlePNG} webp={TitleWEBP} alt="TechOutlet"/>
        <div className={cls.socialContainer}>
          <Text className={cls.title}>{footerData.siteInfo.socialsLabel}</Text>
          <div className={cls.socials}>
            {footerData.siteInfo.socials.map(social => (
              <a key={social.link} href={social.link} className={cls.social}>
                {social.iconName === 'telegram' && (
                  <div className={cls.tgIconContainer}>
                    <TgIcon className={cls.tgIcon}/>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className={cls.siteInfo}>
          <Text className={cls.text}>{footerData.siteInfo.copyright}</Text>
          <Text className={cls.postText}>{footerData.siteInfo.text}</Text>
        </div>
      </div>
    </footer>
  )
})