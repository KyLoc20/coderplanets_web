import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'
import Img from '@/Img'
import CloseCrossSVG from '@/icons/CloseCross'

// display: ${props => (props.show ? 'block' : 'none')};
export const Mask = styled.div<TActive>`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${css.zIndex.modalOverlay};
  display: ${({ show }) => (show ? 'block' : 'none')};
`

type TWrapper = {
  background: string
  width: string
  mode: string
  offsetTop: string
}
export const Wrapper = styled.div<TWrapper>`
  position: relative;
  background-color: ${({ background }) =>
    background === 'default' ? theme('modal.bg') : theme('drawer.bg')};
  margin: 0 auto;
  top: ${({ offsetTop }) => offsetTop};
  width: ${({ width }) => width};
  height: auto;
  border-radius: 8px;
  min-height: 320px;
  max-height: 65vh;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
  /* border: 1px solid; */
  border-top: 3px solid;
  border-color: ${({ mode }) =>
    mode === 'default' ? theme('modal.border') : theme('baseColor.red')};
  animation: ${animate.zoomIn} 0.2s linear;

  ${css.media.tablet`width: 460px`};
  ${css.media.mobile`width: 320px`};
`
export const ChildrenWrapper = styled.div`
  min-height: 320px;
  /* height: 100%; */
  height: auto;
  overflow-y: scroll;
`
type TCloseBtn = { mode: string }
export const CloseBtn = styled(CloseCrossSVG)<TCloseBtn>`
  position: absolute;
  top: 0;
  right: -48px;
  fill: ${({ mode }) =>
    mode === 'default' ? '#0A658A' : theme('baseColor.red')};
  ${css.size(30)};
  z-index: ${css.zIndex.modalCloseBtn};

  &:hover {
    animation: ${animate.pulse} 0.3s linear;
    cursor: pointer;
  }
`
export const EscHint = styled.div<{ mode: string }>`
  color: ${({ mode }) =>
    mode === 'default' ? theme('font') : theme('baseColor.red')};
  opacity: 0.7;
  position: absolute;
  top: 35px;
  right: -44px;
  font-size: 13px;
`
