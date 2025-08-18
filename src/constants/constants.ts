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

export enum PositionType {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

interface IMarketingCards {
  id: number
  text: string
  imagePNG: StaticImageData
  imageWEBP: StaticImageData
  imagePosition: PositionType
}

export const marketingCards: IMarketingCards[] = [
  {
    id: 1,
    text: 'Работаем с 2018 года',
    imagePNG: ManyIphonesPNG,
    imageWEBP: ManyIphonesWEBP,
    imagePosition: PositionType.CENTER,
  },
  {
    id: 2,
    text: 'Прямые поставки с\nаукционов США/ЕС ОАЭ',
    imagePNG: PhoneBoxPNG,
    imageWEBP: PhoneBoxWEBP,
    imagePosition: PositionType.RIGHT,
  },
  {
    id: 3,
    text: 'Только оригинальная\nтехника',
    imagePNG: IphonePNG,
    imageWEBP: IphoneWEBP,
    imagePosition: PositionType.RIGHT,
  },
  {
    id: 4,
    text: 'Гарантия до 12 мес',
    imagePNG: ActionCameraPNG,
    imageWEBP: ActionCameraWEBP,
    imagePosition: PositionType.RIGHT,
  },
  {
    id: 5,
    text: 'Самовывоз в\nцентре Минска',
    imagePNG: HeadphonesPNG,
    imageWEBP: HeadphonesWEBP,
    imagePosition: PositionType.RIGHT,
  },
  {
    id: 6,
    text: 'Доставка по всей\nБеларуси ',
    imagePNG: ManyIphonesPNG,
    imageWEBP: ManyIphonesWEBP,
    imagePosition: PositionType.LEFT,
  },
]