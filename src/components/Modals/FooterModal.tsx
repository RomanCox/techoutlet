import { memo } from 'react'

import { classNames, Mods } from '@/helpers'

import { Text } from '@/components/shared/Text/Text'
import { FooterModalsProps } from '@/components/ModalProvider/ModalProvider'
import { TradeIn } from '@/components/shared/Icon/TradeIn/TradeIn'
import { Confirm } from '@/components/shared/Icon/Confirm/Confirm'
import { Guarantee } from '@/components/shared/Icon/Guarantee/Guarantee'
import { Delivery } from '@/components/shared/Icon/Delivery/Delivery';
import { Map } from '@/components/shared/Icon/Map/Map'
import { Location } from '@/components/shared/Icon/Location/Location'
import { Info } from '@/components/shared/Icon/Info/Info'

import { MODAL } from '@/constants/modal'
import { footerData } from '@/constants'
import cls from './FooterModal.module.scss'

export const FooterModal = memo(({ id }: FooterModalsProps) => {
  const item = footerData.services.servicesList.find(({id: serviceId} ) => serviceId === id)

  if (!item) return null

  const iconContainerMods: Mods = {
    [cls.iconContainer_tradeIn]: id === MODAL.TRADE_IN,
    [cls.iconContainer_delivery]: id === MODAL.DELIVERY_PAYING,
  }

  const iconMods: Mods = {
    [cls.icon_location]: id === MODAL.MAP,
  }

  const icon = (id: string) => {
    switch (id) {
      case (MODAL.TRADE_IN):
        return <TradeIn />
      case (MODAL.GUARANTEE):
        return <Guarantee />
      case (MODAL.DELIVERY_PAYING):
        return <Delivery />
      case (MODAL.MAP):
        return <Map />
      case (MODAL.ABOUT):
        return <Info />
      default:
        return null
    }
  }

  const smallIcon = (id: string) => {
    switch (id) {
      case (MODAL.TRADE_IN):
      case (MODAL.GUARANTEE):
        return <Confirm />
      case (MODAL.DELIVERY_PAYING):
        return '$'
      case (MODAL.MAP):
        return <Location />
      case (MODAL.ABOUT):
        return 'i'
      default:
        return null
    }
  }

  return (
    <div className={cls.footerModal}>
      <Text as="h4">{item.label}</Text>
      <Text>
        {item.text}
        {item.url && <a href={item.url.link}>{item.url.label}</a>}
      </Text>
      <div className={classNames(cls.iconContainer, iconContainerMods, [])}>
        <div className={classNames(cls.smallIcon, iconMods, [])}>
          {smallIcon(id)}
        </div>
        {icon(id)}
      </div>
    </div>
  )
})