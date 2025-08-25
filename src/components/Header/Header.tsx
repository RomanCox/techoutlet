import { memo } from 'react'

import { BurgerButton } from '@/components/shared/BurgerButton/BurgerButton'
import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { TgIcon } from '@/components/shared/Icons/TgIcon/TgIcon'

import TitlePNG from '@/assets/images/logo/title_blue.png'
import TitleWEBP from '@/assets/images/logo/title_blue.webp'
import LogoPNG from '@/assets/images/logo/logo.png'
import LogoWEBP from '@/assets/images/logo/logo.webp'

import cls from './Header.module.scss'

export const Header = memo(() => {
  return (
    <header className={cls.header}>
      <div className={cls.logoContainer}>
        <BurgerButton />
        <Picture className={cls.title} png={TitlePNG} webp={TitleWEBP} alt="TechOutlet"/>
        <Picture className={cls.logo} png={LogoPNG} webp={LogoWEBP} alt="Logo"/>
      </div>
      <div className={cls.contactsContainer}>
        <Text>+375 29 6663083</Text>
        <TgIcon />
      </div>
    </header>
  )
})