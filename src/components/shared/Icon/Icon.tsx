"use client"

import { memo, SVGProps } from 'react'
import { iconComponents } from './map'

interface IIcon extends SVGProps<SVGSVGElement> {
  name?: string
  alt?: string
}

export const Icon = memo(({ name, alt, ...props }: IIcon) => {
  if (!name) return null;

  const Component = iconComponents[name]

  if (!Component) return null;

  return (
    <Component
      aria-label={alt}
      {...props}
    />
  )
})