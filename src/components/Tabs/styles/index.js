import styled from 'styled-components'

// import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.nav.attrs(props => ({
  'data-testid': props.testid,
}))`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  font-weight: 300;
  font-size: 1.25em;
`
export const Nav = styled.nav`
  text-align: center;
`
export const Ul = styled.ul`
  position: relative;
  ${cs.flex('justify-center')};
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
  list-style: none;
`
export const Li = styled.li`
  color: ${theme('thread.articleTitle')};
  position: relative;
  z-index: 1;
  display: block;
  margin: 0;
  text-align: center;
  flex: 1;
  cursor: pointer;
`
export const SlipBar = styled.span`
  position: absolute;
  width: 20%;
  bottom: 0;
  left: 0;
  height: 2px;

  transform: ${({ active }) => `translate3d(${active}, 0, 0);`};
  transition: transform 0.3s;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 2px;
    width: 100%;
    background: red;
  }
`
// transform: ${({ active }) =>
//     active ? 'translate3d(0,0,0);' : 'translate3d(0, 150%, 0);'};