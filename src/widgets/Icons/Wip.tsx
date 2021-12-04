import { memo, SVGProps } from 'react'

const Wip = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M504.252 255.01a70.93 70.93 0 1 0-71.1-70.929 71.202 71.202 0 0 0 71.1 70.93zm98.304 402.535c18.261-.649 17.613-17.067 3.925-24.747l-125.679-67.994-1.365-268.151a63.863 63.863 0 0 0-52.19-55.33 309.316 309.316 0 0 0-138.308 13.653c-52.19 17.579-78.95 70.28-123.29 136.533l-13.039 18.876 36.523 21.47.648-1.092 47.787 26.692-1.297 1.946L85.333 914.364h54.136l155.34-326.759 86.119 98.987 11.093 225.86h48.913l9.148-252.586-58.71-117.795zM248.49 435.95l-45.022-25.395L281.77 307.2l38.502.546zm124.62 68.983 52.19-71.68 7.817 105.438zM909.995 878.32a7187.797 7187.797 0 0 0-88.337-160.427c-98.748-173.26-111.412-173.26-127.454-173.26-43.418 0-59.802 52.94-74.24 99.737a305.152 305.152 0 0 1-25.6 65.775 37.547 37.547 0 0 1-8.363.41 43.145 43.145 0 0 0-47.206 35.089c-20.037 73.386-44.374 135.27-44.374 135.884L474.726 931.5l463.94.716zM559.99 863.06c7.51-21.88 17.067-51.2 26.215-83.831a51.678 51.678 0 0 0 48.879-24.303l6.28-10.82a418.611 418.611 0 0 0 28.126-74.001 246.92 246.92 0 0 1 20.787-53.795 2488.32 2488.32 0 0 1 146.774 247.126z" />
    </svg>
  )
}

export default memo(Wip)
