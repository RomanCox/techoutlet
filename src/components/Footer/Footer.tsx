import { memo } from 'react'

import { extractTelegramUsername } from '@/helpers'
import { useModal } from '@/components/ModalProvider/ModalProvider'

import { Button, ButtonTheme } from '@/components/shared/Button/Button'
import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { Visa } from '@/components/shared/Icon/Visa/Visa'
import { MasterCard } from '@/components/shared/Icon/MasterCard/MasterCard'
import { Maestro } from '@/components/shared/Icon/Maestro/Maestro'
import { Mir } from '@/components/shared/Icon/Mir/Mir'
import { TgIcon } from '@/components/shared/Icon'
import { Instagram } from '@/components/shared/Icon/Instagram/Instagram'
import { VK } from '@/components/shared/Icon/VK/VK'
import { TikTok } from '@/components/shared/Icon/TikTok/TikTok'
import { GoogleColor } from '@/components/shared/Icon/GoogleColor/GoogleColor'
import { Yandex } from '@/components/shared/Icon/Yandex/Yandex'

import TitlePNG from '@/assets/images/logo/title_blue.png'
import TitleWEBP from '@/assets/images/logo/title_blue.webp'
import KufarPNG from '@/assets/images/other/kufar.png'
import KufarWEBP from '@/assets/images/other/kufar.webp'

import { footerData } from '@/constants'
import cls from './Footer.module.scss'

export const Footer = memo(() => {
  const { openModal } = useModal()

  return (
    <footer className={cls.footer}>
      <div className={cls.footerContent}>
        <div className={cls.shop}>
          <Text as='h4'>{footerData.shop.label}</Text>
          <Text className={cls.text}>{footerData.shop.address.text}</Text>
          <Text className={cls.postText}>{footerData.shop.address.postText}</Text>
          <Text className={cls.text}>{footerData.shop.workingTime.text}</Text>
          <Text className={cls.postText}>{footerData.shop.workingTime.postText}</Text>
        </div>
        <div className={cls.contacts}>
          <Text as='h4'>{footerData.contacts.label}</Text>
          <a
            href={footerData.contacts.phoneNumber.link}
            className={cls.phoneLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {footerData.contacts.phoneNumber.label}
          </a>
          <a
            href={footerData.contacts.telegram.link}
            className={cls.tgLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {extractTelegramUsername(footerData.contacts.telegram.link)}
          </a>
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
              <Text as="span">{label}</Text>
            </Button>
          ))}
        </div>
        <div className={cls.companyInfo}>
          <Picture className={cls.title} png={TitlePNG} webp={TitleWEBP} alt="TechOutlet"/>
          <div className={cls.socialsContainer}>
            <Text className={cls.socialsLabel}>{footerData.siteInfo.socialsLabel}</Text>
            <div className={cls.socials}>
              {footerData.siteInfo.socials.map(social => (
                <a
                  key={social.link}
                  href={social.link}
                  className={cls.social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.iconName === 'instagram' && (
                    <div className={cls.instagramIconContainer}>
                      <Instagram />
                    </div>
                  )}
                  {social.iconName === 'telegram' && (
                    <div className={cls.tgIconContainer}>
                      <TgIcon className={cls.tgIcon}/>
                    </div>
                  )}
                  {social.iconName === 'vk' && (
                    <div className={cls.vkIconContainer}>
                      <VK />
                    </div>
                  )}
                  {social.iconName === 'tiktok' && (
                    <div className={cls.tiktokIconContainer}>
                      <TikTok />
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className={cls.reviewsContainer}>
            <div className={cls.reviewsSites}>
              <Text className={cls.reviewsLabel}>{footerData.siteInfo.reviewsLabel}</Text>
              <div className={cls.sites}>
                {footerData.siteInfo.reviews.map(social => (
                  <a
                    key={social.link}
                    href={social.link}
                    className={cls.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.iconName === 'yandex' && (
                      <div className={cls.yandexIconContainer}>
                        <Yandex />
                      </div>
                    )}
                    {social.iconName === 'google' && (
                      <div className={cls.googleIconContainer}>
                        <GoogleColor />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className={cls.kufarContainer}>
              <Text className={cls.kufarLabel}>{footerData.siteInfo.kufarLabel}</Text>
              <a
                href={footerData.siteInfo.kufarLink}
                className={cls.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Picture png={KufarPNG} webp={KufarWEBP} alt={'kufar logo'} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.siteInfo}>
        <Text className={cls.text}>{footerData.copyright.label}</Text>
        <Text className={cls.postText}>{footerData.copyright.text}</Text>
      </div>
    </footer>
  )
})