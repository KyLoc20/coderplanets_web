import styled from 'styled-components'

// import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};

  ${css.media.mobile`
    font-size: 12px;
    margin-bottom: 4px;
  `}
`

export const holder = 1
