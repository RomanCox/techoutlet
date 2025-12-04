"use client"

import { memo } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import { TgIcon } from '@/components/shared/Icon/TgIcon/TgIcon'
import { Button } from '@/components/shared/Button/Button'

import ManyIphonesPNG from '@/assets/images/devices/many_iphones.png'
import ManyIphonesWEBP from '@/assets/images/devices/many_iphones.webp'

import { IMounted } from '@/constants'
import cls from './FollowUs.module.scss'

export const FollowUs = memo(({ mounted }: IMounted) => {
  const { width } = useWindowSize()
  let label = "Посмотрите наш\nтелеграм"

  if (mounted && width < 731) {
    label = "Посмотрите\nнаш телеграм"
  }

  if (mounted && width < 960) {
    label = "Посмотрите наш телеграм"
    return (
      <div className={cls.followUsContainer}>
        <div className={cls.followUsTextContainer}>
          <Text className={cls.followUsTitle} as="h4">{label}</Text>
          <Picture className={cls.followUsImage} png={ManyIphonesPNG} webp={ManyIphonesWEBP} alt={'phones picture'} />
          <Text className={cls.followUsDescription}>Все б/у товары опубликованы в нашем канале Telegram</Text>
          <Button
            as="a"
            href="https://t.me/techoutlet"
            target="_blank"
            rel="noopener noreferrer"
            className={cls.catalogButton}
          >
            Каталог
            <TgIcon />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={cls.followUsContainer}>
      <div className={cls.followUsTextContainer}>
        <Text className={cls.followUsTitle} as="h4">{"Посмотрите наш\nтелеграм"}</Text>
        <Text className={cls.followUsDescription}>Все б/у товары опубликованы в нашем канале Telegram</Text>
        <Button
          as="a"
          href="https://t.me/techoutlet"
          target="_blank"
          rel="noopener noreferrer"
          className={cls.catalogButton}
        >
          Каталог
          <TgIcon />
        </Button>
      </div>
      <Picture className={cls.followUsImage} png={ManyIphonesPNG} webp={ManyIphonesWEBP} alt={'phones picture'} />
    </div>
  )
})