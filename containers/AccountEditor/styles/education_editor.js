import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormItemWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const FormLable = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: ${theme('form.label')};
  margin-right: 10px;
  margin-top: 5px;
  width: 75px;
  margin-left: -12px;
`

export const FormInput = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
`

export const Adder = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 25px;
  height: 25px;
  margin-left: 5px;
  margin-top: 5px;
  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }
  transition: fill 0.3s;
`

export const BackgroundsWrapper = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  margin-left: 22%;
  display: flex;
  flex-direction: column;
`
export const BackgroundItem = styled.div`
  display: flex;
  align-items: center;
`
export const BgTitle = styled.div`
  color: ${theme('banner.desc')};
  font-weight: bold;
`

export const BgDivider = styled.div`
  color: ${theme('banner.desc')};
  font-size: 1.2rem;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: -3px;
`

export const BgDesc = styled.div`
  color: ${theme('banner.desc')};
`

export const DeleteIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 12px;
  height: 12px;
  margin-left: 8px;
  opacity: 0;
  ${BackgroundItem}:hover & {
    fill: ${theme('banner.title')};
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`
