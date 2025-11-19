import { StaticImageData } from 'next/image'
import {MODAL} from "@/constants/modal";

export interface IMarketingCards {
  id: number
  text: string
  imagePNG: StaticImageData
  imageWEBP: StaticImageData
}

export interface IDirection {
  title: string,
  imagePNG: StaticImageData,
  imageWEBP: StaticImageData,
  alt: string,
}

export interface IBrand {
  id: number,
  iconName: string,
  alt: string,
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
    text: string
    link: string
  }
  telegram: {
    text: string
    postText: string
  }
}

export interface FooterServiceType {
  id: MODAL
  label: string
  text: string
  link?: {
    url: string
    text: string
  }
}

export interface FooterServicesType {
  label: FooterSection
  servicesList: FooterServiceType[]
}

export interface FooterType {
  shop: FooterShopType
  contacts: FooterContactType
  services: FooterServicesType
}