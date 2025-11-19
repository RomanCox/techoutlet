import {
  memo,
	ComponentPropsWithRef,
	ElementType,
	ForwardedRef,
	ComponentRef,
	ReactElement,
	forwardRef,
} from 'react'
import {classNames, Mods} from '@/helpers'

import cls from './Button.module.scss'

export enum ButtonTheme {
  MAIN = 'main',
  CLEAR = 'clear',
}

type PolymorphicRef<T extends ElementType> = ComponentRef<T>

export type ButtonOwnProps<T extends ElementType = 'button'> = {
	as?: T,
  theme?: ButtonTheme,
	className?: string,
}

type ButtonProps<T extends ElementType = 'button'> =
	ButtonOwnProps<T> &
	Omit<ComponentPropsWithRef<T>, keyof ButtonOwnProps<T>>

const ButtonInner = (
	{ as, className, theme = ButtonTheme.MAIN, ...rest }: ButtonProps<any>,
	ref: ForwardedRef<PolymorphicRef<any>>
) => {
	const Component = (as || 'button') as ElementType

  const btnMods: Mods = {
    [cls[theme]]: true,
  }

	return (
		<Component
			ref={ref}
			className={classNames(cls.button, btnMods, [className])}
			{...rest}
		/>
	)
}


export const Button = memo(forwardRef(ButtonInner) as
	<T extends ElementType = 'button'>(
		props: ButtonProps<T> & { ref?: ForwardedRef<PolymorphicRef<T>> }
	) => ReactElement | null)