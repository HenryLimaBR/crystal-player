import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2)">
          <path d="M255.676 72L346.327 164V348L255.676 440L165.024 348V164L255.676 72Z" fill="#006278" />
          <path d="M255.676 72L331.455 164V348L255.676 440L179.896 348V164L255.676 72Z" fill="white" fillOpacity="0.05" />
          <path d="M255.676 72L313.041 164V348L255.676 440L198.31 348V164L255.676 72Z" fill="#008CAB" />
          <path d="M255.676 72L293.211 164V348L255.676 440L218.14 348V164L255.676 72Z" fill="white" fillOpacity="0.05" />
          <path d="M255.676 72L275.506 164V348L255.676 440L235.845 348V164L255.676 72Z" fill="#00B3DA" />
          <path d="M255.676 72L261.341 164V348L255.676 440L250.01 348V164L255.676 72Z" fill="white" fillOpacity="0.05" />
          <path d="M255.676 72L346.327 164V348L255.676 440L165.024 348V164L255.676 72Z" fill="url(#paint0_linear_1_2)" />
        </g>
        <defs>
          <filter id="filter0_d_1_2" x="161.024" y="72" width="189.303" height="376" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_1_2" x1="255.676" y1="72" x2="255.676" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00FF75" stopOpacity="0.5" />
            <stop offset="1" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    {
      ...size,
    }
  )
}