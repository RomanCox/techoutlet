import { memo, SVGProps } from 'react'

export const Mir = memo((props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 809 229"
      // width="100%"
      // height="100%"
      // preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      role="img"
      aria-label="Some brand logo"
      {...props}
    >
      <defs>
        <linearGradient
          id="SomeBrandLogoGradient"
          x1="570.9194"
          y1="47"
          x2="809"
          y2="47"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stopColor="#00B4E6" />
          <stop offset="1" stopColor="#088CCB" />
        </linearGradient>
      </defs>

      <g>
        <path
          d="M218,0l0,0.1c-0.1,0-31.6-0.1-40,30c-7.7,27.6-29.4,103.8-30,105.9h-6c0,0-22.2-77.9-30-106   C103.6-0.1,72,0,72,0H0v229h72V93h3h3l42,136h50l42-135.9h6V229h72V0H218z"
          fill="#4DB45E"
        />
      </g>

      <g>
        <path
          d="M481,0c0,0-21.1,1.9-31,24l-51,112h-6V0h-72v229l68,0v0c0,0,22.1-2,32-24l50-112h6v136h72V0H481z"
          fill="#4DB45E"
        />
      </g>

      <g>
        <path
          d="M581,104v125h72v-73h78c34,0,62.8-21.7,73.5-52H581z"
          fill="#4DB45E"
        />
      </g>

      <g>
        <path
          d="M731,0H570.9c8,43.6,40.7,78.6,83,90l0,0c9.6,2.6,19.7,4,30.1,4h123.4c1.1-5.2,1.6-10.5,1.6-16   C809,34.9,774.1,0,731,0z"
          fill="url(#SomeBrandLogoGradient)"
        />
      </g>
    </svg>
  )
})