import styled from 'styled-components'
// import { lighten } from 'polished'

// import { theme, cs } from '@utils'
import { cs } from '@utils'

import { Wrapper as BaseWrapper } from '../button'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  position: relative;
`
export const LeftButton = styled(BaseWrapper)`
  ${cs.flexColumn('align-both')};
  width: 32px;
  min-height: 70px;
  white-space: pre-line;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
export const OrSign = styled.div`
  ${cs.flex('align-both')};
  position: absolute;
  top: calc(50% - 8.5px);
  left: 8.5px;
  font-size: 10px;
  font-weight: bold;
  color: #99b9bf;
  background: #002b35;
  border-radius: 100%;
  z-index: 1;
  width: 16px;
  height: 16px;
`
export const RightButton = styled(BaseWrapper)`
  ${cs.flexColumn('align-both')};
  width: 32px;
  min-height: 70px;
  white-space: pre-line;
  background: #024250;
  border-color: #024250;
  color: #99b9bf;
  margin-top: 3px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`