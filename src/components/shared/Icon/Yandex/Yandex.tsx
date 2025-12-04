import { memo, SVGProps } from 'react'

export const Yandex = memo((props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 30"
      width="25"
      height="30"
      {...props}
    >
      <path d="M10.0289 26.7134V29.7054H15.0434V26.0724C15.0434 21.1571 14.1862 18.9346 12.2148 14.6603L5.48596 7.17034e-06H0L7.9288 17.1394C9.55749 20.6443 10.0289 22.653 10.0289 26.7134Z" fill="#FC3F1D"/>
      <path d="M19.5008 0.000121901L13.2434 14.3613L18.4294 14.3613L24.7723 0.00016728L19.5008 0.000121901Z" fill="#FC3F1D"/>
    </svg>
  )
})