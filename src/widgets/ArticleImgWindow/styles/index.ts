import styled from 'styled-components'

import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
`
export const Block = styled.div`
  width: 30%;
  height: 60px;
  background: #002a34;
  margin-right: 10px;
  border-radius: 5px;
`
