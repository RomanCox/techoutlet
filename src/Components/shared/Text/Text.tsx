import {
  memo,
  forwardRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  ComponentPropsWithoutRef,
  ComponentRef,
  createElement,
} from 'react'

import { classNames, Mods } from "@/helpers/classNames"

import cls from './Text.module.scss'

type PolymorphicRef<T extends ElementType> = ComponentRef<T>

type TextPropsType<T extends ElementType> = {
  as?: T
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>

const TypographyPolymorph = <T extends ElementType = 'p'>(
  props: TextPropsType<T>,
  ref: ForwardedRef<PolymorphicRef<T>>
) => {
  const { as = 'p', className, children, ...rest } = props

  return createElement(
    as,
    { ref, className: classNames(cls.text, {}, [className]), ...rest },
    children
  )
}

const _Text = forwardRef(
  TypographyPolymorph as unknown as (
    props: TextPropsType<any> & { ref?: ForwardedRef<any> }
  ) => ReturnType<typeof TypographyPolymorph>
)

export const Text = _Text as <T extends ElementType = 'p'>(
  props: TextPropsType<T> & { ref?: ForwardedRef<PolymorphicRef<T>> }
) => ReturnType<typeof TypographyPolymorph>