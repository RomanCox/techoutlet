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
import USAFlagJPG from '@/assets/images/flags/usa.jpg'
import USAFlagWEBP from '@/assets/images/flags/usa.webp'
import EuropeFlagJPG from '@/assets/images/flags/eu.jpg'
import EuropeFlagWEBP from '@/assets/images/flags/eu.webp'
import UAEFlagJPG from '@/assets/images/flags/uae.jpg'
import UAEFlagWEBP from '@/assets/images/flags/uae.webp'
import {
  IHeaderDataType,
  IHeroSlide,
  IFooterDataType,
  IBrand,
  IDirection,
  IMarketingCards,
  ICompanyDescription
} from '@/constants'
import { MODAL } from '@/constants/modal'

export const headerData: IHeaderDataType = {
  phoneNumber: {
    label: '+375 29 6663083',
    link: 'tel:+375296663083',
  },
  telegramLink: 'https://t.me/techoutlet',
}

export const heroSlide: IHeroSlide = {
  label: 'Оригинальная техника из\nСША, Европы и ОАЭ',
  labelMobile: 'Оригинальная\nтехника из США,\nЕвропы и ОАЭ',
  brands: 'APPLE, DJI, MICROSOFT, SONY, GOPRO и другие.\nДо 50% дешевле.',
  brandsMobile: 'APPLE, DJI, MICROSOFT,\nSONY, GOPRO и другие.\nДо 50% дешевле.',
}

export const companyDescription: ICompanyDescription = {
  highlightTitle: 'TechOutlet',
  restTitle: ' - надёжный поставщик уценённой техники с 2018 года',
  subTitle: 'Наша компания  занимается продажей уценённой техники из США и Европы различных категорий:',
  variants: [
    'Витринные (товары с витрин магазинов)',
    'Выставочные (товары после выставки)',
    'Trade in (б/у товары по системе обмена старого на новый)',
    'Open Box (новые товары в открытых или поврежденных коробках)',
  ],
  productsDescription: 'Все товары 100% оригинальные, никаких копий, подделок и фейков.',
  topGadgets: {
    beforeBrands: 'Только топовые гаджеты ',
    brands: 'Apple, Microsoft, DJI, Sony, Google',
    afterBrands: ' и.т.д.',
    secondLine: '\nОтличная возможность сэкономить до 50% от цены нового!',
  }
}

export const marketingCards: IMarketingCards[] = [
  {
    id: 1,
    mobileId: 1,
    text: 'Работаем с 2018 года',
    imagePNG: ManyIphonesPNG,
    imageWEBP: ManyIphonesWEBP,
  },
  {
    id: 2,
    mobileId: 3,
    text: 'Доставка по всей Беларуси ',
    imagePNG: PhoneBoxPNG,
    imageWEBP: PhoneBoxWEBP,
  },
  {
    id: 3,
    mobileId: 4,
    text: 'Гарантия до 12 месяцев',
    imagePNG: ActionCameraPNG,
    imageWEBP: ActionCameraWEBP,
  },
  {
    id: 4,
    mobileId: 3,
    text: 'Только оригинальная техника',
    imagePNG: IphonesPNG,
    imageWEBP: IphonesWEBP,
  },
  {
    id: 5,
    mobileId: 5,
    text: 'Самовывоз в центре Минска',
    imagePNG: HeadphonesPNG,
    imageWEBP: HeadphonesWEBP,
  },
  {
    id: 6,
    mobileId: 6,
    text: 'Любые формы\nоплаты',
    imagePNG: NoteBookTransformerPNG,
    imageWEBP: NoteBookTransformerWEBP,
  },
]

export const directions: IDirection[] = [
  {
    title: 'Товары из США с\nзакрытых аукционов электроники',
    // imagePNG: USAFlagPNG,
    imageJPG: USAFlagJPG,
    imageWEBP: USAFlagWEBP,
    alt: 'USA Flag',
  },
  {
    title: 'Товары из Европы с\nсудебных складов и аукционов',
    // imagePNG: EuropeFlagPNG,
    imageJPG: EuropeFlagJPG,
    imageWEBP: EuropeFlagWEBP,
    alt: 'Europe Flag',
  },
  {
    title: 'Товары из Dubai с\nоптовых складов в Deira',
    // imagePNG: UAEFlagPNG,
    imageJPG: UAEFlagJPG,
    imageWEBP: UAEFlagWEBP,
    alt: 'UAE Flag',
  },
] as const

