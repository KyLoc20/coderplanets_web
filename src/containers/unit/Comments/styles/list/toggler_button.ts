import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  padding-top: 25px;
  padding-bottom: 18px;
  margin-left: 25px;
`
export const SlashSign = styled.div`
  font-size: 11px;
  font-weight: bolder;
  font-family: monospace;
  opacity: 0.8;
`

export const Text = styled.div`
  font-size: 12px;
  opacity: 0.8;
  color: ${theme('button.primary')};
  margin-left: 14px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: all 0.2s;
`
