import { memo } from 'react'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'

import ManyIphonesPNG from '@/assets/images/devices/many_iphones.png'
import ManyIphonesWEBP from '@/assets/images/devices/many_iphones.webp'

import cls from './FollowUs.module.scss'
import {TgIcon} from "@/components/shared/Icon/TgIcon/TgIcon";
import {Button} from "@/components/shared/Button/Button";

export const FollowUs = memo(() => {
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