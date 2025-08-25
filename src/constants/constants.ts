import { StaticImageData } from 'next/image'

import ManyIphonesPNG from '@/assets/images/devices/many_iphones.png'
import ManyIphonesWEBP from '@/assets/images/devices/many_iphones.webp'
import PhoneBoxPNG from '@/assets/images/devices/phone_box.png'
import PhoneBoxWEBP from '@/assets/images/devices/phone_box.webp'
import IphonePNG from '@/assets/images/devices/iphone.png'
import IphoneWEBP from '@/assets/images/devices/iphone.webp'
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

export enum ImagePositionType {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

export enum CardPositionType {
  TOP = 'top',
  BOTTOM = 'bottom',
}

interface IMarketingCards {
  id: number
  text: string
  imagePNG: StaticImageData
  imageWEBP: StaticImageData
  imagePosition: ImagePositionType
  cardPosition: CardPositionType
}

export const marketingCards: IMarketingCards[] = [
  {
    id: 1,
    text: 'Работаем с 2018 года',
    imagePNG: ManyIphonesPNG,
    imageWEBP: ManyIphonesWEBP,
    imagePosition: ImagePositionType.CENTER,
    cardPosition: CardPositionType.TOP,
  },
  {
    id: 2,
    text: 'Прямые поставки с\nаукционов США/ЕС ОАЭ',
    imagePNG: PhoneBoxPNG,
    imageWEBP: PhoneBoxWEBP,
    imagePosition: ImagePositionType.RIGHT,
    cardPosition: CardPositionType.TOP,
  },
  {
    id: 3,
    text: 'Только оригинальная\nтехника',
    imagePNG: IphonePNG,
    imageWEBP: IphoneWEBP,
    imagePosition: ImagePositionType.RIGHT,
    cardPosition: CardPositionType.TOP,
  },
  {
    id: 4,
    text: 'Гарантия до 12 мес',
    imagePNG: ActionCameraPNG,
    imageWEBP: ActionCameraWEBP,
    imagePosition: ImagePositionType.RIGHT,
    cardPosition: CardPositionType.BOTTOM,
  },
  {
    id: 5,
    text: 'Самовывоз в\nцентре Минска',
    imagePNG: HeadphonesPNG,
    imageWEBP: HeadphonesWEBP,
    imagePosition: ImagePositionType.RIGHT,
    cardPosition: CardPositionType.BOTTOM,
  },
  {
    id: 6,
    text: 'Доставка по всей\nБеларуси ',
    imagePNG: NoteBookTransformerPNG,
    imageWEBP: NoteBookTransformerWEBP,
    imagePosition: ImagePositionType.LEFT,
    cardPosition: CardPositionType.BOTTOM,
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


