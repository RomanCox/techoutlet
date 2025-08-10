import { memo, useRef } from "react"

import { useViewportParallax } from "@/hooks/useViewportParallax";

import { Picture } from '@/components/shared/Picture/Picture'
import { Text } from '@/components/shared/Text/Text'
import { Button } from "@/components/shared/Button/Button";
import { TgIcon } from "@/components/shared/Icons/TgIcon";


import notebookPNG from '@/assets/images/devices/notebook.png'
import notebookWEBP from '@/assets/images/devices/notebook.webp'
import cameraPNG from '@/assets/images/devices/camera.png'
import cameraWEBP from '@/assets/images/devices/camera.webp'
import iphonesPNG from '@/assets/images/devices/iphones.png'
import iphonesWEBP from '@/assets/images/devices/iphones.webp'
import headphonesPNG from '@/assets/images/devices/headphones.png'
import headphonesWEBP from '@/assets/images/devices/headphones.webp'
import actionCameraPNG from '@/assets/images/devices/action_camera.png'
import actionCameraWEBP from '@/assets/images/devices/action_camera.webp'

import cls from "./HeroSlider.module.scss"

export const HeroSlider = memo(() => {
	const { register } = useViewportParallax(
		{
			notebook: 36,   // ближе — больше коэффициент
			camera: 44,
			iphones: 22,
			headphones: 28,
			actionCam: 40,
		},
		{
			maxFraction: 0.9, // ограничение амплитуды
			lerp: 0.12,       // плавность
		}
	);

  return (
    <div className={cls.heroSliderContainer}>
      <div className={cls.slide}>
        <div className={cls.textContainer}>
          <Text as="h1">
						{'Оригинальная техника из\nСША, Европы и ОАЭ'}
          </Text>
					<Text as="p">
						{'APPLE, DJI, MICROSOFT, SONY, GOPRO и другие.\nДо 50% дешевле.'}
					</Text>
					<Button
						as="a"
						href="https://t.me/techoutlet"
						target="_blank"
						rel="noopener noreferrer"
						className={cls.catalogButton}
					>
						Каталог
						<TgIcon />
					</Button>
        </div>
				<div className={cls.imagesContainer}>
					{/*<Picture png={notebookPNG} webp={notebookWEBP} alt="notebook" className={cls.notebookImage}/>*/}
					{/*<Picture png={cameraPNG} webp={cameraWEBP} alt="notebook" className={cls.cameraImage}/>*/}
					{/*<Picture png={iphonesPNG} webp={iphonesWEBP} alt="iphones" className={cls.iphonesImage}/>*/}
					{/*<Picture png={headphonesPNG} webp={headphonesWEBP} alt="iphones" className={cls.headphonesImage}/>*/}
					{/*<Picture png={actionCameraPNG} webp={actionCameraWEBP} alt="iphones" className={cls.actionCameraImage}/>*/}
					<div ref={register("notebook")} className={cls.notebookImage}>
						<Picture png={notebookPNG} webp={notebookWEBP} alt="notebook" />
					</div>

					<div ref={register("camera")} className={cls.cameraImage}>
						<Picture png={cameraPNG} webp={cameraWEBP} alt="camera" />
					</div>

					<div ref={register("iphones")} className={cls.iphonesImage}>
						<Picture png={iphonesPNG} webp={iphonesWEBP} alt="iphones" />
					</div>

					<div ref={register("headphones")} className={cls.headphonesImage}>
						<Picture png={headphonesPNG} webp={headphonesWEBP} alt="headphones" />
					</div>

					<div ref={register("actionCam")} className={cls.actionCameraImage}>
						<Picture png={actionCameraPNG} webp={actionCameraWEBP} alt="action camera" />
					</div>
				</div>
      </div>
    </div>
  )
})