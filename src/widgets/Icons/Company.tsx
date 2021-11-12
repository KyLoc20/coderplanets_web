import { memo, SVGProps } from 'react'

const Company = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M576.102 165.734a107.52 107.52 0 01107.264 99.84l.256 7.68v30.208l76.8.052a107.52 107.52 0 01107.264 99.84l.256 7.68v351.744h11.674a38.4 38.4 0 015.222 76.492l-5.222.308H179.2a38.4 38.4 0 01-5.222-76.442l5.222-.358h12.902V273.254a107.52 107.52 0 0199.84-107.264l7.68-.256h276.48zm0 76.8h-276.48a30.72 30.72 0 00-30.31 25.754l-.41 4.966v489.472h107.52V411.085a107.52 107.52 0 0199.84-107.264l7.68-.256h122.88v-30.26a30.72 30.72 0 00-20.992-29.183l-4.71-1.127-5.018-.41zm184.32 137.78h-276.48a30.72 30.72 0 00-30.72 30.72v351.744h337.92V411.034a30.72 30.72 0 00-25.702-30.31l-5.018-.41zM562.637 595.098a25.6 25.6 0 0125.19 20.992l.41 4.608v45.926a25.6 25.6 0 01-50.79 4.608l-.41-4.608v-45.926a25.6 25.6 0 0125.6-25.6zm123.136 0a25.6 25.6 0 0125.19 20.992l.41 4.608v45.926a25.6 25.6 0 01-50.79 4.608l-.41-4.608v-45.926a25.6 25.6 0 0125.6-25.6zM562.637 457.37a25.6 25.6 0 0125.19 20.992l.41 4.608v45.875a25.6 25.6 0 01-50.79 4.608l-.41-4.608v-45.927a25.6 25.6 0 0125.6-25.6zm123.136 0a25.6 25.6 0 0125.19 20.992l.41 4.608v45.875a25.6 25.6 0 01-50.79 4.608l-.41-4.608v-45.927a25.6 25.6 0 0125.6-25.6z" />
    </svg>
  )
}

export default memo(Company)