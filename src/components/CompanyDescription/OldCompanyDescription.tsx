import { memo } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import OriginalPNG from '@/assets/images/other/original.png'
import OriginalWEBP from '@/assets/images/other/original.webp'

import { oldCompanyDescription, IMounted } from '@/constants'

import cls from './OldCompanyDescription.module.scss'

export const OldCompanyDescription = memo(({ mounted }: IMounted) => {
  const { width } = useWindowSize()

  const isDesktop = mounted ? width > 1300 : false
  const isBigTablet = mounted ? (width > 705 && width <= 1300) : false
  const isSmallTablet = mounted ? (width > 460 && width <= 705) : false

  return (
    <div className={cls.companyDescriptionContainer}>
      <div className={cls.textContainer}>
        <Text as={'h2'} className={cls.title}>
          <span>{oldCompanyDescription.highlightTitle}</span>
          {
            isDesktop ? oldCompanyDescription.restTitle :
              isBigTablet ? oldCompanyDescription.restTitleBigTablet :
                isSmallTablet ? oldCompanyDescription.restTitleSmallTablet : oldCompanyDescription.restTitleMobile
          }
        </Text>
        <Text as={'p'}>{oldCompanyDescription.subTitle}</Text>
        <ul className={cls.list}>
          {oldCompanyDescription.variants.map(item => {
            const [title, rest] = item.split(' (');
            return (
              <li key={item} className={cls.listItem}>
                <div className={cls.listMarker} />
                <Text className={cls.text}><span>{title}</span>{` (${rest}`}</Text>
              </li>
            )
          })}
        </ul>
        <Text as={'p'}>{oldCompanyDescription.productsDescription}</Text>
        <Text as={'p'} className={cls.lastText}>
          {oldCompanyDescription.topGadgets.beforeBrands}
          <span>{oldCompanyDescription.topGadgets.brands}</span>
          {oldCompanyDescription.topGadgets.afterBrands}
          {oldCompanyDescription.topGadgets.secondLine}
        </Text>
      </div>
      <Picture png={OriginalPNG} webp={OriginalWEBP} alt={'image with text original'} className={cls.originalImage}/>
    </div>
  )
})