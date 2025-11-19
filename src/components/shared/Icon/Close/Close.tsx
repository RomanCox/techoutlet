import { memo, SVGProps } from 'react'

type CloseIconProps = SVGProps<SVGSVGElement> & {
  size?: number
  strokeWidth?: number
}

export const CloseIcon = memo(({
                            size = 24,
                            strokeWidth = 3,
                            className,
                            ...rest
                          }: CloseIconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
))
