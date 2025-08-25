import {
  memo,
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
	ForwardedRef,
	ComponentRef,
	ReactElement,
	forwardRef,
} from 'react'
import { classNames } from '@/helpers/classNames'

import cls from './Button.module.scss'

type PolymorphicRef<T extends ElementType> = ComponentRef<T>

export type ButtonOwnProps<T extends ElementType = 'button'> = {
	as?: T,
	className?: string,
}

type ButtonProps<T extends ElementType = 'button'> =
	ButtonOwnProps<T> &
	Omit<ComponentPropsWithRef<T>, keyof ButtonOwnProps<T>>

const ButtonInner = (
	{ as, className, ...rest }: ButtonProps<any>,
	ref: ForwardedRef<PolymorphicRef<any>>
) => {
	const Component = (as || 'button') as ElementType
	return (
		<Component
			ref={ref}
			className={classNames(cls.button, {}, [className])}
			{...rest}
		/>
	)
}


export const Button = memo(forwardRef(ButtonInner) as
	<T extends ElementType = 'button'>(
		props: ButtonProps<T> & { ref?: ForwardedRef<PolymorphicRef<T>> }
	) => ReactElement | null)