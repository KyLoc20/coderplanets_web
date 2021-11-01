import { memo, SVGProps } from 'react'

const Delete = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      {...props}
    >
      <path d="M509.9 71.1C265.3 71.1 67 269.4 67 514c0 244.6 198.3 443 442.9 443 244.6 0 442.9-198.3 442.9-442.9.1-244.7-198.3-443-442.9-443zm181.6 565.8c7.5 7.5 12.2 17.9 12.2 29.3 0 23-18.6 41.5-41.5 41.5-11.4 0-21.8-4.6-29.3-12.2l-123-122.7-122.8 122.9c-7.6 7.5-17.9 12.2-29.4 12.2-22.9 0-41.5-18.6-41.5-41.5 0-11.5 4.6-21.8 12.1-29.3l122.9-123-122.9-123c-7.5-7.5-12.1-17.9-12.1-29.4 0-22.9 18.6-41.5 41.5-41.5 11.4 0 21.8 4.6 29.3 12.1l122.8 122.9 122.9-122.9c7.5-7.5 17.9-12.1 29.3-12.1 22.9 0 41.5 18.6 41.5 41.5 0 11.5-4.6 21.9-12.2 29.4L568.7 514l122.8 122.9z" />
    </svg>
  )
}

export default memo(Delete)