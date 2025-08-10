import { StaticImageData } from 'next/image'

import { classNames } from '@/helpers/classNames'

import cls from './Picture.module.scss'

type ImgLike = string | StaticImageData

interface BaseProps {
	webp?: ImgLike
	avif?: ImgLike
	alt: string
	className?: string
	loading?: 'lazy' | 'eager'
	decoding?: 'auto' | 'sync' | 'async'
	fetchPriority?: 'high' | 'low' | 'auto'
	width?: number
	height?: number
	sizes?: string
	isCover?: boolean
}

type WithJpg = BaseProps & { jpg: ImgLike; png?: ImgLike }
type WithPng = BaseProps & { png: ImgLike; jpg?: ImgLike }

export type PictureProps = WithJpg | WithPng

const toSrc = (v: ImgLike) => (typeof v === 'string' ? v : v.src)

export const Picture = (props: PictureProps) => {
	const {
		jpg,
		png,
		webp,
		avif,
		alt,
		className,
		loading = 'lazy',
		decoding = 'auto',
		fetchPriority = 'auto',
		width,
		height,
		sizes,
		isCover,
	} = props as PictureProps

    // Фолбэк — отдаем предпочтение PNG, если он есть (прозрачность), иначе JPG
	const fallback: ImgLike | undefined = png ?? jpg
	if (!fallback) {
		if (process.env.NODE_ENV !== 'production') {
			console.error('Picture: pass at least jpg or png as fallback', props)
		}
		return null
	}

  // width/height: если не переданы руками — попробуем взять из StaticImageData фолбэка
	const dim =
		width && height
			? { width, height }
			: {};

  return (
		<div className={classNames(cls.picture, {}, [className])}>
			<picture>
				{avif && (
					<source srcSet={toSrc(avif)} type="image/avif" sizes={sizes} />
				)}
				{webp && (
					<source srcSet={toSrc(webp)} type="image/webp" sizes={sizes} />
				)}
				<img
					src={toSrc(fallback)}
					alt={alt}
					loading={loading}
					decoding={decoding}
					fetchPriority={fetchPriority}
					{...dim}
					sizes={sizes}
				/>
			</picture>
		</div>
  )
}