import styled from 'styled-components'

import Button from '@/widgets/Buttons/Button'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex()};
`
export const InnerBtnWrapper = styled.div`
  ${css.flex('align-center')};

  &:hover {
    cursor: pointer;
  }
`
export const ButtonWrapper = styled(Button)`
  color: #196781;
  border: none;
`
export const FilterIcon = styled(Img)`
  fill: #196781;
  ${css.size(14)};
  margin-left: 5px;
  ${InnerBtnWrapper}:hover & {
    fill: ${theme('banner.title')};
  }
`