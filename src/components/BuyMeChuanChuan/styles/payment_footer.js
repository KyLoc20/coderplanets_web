import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  align-items: center;
  margin-right: 5px;
`

export const PayDesc = styled.div`
  ${css.flex()};
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
`
export const AliPay = styled.div`
  ${css.flex('align-center')};
  margin-left: 5px;
  margin-right: 5px;
  color: #42abe1;
`
export const Weixin = styled.div`
  ${css.flex('align-center')};
  color: #3eb64b;
  margin-left: 5px;
`
export const MoneyNum = styled.span`
  color: #ffdad3;
`
export const PaymentIcon = styled(Img)`
  width: 16px;
  height: 16px;
  display: block;
`
