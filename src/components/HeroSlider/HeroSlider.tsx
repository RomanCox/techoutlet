"use client";

import { memo } from 'react'

import { useViewportParallax } from '@/hooks/useViewportParallax'
import { MAX_MOBILE_WIDTH, useWindowSize } from '@/hooks/useWindowSize'

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { Button } from '@/components/shared/Button/Button'
import { TgIcon } from '@/components/shared/Icon/TgIcon/TgIcon'


import NotebookPNG from '@/assets/images/devices/notebook.png'
import NotebookWEBP from '@/assets/images/devices/notebook.webp'
import CameraPNG from '@/assets/images/devices/camera.png'
import CameraWEBP from '@/assets/images/devices/camera.webp'
import IphonesPNG from '@/assets/images/devices/iphones.png'
import IphonesWEBP from '@/assets/images/devices/iphones.webp'
import HeadphonesPNG from '@/assets/images/devices/headphones.png'
import HeadphonesWEBP from '@/assets/images/devices/headphones.webp'
import ActionCameraPNG from '@/assets/images/devices/action_camera.png'
import ActionCameraWEBP from '@/assets/images/devices/action_camera.webp'

import { heroSlide, IMounted } from '@/constants'

import cls from './HeroSlider.module.scss'

export const HeroSlider = memo(({ mounted }: IMounted) => {
  const { width } = useWindowSize()

  const isMobile = mounted ? width <= MAX_MOBILE_WIDTH : false

	const { register } = useViewportParallax(
		{
			notebook: 36,
			camera: 44,
			iphones: 22,
			headphones: 28,
			actionCam: 40,
		},
		{
			maxFraction: 0.9,
			lerp: 0.12,
		}
	)

  return (
    <div className={cls.heroSliderContainer}>
      <div className={cls.slide}>
        <div className={cls.textContainer}>
          <Text as="h1">
						{isMobile  ? heroSlide.labelMobile : heroSlide.label}
          </Text>
					<Text as="p">
						{isMobile  ? heroSlide.brandsMobile : heroSlide.brands}
					</Text>
					<Button
						as="a"
						href="https://t.me/techoutlet"
						target="_blank"
						rel="noopener noreferrer"
						className={cls.catalogButton}
					>
						Каталог
						<TgIcon className={cls.tgIcon}/>
					</Button>
        </div>
				<div className={cls.imagesContainer}>
					<div ref={register("notebook")} className={cls.notebookImage}>
						<Picture png={NotebookPNG} webp={NotebookWEBP} alt="notebook" />
					</div>

					<div ref={register("camera")} className={cls.cameraImage}>
						<Picture png={CameraPNG} webp={CameraWEBP} alt="camera" />
					</div>

					<div ref={register("iphones")} className={cls.iphonesImage}>
						<Picture png={IphonesPNG} webp={IphonesWEBP} alt="iphones" />
					</div>

					<div ref={register("headphones")} className={cls.headphonesImage}>
						<Picture png={HeadphonesPNG} webp={HeadphonesWEBP} alt="headphones" />
					</div>

					<div ref={register("actionCam")} className={cls.actionCameraImage}>
						<Picture png={ActionCameraPNG} webp={ActionCameraWEBP} alt="action camera" />
					</div>
				</div>
      </div>
    </div>
  )
})