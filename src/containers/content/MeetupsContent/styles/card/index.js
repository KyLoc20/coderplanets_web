import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex()}
  width: 33%;
  height: 210px;
  padding: 20px 5px;
  border-top: 1px solid;
  border-top-color: transparent;
  border-bottom: 1px solid #054353;
  color: ${theme('thread.articleDigest')};
  &:hover {
    background: #04303c;
    border-top: 1px solid;
    border-top-color: #327faf;
  }
  transition: all 0.25s;
`
export const ContentsWrapper = styled.div`
  ${cs.flexColumn()};
  flex-grow: 1;
  width: 100%;
`
export const Label = styled.div`
  color: #3a81ab;
  font-size: 13px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-bottom: 18px;
  cursor: pointer;
`
export const PreviewImg = styled(Img)`
  width: 80px;
  height: 50px;
  border-radius: 4px;
  display: block;
  margin-left: 10px;
`
export const FooterWrapper = styled.div`
  ${cs.flex('align-center')}
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const Company = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  display: block;
  margin-right: 3px;
`
