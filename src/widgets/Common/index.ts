import styled from 'styled-components'

import type { TSpace } from '@/spec'
import { theme } from '@/utils/themes'

export const Br = styled.div<TSpace>`
  margin-top: ${({ top }) => `${top || 0}px`};
  margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
`
export const Space = styled.span<TSpace>`
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
`
export const SpaceGrow = styled.div`
  flex-grow: 1;
`
export const Divider = styled.div<TSpace>`
  border-top: 1px solid;
  border-top-color: ${theme('thread.articleDigest')};
  width: 100%;
  opacity: 0.3;
  margin-top: ${({ top }) => `${top === undefined ? 20 : top}px`};
  margin-bottom: ${({ bottom }) => `${bottom === undefined ? 20 : bottom}px`};
`
