import { memo } from 'react'

import { Text } from '@/components/shared/Text/Text'

import { companyDescription } from '@/constants'

import cls from './CompanyDescription.module.scss'

export const CompanyDescription = memo(() => {
  return (
    <div className={cls.companyDescriptionContainer}>
      <Text as={'h2'} className={cls.title}><span>TechOutlet</span> - надёжный поставщик уценённой техники с 2018 года</Text>
      <Text as={'p'} className={cls.listTitle}>Наша компания  занимается продажей уценённой техники из США и Европы различных категорий:</Text>
      <ul className={cls.list}>
        {companyDescription.map(item =>
          <li key={item} className={cls.listItem}>
            <div className={cls.listMarker}/>
            {item}
          </li>
        )}
      </ul>
      <Text as={'p'}>Все товары 100% оригинальные, никаких копий, подделок и фейков.
      </Text>
      <Text as={'p'}>Только топовые гаджеты Apple, Microsoft, DJI, Sony, Google и.т.д, Отличная возможность сэкономить до 50% от цены нового! </Text>
    </div>
  )
})