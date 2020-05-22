import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  margin-left: 32px;
  margin-top: 40px;
`
export const Header = styled.div`
  ${cs.flex('justify-between', 'align-end')};
  align-items: center;
  margin-bottom: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  border-top: 1px solid;
  border-top-color: ${theme('thread.articleSpliter')};
  padding-top: 15px;
  width: 80px;
`
export const AboutIcon = styled(Img)`
  width: 14px;
  height: 14px;
  fill: ${theme('thread.articleDigest')};
  display: block;
  opacity: 0;
  margin-top: 1px;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
`
