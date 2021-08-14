import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'
import Img from '@/Img'
import DotDivider from '@/components/DotDivider'

export const Wrapper = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const Extra = styled.li`
  position: relative;
  ${css.flex('align-end')};
  color: ${theme('thread.extraInfo')};
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 12px;
  height: 24px;
  /* border: 1px solid tomato; */
`
export const LeftPart = styled.div`
  ${css.flex('align-center')};
`

export const CommunityLabel = styled.div`
  padding-left: 14px;
  position: relative;
  font-weight: bold;

  &:before {
    content: '';
    position: absolute;
    left: 1px;
    top: 3px;
    width: 6px;
    height: 11px;
    border-radius: 4px;
    background-color: #49a5a0;
  }
`
export const LabelDivider = styled.div`
  width: 1px;
  height: 8px;
  margin-left: 10px;
  margin-right: 12px;
  background-color: #49a5a0;
  transform: rotate(12deg);
`
export const AuthorName = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
`
export const PublishTime = styled.div`
  font-size: 12px;
`
export const Dot = styled(DotDivider)`
  background: ${theme('thread.extraInfo')};
  margin-right: 8px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
`
export const ViewsIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(12)};
  opacity: 0.6;
  margin-right: 3px;
`
