import { StaticImageData } from 'next/image'
import { MODAL } from '@/constants/modal'

export interface IHeaderDataType {
  phoneNumber: {
    label: string
    link: string
  }
  telegramLink: string
}

export interface IMounted {
  mounted?: boolean
}

export interface IHeroSlide {
  label: string
  labelMobile: string
  brands: string
  brandsMobile: string
}

export type ImageKey = 'notebook' | 'camera' | 'iphones' | 'headphones' | 'actionCamera'

export interface ItemImage {
  id: number,
  name: ImageKey,
  PNG: StaticImageData,
  WEBP: StaticImageData,
  alt: string,
}

export interface ITopGadgetsText {
  beforeBrands: string
  brands: string
  afterBrands: string
  secondLine: string
}

export interface ICompanyDescription {
  highlightTitle: string
  restTitle: string
  restTitleBigTablet: string
  restTitleSmallTablet: string
  restTitleMobile: string
  subTitle: string
  variants: string[]
  productsDescription: string
  topGadgets: ITopGadgetsText
}

export interface IMarketingCards {
  id: number
  mobileId: number
  text: string
  backgroundType: "dark" | "light"
  icon: string
}

export interface IDirection {
  title: string
  imageJPG: StaticImageData
  imageWEBP: StaticImageData
  alt: string
}

export interface IBrand {
  id: number
  iconName: string
  alt: string
}

export type FooterSection = 'Магазин' | 'Контакты' | 'Услуги' | 'Logo'

export interface FooterShopType {
  label: FooterSection
  address: string
  workingTime: string
}

export interface FooterContactType {
  label: FooterSection
  phoneNumber: {
    label: string
    link: string
  }
  telegram: {
    link: string
    postText: string
  }
  personalData: {
    id: MODAL
    label: string
  }
}

export interface FooterServiceType {
  id: MODAL
  label: string
  text: string
  url?: {
    link: string
    label: string
  }
}

export interface FooterServicesType {
  label: FooterSection
  servicesList: FooterServiceType[]
}

export interface FooterSiteInfoType {
  socialsLabel: string
  socials: { iconName: string, link: string }[]
  reviewsLabel: string
  reviews: { iconName: string, link: string }[]
  kufarLabel: string
  kufarLink: string
}

export interface FooterCopyrightType {
  label: string
  text: string
}

export interface IFooterDataType {
  shop: FooterShopType
  contacts: FooterContactType
  services: FooterServicesType
  siteInfo: FooterSiteInfoType
  copyright: FooterCopyrightType
}

type TableColumns = "Право" | "Последствия"

interface IRow {
  title: string
  cells: Record<TableColumns, string>
}

export interface IITem {
  number: string
  title: string
  text?: string
  items?: IITem[]
  list?: string[]
  afterText?: string[]
  table?: {
    columns: TableColumns[]
    rows: IRow[]
  }
}

interface ISection {
  title: string
  text?: string
  items?: IITem[]
}

export interface IPersonalData {
  title: string,
  updatedAt: string,
  sections: ISection[]
}