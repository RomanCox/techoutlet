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
        <Text as={'h2'} className={cls.title}><span>TechOutlet</span> - надёжный поставщик уценённой техники с 2018 года</Text>
        <Text as={'p'}>Наша компания  занимается продажей уценённой техники из США и Европы различных категорий:</Text>
        <ul className={cls.list}>
          {companyDescription.map(item => {
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
        <Text as={'p'}>Все товары 100% оригинальные, никаких копий, подделок и фейков.
        </Text>
        <Text as={'p'} className={cls.lastText}>
          <>
            Только топовые гаджеты {' '}
            <span>Apple, Microsoft, DJI, Sony, Google</span> и.т.д.
            <br />
            Отличная возможность сэкономить до 50% от цены нового!
          </>
        </Text>
      </div>
      <Picture png={OriginalPNG} webp={OriginalWEBP} alt={'image with text original'} className={cls.originalImage}/>
    </div>
  )
})