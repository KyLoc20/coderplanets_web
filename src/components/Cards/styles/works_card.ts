import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { withBg: boolean }>`
  background: ${({ withBg }) => (withBg ? '#0d3440' : 'transparent')};

  position: relative;
  ${css.flex('align-center')};
  height: 118px;
  width: 100%;
  padding: 6px 20px;
  padding-right: 15px;
  border-radius: 3px;

  border-bottom: 1px solid;
  border-bottom-color: #0b3b4a;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  :last-child {
    border-bottom: none;
  }

  &:hover {
    background: #0d3440;
    border-left-color: #0b3b4a;
    border-right-color: #0b3b4a;
  }
  transition: all 0.1s;
`
export const IntroImg = styled(Img)`
  ${css.size(70)};
  border-radius: 5px;
  margin-top: 2px;
`
export const IntroImgHolder = styled.div`
  ${css.size(70)};
  border-radius: 5px;
  margin-top: 2px;
  background-color: #10404e;
`
export const IntroWrapper = styled.div`
  ${css.flexColumnGrow('align-start', 'justify-between')};
  margin-left: 25px;
  /* border: 1px solid green; */
`
export const Header = styled.div`
  ${css.flex('justify-between', 'align-start')};
  width: 100%;
`
export const Title = styled.a`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  font-weight: bold;

  &:hover {
    ${css.threadTitleHover()};
  }
`
export const TypeTags = styled.div`
  ${css.flex('align-center')};
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  height: 32px;
`
export const FooterWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  font-size: 12px;
  margin-left: -3px;
`
export const Divider = styled.div`
  margin-right: 18px;
`
export const BuildWithWrapper = styled.div`
  ${css.flex('align-center')};
  padding: 2px 5px;
  background: linear-gradient(180deg, transparent 48%, rgb(13, 55, 70) 0);
  margin-top: -4px;
`
const BaseBuildIcon = styled(Img)`
  ${css.size(14)};
`
export const TechIcon = styled(BaseBuildIcon)`
  margin-right: 5px;
  filter: saturate(0.8);

  ${Wrapper}:hover & {
    filter: saturate(1);
  }
`
export const GithubIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.size(13)};
  margin-right: 3px;
`
