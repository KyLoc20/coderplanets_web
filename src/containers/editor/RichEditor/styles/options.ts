import styled from 'styled-components'

import Input from '@/components/Input'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: calc(100% + 10px);
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 35px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  border-bottom-color: #1a3a40;
`
export const LinkWrapper = styled.div`
  position: relative;
  width: 260px;
  margin-left: 15px;
`
export const LinkInput = styled(Input)`
  display: block;
  border: none;
  border-left: 2px solid;
  border-right: 2px solid;
  border-radius: 5px;
  border-color: #1b4d53;
  background: none;
  color: #486368;
  padding: 2px 8px;
  height: 20px;
  font-size: 13px;

  &::placeholder {
    font-size: 12px;
  }
`
export const ErrorHint = styled.div`
  position: absolute;
  font-size: 13px;
  right: -68px;
  top: 1px;
  color: ${theme('baseColor.red')};
  animation: ${animate.breath} 2.5s linear infinite;
`