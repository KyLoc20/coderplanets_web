import styled from 'styled-components'

import css from '@/utils/css'
import { WIDTH } from '@/utils/css/metric'

export const Wrapper = styled.div`
  ${css.flex()};
  max-width: ${WIDTH.COMMUNITY.PAGE};
  width: 100%;
`
export const ViewerWrapper = styled.div`
  margin-top: -6px;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const RightPart = styled.div`
  min-width: 200px;
  margin-left: 30px;
  padding-top: 5px;
  ${css.media.tablet`display: none;`};
`
export const PublisherWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  margin-left: 8px;
`
