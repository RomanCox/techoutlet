import { StaticImageData } from 'next/image'
import { MODAL } from '@/constants/modal'

export interface IHeaderDataType {
  phoneNumber: {
    label: string
    link: string
  }
  telegramLink: string
}

export interface IHeroSlide {
  label: string
  labelMobile: string
  brands: string
  brandsMobile: string
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
  subTitle: string
  variants: string[]
  productsDescription: string
  topGadgets: ITopGadgetsText
}

export interface IMarketingCards {
  id: number
  text: string
  imagePNG: StaticImageData
  imageWEBP: StaticImageData
}

export interface IDirection {
  title: string
  imagePNG: StaticImageData
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
  address: {
    text: string
    postText: string
  }
  workingTime: {
    text: string
    postText: string
  }
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
  copyright: string
  text: string
}

export interface IFooterDataType {
  shop: FooterShopType
  contacts: FooterContactType
  services: FooterServicesType
  siteInfo: FooterSiteInfoType
}