import { BurgerButton } from '@/components/shared/BurgerButton/BurgerButton'
import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { TgIcon } from '@/components/shared/Icons/TgIcon'

import titlePNG from '@/assets/images/logo/title.png'
import titleWEBP from '@/assets/images/logo/title.webp'
import logoPNG from '@/assets/images/logo/logo.png'
import logoWEBP from '@/assets/images/logo/logo.webp'

import cls from './Header.module.scss'

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logoContainer}>
        <BurgerButton />
        <Picture className={cls.title} png={titlePNG} webp={titleWEBP} alt="TechOutlet"/>
        <Picture className={cls.logo} png={logoPNG} webp={logoWEBP} alt="Logo"/>
      </div>
      <div className={cls.contactsContainer}>
        <Text>+375 29 6663083</Text>
        <TgIcon />
      </div>
    </header>
  )
}