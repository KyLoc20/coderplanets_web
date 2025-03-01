import styled from 'styled-components'

import type { TTestable, TSpace, TSIZE_SM } from '@/spec'

import Img from '@/Img'
import ThunderSVG from '@/icons/Thunder'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { getFontSize } from './metric'

type TWrapper = TTestable & TSpace & { size: TSIZE_SM; interactive: boolean }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  color: ${theme('thread.articleDigest')};
  font-size: ${({ size }) => getFontSize(size)};

  padding-top: ${({ top }) => `${top}px`};
  padding-bottom: ${({ bottom }) => `${bottom}px`};
  padding-left: ${({ left }) => `${left}px`};
  padding-right: ${({ right }) => `${right}px`};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: ${({ interactive }) => (interactive ? 'pointer' : 'text')};
  }

  transition: color 0.1s;
`
export const Text = styled.div<{ lineClamp: number }>`
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: 1.65;
  letter-spacing: 0.5px;
`

export const HintWrapper = styled.div`
  display: inline;
`
export const FixedHintWrapper = styled(HintWrapper)`
  position: absolute;
  right: 0;
  top: 22px;
  background: #0e303d;

  &:before {
    content: '...';
    color: ${theme('thread.articleDigest')};
    margin-left: 4px;
  }
`
export const MediaHintWrapper = styled.div`
  position: relative;
  margin-left: 5px;
  display: inline-flex;
`
export const HintIcon = styled(Img)`
  position: absolute;
  top: 2px;
  left: 0;
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  margin-right: 4px;
`
export const HintText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 11px;
  height: 12px;
  margin-right: 5px;
  padding-left: 17px;
  margin-bottom: 1px;
`
export const PreviewWrapper = styled.div`
  display: inline-flex;
  opacity: 0;
  margin-left: 4px;
  align-items: center;

  ${Wrapper}:hover & {
    opacity: 0.8;
  }
  transition: opacity 0.1s;
`
export const PreviewIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(14)};
  transform: rotate(180deg);
`
export const PreviewText = styled.span`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
`
export const ThunderIcon = styled(ThunderSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(18)};
  transform: rotate(12deg);
`
