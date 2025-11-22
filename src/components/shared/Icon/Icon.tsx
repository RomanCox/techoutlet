"use client"

import { memo } from 'react'
import { classNames } from '@/helpers'
import { iconComponents } from './map'

interface IIcon {
  name?: string
  className?: string
  alt?: string
}

export const Icon = memo(({ name, className, alt }: IIcon) => {
  if (!name) return null;

  const Component = iconComponents[name]

  if (!Component) return null;

  return (
    <Component
      aria-label={alt}
      className={classNames("", {}, [className])}
    />
  )
})