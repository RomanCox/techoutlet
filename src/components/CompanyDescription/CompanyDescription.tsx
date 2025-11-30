import { memo } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import OriginalPNG from '@/assets/images/other/original.png'
import OriginalWEBP from '@/assets/images/other/original.webp'

import {companyDescription, IMounted} from '@/constants'

import cls from './CompanyDescription.module.scss'

export const CompanyDescription = memo(({ mounted }: IMounted) => {
  const { width } = useWindowSize()

  const isDesktop = mounted ? width > 1300 : false
  const isMobile = mounted ? width <= 705 : false

  return (
    <div className={cls.companyDescriptionContainer}>
      <div className={cls.textContainer}>
        {/*<Text as={'h2'} className={cls.title}><span>{companyDescription.highlightTitle}</span>{companyDescription.restTitle}</Text>*/}
        <Text as={'h2'} className={cls.title}>
          <span>{companyDescription.highlightTitle}</span>
          {isDesktop ? companyDescription.restTitle : isMobile ? companyDescription.restTitleMobile : companyDescription.restTitleTablet}
        </Text>
        <Text as={'p'}>{companyDescription.subTitle}</Text>
        <ul className={cls.list}>
          {companyDescription.variants.map(item => {
            const [title, rest] = item.split(' (');
            return (
              <li key={item} className={cls.listItem}>
                <div className={cls.listMarker} />
                <Text className={cls.text}><span>{title}</span>{` (${rest}`}</Text>
              </li>
            )
          })}
        </ul>
        <Text as={'p'}>{companyDescription.productsDescription}</Text>
        <Text as={'p'} className={cls.lastText}>
          {companyDescription.topGadgets.beforeBrands}
          <span>{companyDescription.topGadgets.brands}</span>
          {companyDescription.topGadgets.afterBrands}
          {companyDescription.topGadgets.secondLine}
        </Text>
      </div>
      <Picture png={OriginalPNG} webp={OriginalWEBP} alt={'image with text original'} className={cls.originalImage}/>
    </div>
  )
})