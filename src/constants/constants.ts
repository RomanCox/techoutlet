import { StaticImageData } from 'next/image'

import ManyIphonesPNG from '@/assets/images/devices/many_iphones.png'
import ManyIphonesWEBP from '@/assets/images/devices/many_iphones.webp'
import PhoneBoxPNG from '@/assets/images/devices/phone_box.png'
import PhoneBoxWEBP from '@/assets/images/devices/phone_box.webp'
import IphonesPNG from '@/assets/images/devices/2-iphones-reverse.png'
import IphonesWEBP from '@/assets/images/devices/2-iphones-reverse.webp'
import ActionCameraPNG from '@/assets/images/devices/action_camera.png'
import ActionCameraWEBP from '@/assets/images/devices/action_camera.webp'
import HeadphonesPNG from '@/assets/images/devices/headphones.png'
import HeadphonesWEBP from '@/assets/images/devices/headphones.webp'
import NoteBookTransformerPNG from '@/assets/images/devices/notebook_transformer.png'
import NoteBookTransformerWEBP from '@/assets/images/devices/notebook_transformer.webp'

export const companyDescription: string[] = [
  'Витринные (товары с витрин магазинов)',
  'Выставочные (товары после выставки)',
  'Trade in (б/у товары по системе обмена старого на новый)',
  'Open Box (новые товары в открытых или поврежденных коробках)',
]

interface IMarketingCards {
  id: number
  text: string
  imagePNG: StaticImageData
  imageWEBP: StaticImageData
}

export const marketingCards: IMarketingCards[] = [
  {
    id: 1,
    text: 'Работаем с 2018 года',
    imagePNG: ManyIphonesPNG,
    imageWEBP: ManyIphonesWEBP,
  },
  {
    id: 2,
    text: 'Доставка по всей\nБеларуси ',
    imagePNG: PhoneBoxPNG,
    imageWEBP: PhoneBoxWEBP,
  },
  {
    id: 3,
    text: 'Гарантия до 12 месяцев',
    imagePNG: ActionCameraPNG,
    imageWEBP: ActionCameraWEBP,
  },
  {
    id: 4,
    text: 'Только оригинальная\nтехника',
    imagePNG: IphonesPNG,
    imageWEBP: IphonesWEBP,
  },
  {
    id: 5,
    text: 'Самовывоз в центре Минска',
    imagePNG: HeadphonesPNG,
    imageWEBP: HeadphonesWEBP,
  },
  {
    id: 6,
    text: 'Любые формы\nоплаты',
    imagePNG: NoteBookTransformerPNG,
    imageWEBP: NoteBookTransformerWEBP,
  },
]

export const directions = [
  'Товары из США с\nзакрытых аукционов электроники',
  'Товары из Европы с\nсудебных складов и аукционов',
  'Товары из Dubai с\nоптовых складов в Deira',
] as const

export const typeOfGoods = [
  'Телефоны',
  'Ноутбуки',
  'Игровые консоли',
  'Планшеты',
  'Смарт часы',
  'Камеры',
  'Наушники',
  'Инструменты',
  'Кофемашины',
  'Wi-Fi системы',
] as const

export const catalog = [
  'iPhone',
  'iPad',
  'MacBook',
  'Apple Watch',
  'Mac',
  'Аксессуары',
  'DJI',
  'Sony',
  'Samsung',
  'Ноутбуки',
  'Периферия',
] as const

type FooterSection = 'Каталог техники' | 'Магазин' | 'Контакты' | 'Logo'


