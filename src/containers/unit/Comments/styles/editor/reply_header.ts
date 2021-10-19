import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  height: 50px;
  margin-right: 20px;
`
export const UserAvatar = styled.img`
  ${css.circle(25)};
  margin-left: 3%;
  opacity: ${theme('avatar.opacity')};
`
export const LeaveResponseText = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  color: lightgrey;
`
export const LeaveResponseUsername = styled.div`
  font-size: 1.3rem;
  margin-left: 8px;
  color: #96b3b5;
  margin-right: 10px;
`
