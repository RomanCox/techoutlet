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
import USAFlagPNG from '@/assets/images/flags/usa-flag.png'
import USAFlagWEBP from '@/assets/images/flags/usa-flag.webp'
import EuropeFlagPNG from '@/assets/images/flags/europe-flag.png'
import EuropeFlagWEBP from '@/assets/images/flags/europe-flag.webp'
import UAEFlagPNG from '@/assets/images/flags/uae-flag.png'
import UAEFlagWEBP from '@/assets/images/flags/uae-flag.webp'
import ApplePNG from '@/assets/images/brands/apple.png'
import AppleWEBP from '@/assets/images/brands/apple.webp'
import GooglePNG from '@/assets/images/brands/google.png'
import GoogleWEBP from '@/assets/images/brands/google.webp'
import BosePNG from '@/assets/images/brands/bose.png'
import BoseWEBP from '@/assets/images/brands/bose.webp'
import XBoxPNG from '@/assets/images/brands/xbox.png'
import XBoxWEBP from '@/assets/images/brands/xbox.webp'
import JblPNG from '@/assets/images/brands/jbl.png'
import JblWEBP from '@/assets/images/brands/jbl.webp'
import PixelPNG from '@/assets/images/brands/pixel.png'
import PixelWEBP from '@/assets/images/brands/pixel.webp'
import DysonPNG from '@/assets/images/brands/dyson.png'
import DysonWEBP from '@/assets/images/brands/dyson.webp'
import GarminPNG from '@/assets/images/brands/garmin.png'
import GarminWEBP from '@/assets/images/brands/google.webp'
import MicrosoftPNG from '@/assets/images/brands/microsoft.png'
import MicrosoftWEBP from '@/assets/images/brands/microsoft.webp'
import NintendoPNG from '@/assets/images/brands/nintendo.png'
import NintendoWEBP from '@/assets/images/brands/nintendo.webp'
import SamsungPNG from '@/assets/images/brands/samsung.png'
import SamsungWEBP from '@/assets/images/brands/samsung.webp'
import SonyPNG from '@/assets/images/brands/sony.png'
import SonyWEBP from '@/assets/images/brands/sony.webp'

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
  {
    title: 'Товары из США с\nзакрытых аукционов электроники',
    imagePNG: USAFlagPNG,
    imageWEBP: USAFlagWEBP,
    alt: 'USA Flag',
  },
  {
    title: 'Товары из Европы с\nсудебных складов и аукционов',
    imagePNG: EuropeFlagPNG,
    imageWEBP: EuropeFlagWEBP,
    alt: 'Europe Flag',
  },
  {
    title: 'Товары из Dubai с\nоптовых складов в Deira',
    imagePNG: UAEFlagPNG,
    imageWEBP: UAEFlagWEBP,
    alt: 'UAE Flag',
  },
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

export const brands = [
  {
    id: 0,
    imagePNG: ApplePNG,
    imageWEBP: AppleWEBP,
    alt: ''
  },
  {
    id: 1,
    imagePNG: GooglePNG,
    imageWEBP: GoogleWEBP,
    alt: ''
  },
  {
    id: 2,
    imagePNG: BosePNG,
    imageWEBP: BoseWEBP,
    alt: ''
  },
  {
    id: 3,
    imagePNG: XBoxPNG,
    imageWEBP: XBoxWEBP,
    alt: ''
  },
  {
    id: 4,
    imagePNG: JblPNG,
    imageWEBP: JblWEBP,
    alt: ''
  },
  {
    id: 5,
    imagePNG: PixelPNG,
    imageWEBP: PixelWEBP,
    alt: ''
  },
  {
    id: 6,
    imagePNG: DysonPNG,
    imageWEBP: DysonWEBP,
    alt: ''
  },
  {
    id: 7,
    imagePNG: GarminPNG,
    imageWEBP: GarminWEBP,
    alt: ''
  },
  {
    id: 8,
    imagePNG: MicrosoftPNG,
    imageWEBP: MicrosoftWEBP,
    alt: ''
  },
  {
    id: 9,
    imagePNG: NintendoPNG,
    imageWEBP: NintendoWEBP,
    alt: ''
  },
  {
    id: 10,
    imagePNG: SamsungPNG,
    imageWEBP: SamsungWEBP,
    alt: ''
  },
  {
    id: 11,
    imagePNG: SonyPNG,
    imageWEBP: SonyWEBP,
    alt: ''
  },
]


