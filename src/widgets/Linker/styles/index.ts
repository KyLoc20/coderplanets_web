import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'

// import css from '@/utils/css'

type TWrapper = { inline: boolean } & TSpace & TTestable
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  align-items: center;
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
  margin-top: ${({ top }) => `${top || 0}px`};
  margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
`

export const holder = 1