export const typeOfGoods: string[] = [
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

export const brands: IBrand[] = [
  {
    id: 0,
    iconName: 'apple',
    alt: 'apple icon'
  },
  {
    id: 1,
    iconName: 'google',
    alt: 'google icon'
  },
  {
    id: 2,
    iconName: 'bose',
    alt: 'bose icon'
  },
  {
    id: 3,
    iconName: 'xbox',
    alt: 'xbox icon'
  },
  {
    id: 4,
    iconName: 'jbl',
    alt: 'jbl icon'
  },
  {
    id: 5,
    iconName: 'pixel',
    alt: 'pixel icon'
  },
  {
    id: 6,
    iconName: 'dyson',
    alt: 'dyson icon'
  },
  {
    id: 7,
    iconName: 'garmin',
    alt: 'garmin icon'
  },
  {
    id: 8,
    iconName: 'microsoft',
    alt: 'microsoft icon'
  },
  {
    id: 9,
    iconName: 'nintendo',
    alt: 'nintendo icon'
  },
  {
    id: 10,
    iconName: 'samsung',
    alt: 'samsung icon'
  },
  {
    id: 11,
    iconName: 'sony',
    alt: 'sony icon'
  },
]

export const footerData: IFooterDataType = {
  shop: {
    label: 'Магазин',
    address: {
      text: 'г. Минск\nул. Хоружей д.32а/4, оф.12',
      postText: 'магазин',
    },
    workingTime: {
      text: 'Время работы:\n10:00 — 21:00',
      postText: 'ежедневно',
    },
  },
  contacts: {
    label: 'Контакты',
    phoneNumber: {
      label: '+375 29 6663083',
      link: 'tel:+375296663083',
    },
    telegram: {
      link: 'https://t.me/techoutlet_by',
      postText: 'Telegram',
    },
  },
  services: {
    label: 'Услуги',
    servicesList: [
      {
        id: MODAL.TRADE_IN,
        label: 'Трейд-ин',
        text: 'Trade-in — программа обмена старых устройств на скидку при покупке нового. При сдаче устройства в Trade-in, оно оценивается исходя из актуальности модели, его технического и внешнего состояния. Сумма, на которую было оценено устройство, предоставляется пользователю в качестве скидки на приобретение нового.\n\nПроще говоря, Вы приносите свой старый телефон нам при самовывозе, сдаете его и тут же получаете скидку на покупку нового устройства!\n\nКакими преимуществами обладает Trade-in?\n\n– Вам не нужно тратить время на создание объявлений и продажу телефона. Мы просто заберем его у вас :)\n\n– Наша компания берет на себя все риски, связанные с продажей Вашего старого устройства. У вас нет повода для беспокойства;\n\n– Вы получаете дополнительную скидку на покупку нового устройства.\n\nМожно ли сдать в Trade-in более одного устройства?\nДа, конечно. Вы можете принести нам хоть целый мешок телефонов :)\n\nКак узнать размер дополнительной скидки?\nРазмер скидки рассчитывается индивидуально и зависит от приобретаемого устройства. Вы можете позвонить нам для получения более точной информации.\n\nГде можно произвести замену устройства?\nЗамену устройства можно произвести в шоуруме по адресу:  Минск, ул. Хоружей д.32а/4, оф.12, заезд под шлагбаум с улица Хоружей.\n\nКакие устройства принимаются в Trade-in?\nВ настоящий момент мы принимаем в Trade-in технику Apple и отдельные модели смартфонов Samsung Galaxy.\n\nКак воспользоваться услугой Trade-in?\n– Оформите заказ на нашем сайте, в боковом меню выбрав отметку «Trade-in». В комментариях к заказу укажите, какой аппарат хотите сдать по данной программе;\n\n– Приезжайте к нам в пункт самовывоза, захватив с собой устройство, которое хотите обменять.\n\nПринимаем ли мы в Trade-in заблокированные на Apple ID телефоны?\nУвы, нет. Если Вы нашли телефон на улице – проявите сознательность и лучше отнесите его в полицию. А если вы забыли свой Apple ID, то попробуйте обратиться в техподдержку Apple.\n\nЕсли у Вас остались вопросы, мы с радостью ответим на них по телефону - ',
        url: {
          link: 'tel:+375296663083',
          label: '+375 29 666-30-83'
        },
      },
      {
        id: MODAL.GUARANTEE,
        label: 'Гарантия',
        text: 'Гарантийное обслуживание — это бесплатный ремонт или замена устройства в течение всего гарантийного срока, при соблюдении условий гарантии.\n\nМы предоставляем гарантию на устройства до 12 месяцев.\nСрок предоставляемой гарантии на конкретное устройство уточняйте у менеджера.\n\nГарантийное обслуживание не осуществляется в следующих случаях:\n1. Наличие исправлений в гарантийном документе, повреждений или следов переклеивания гарантийных наклеек, несоответствие серийного номера изделия номеру в талоне.\n2. Наличие механических, электрических и термических повреждений, возникших в результате нарушения правил эксплуатации или транспортировки изделия, следов самостоятельного ремонта или ремонта в неуполномоченном сервисном центре.\n3. Использование зарядных устройств, а также питающих, телекоммуникационных и кабельных сетей с параметрами, не соответствующими ТУ и ГОСТ, действующими в Республике Беларусь.\n4. Невозможность считывания IMEI или серийного номера изделия.\n5. Повреждение, вызванное попаданием внутрь изделия посторонних предметов, загрязнений, веществ, жидкостей.\n6. В иных случая нарушения Покупателем установленных правил эксплуатации изделий, действие третьих лиц и непреодолимой силы.\n7. Eсли дефект (недостаток) возник вследствие естественного износа при эксплуатации изделия. При этом под естественным износом понимаются последствия эксплуатации изделия, вызвавшие ухудшение их технического состояния, изменение физических свойств материалов использованных при изготовлении, а также внешнего вида изделия из-за длительного использования данного изделия.\n\nГарантия не распространяется:\n1. На ущерб, причиненный другому оборудованию, работающему в сопряжении с данным изделием.\n2. На совместимость данного изделия с изделиями и программными продуктами третьих сторон в части их совместимости и конфигурирования систем.\n3. На установленное и предустановленное программное обеспечение, некорректное обновление, воздействие вредоносных программ (вирусов).',
      },
      {
        id: MODAL.DELIVERY_PAYING,
        label: 'Доставка и оплата',
        text: 'Оплата\n\nНаличный расчет\nОплата осуществляется наличными денежными средствами при доставке товара курьером или в физическом магазине.\n\nОплата банковской картой\nОплата осуществляется банковской картой при доставке товара курьером или в физическом магазине посредством терминала.\n\nБанковской карточкой через интернет\nОплата осуществляется онлайн после оформления заказа на сайте с использованием банковских карт VISA, VISA Electron, Mir, Mir, БЕЛКАРТ.\n\nКарты рассрочек\n«Халва» на 2 месяца\n«Карта покупок» на 3 месяца\n«КартаFUN» на 6 месяца\n«Черепаха» на 8 месяцев\n\n*Все цены указаны со скидкой за наличный расчет, при оплате картами рассрочек или покупке в кредит скидка не распространяется, цену уточняйте у менеджера.\n\nДоставка\nКурьерской службой по Беларуси\nКурьер выполняет только доставку до подъезда.\nСтоимость: от 20р\nСроки доставки: 2-3 дня после оформления заказа.\n\nСамовывоз из ПВЗ Европочты\nВы можете забрать товар в одном из ПВЗ Европочты по всей Беларуси.\nСтоимость: 3% наложенный платеж, 5р доставка.\nСроки доставки: 2-3 дня после оформления заказа.\n\nСамовывоз из магазина\nВы можете оформить самовывоз и забрать товар в одном из наших магазинов.',
      },
      {
        id: MODAL.MAP,
        label: 'Схема проезда',
        text: '',
      },
      {
        id: MODAL.ABOUT,
        label: 'О нас',
        text: 'TechOutlet – это первый фирменный магазин уценённых устройств в Беларуси.\n\nРеквизиты\nООО "Техно онли"\nРБ, 220013, г. Минск, ул. Хоружей д.32а/4, оф.12\nУНП 192952889 ОКПО 500968675000\n\nр/с BY62TECN30128030800000000010\nв ОАО "Технобанк" РКЦ №7 г. Минск, ул. Кульман, 21Б\nBIC TECNBY22',
      },
    ],
  },
  siteInfo: {
    socialsLabel: 'в социальных сетях',
    socials: [ { iconName: 'instagram', link: 'https://www.instagram.com/techoutlet.minsk?igsh=MXUyZ20yeDc3bmc0bQ==' }, { iconName: 'telegram', link: 'https://t.me/techoutlet' } ],
    copyright: `© TechOutlet ${new Date().getFullYear()}`,
    text: 'Сайт носит сугубо информационный характер и\nне является публичной офертой, '
  }
}