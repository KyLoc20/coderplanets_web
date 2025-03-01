import styled from 'styled-components'
import { theme } from '@/utils/themes'

import type { TProps } from '../index'

export const Wrapper = styled.div<TProps>`
  width: ${({ radius }) => `${radius}px`};
  height: ${({ radius }) => `${radius}px`};
  border-radius: 100%;
  background-color: ${theme('thread.articleDigest')};

  margin-left: ${({ space }) => `${space}px`};
  margin-right: ${({ space }) => `${space}px`};
  display: block;
`

export const Holder = 1
