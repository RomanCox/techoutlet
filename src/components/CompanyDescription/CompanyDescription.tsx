import { memo } from 'react'

import { Text } from '@/components/shared/Text/Text'
import { Picture } from '@/components/shared/Picture/Picture'
import OriginalPNG from '@/assets/images/other/original.png'
import OriginalWEBP from '@/assets/images/other/original.webp'

import { companyDescription } from '@/constants'

import cls from './CompanyDescription.module.scss'


export const CompanyDescription = memo(() => {
  return (
    <div className={cls.companyDescriptionContainer}>
      <div className={cls.textContainer}>
        <Text as={'h2'} className={cls.title}><span>{companyDescription.highlightTitle}</span>{companyDescription.restTitle}</Text>
        <Text as={'p'}>{companyDescription.subTitle}</Text>
        <ul className={cls.list}>
          {companyDescription.variants.map(item => {
            const [title, rest] = item.split(' (');
            return (
              <li key={item} className={cls.listItem}>
                <div className={cls.listMarker} />
                <Text className={cls.strongText}>{title}</Text>
                {rest && <Text className={cls.text}>{` (${rest}`}</Text>}
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