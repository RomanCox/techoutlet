import { memo } from 'react'

import cls from './Footer.module.scss'
import {catalog} from "@/constants/constants";
import {Text} from "@/components/shared/Text/Text";

export const Footer = memo(() => {
  return (
    <footer className={cls.footer}>
      <div className={cls.catalog}>
        <Text as='h4'>Каталог техники</Text>
        {catalog.map(item => (
          <Text key={item} as='p'>{item}</Text>
        ))}
      </div>
      <div className={cls.shop}></div>
      <div className={cls.contacts}></div>
      <div className={cls.info}></div>
    </footer>
  )
})