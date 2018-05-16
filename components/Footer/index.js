/*
 *
 * Footer
 *
 */

import React from 'react'

import { makeDebugger } from '../../utils'

import { BuyMeChuanChuan } from '../../components'

import {
  Container,
  BaseInfo,
  BeianInfo,
  Divider,
  About,
  Beian,
  Powerby,
  Support,
  PowerbyLink,
  GitSource,
} from './styles'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Footer:index')
/* eslint-enable no-unused-vars */

class Footer extends React.Component {
  componentDidMount() {}

  state = {
    showSupport: false,
  }

  toggleSupport() {
    this.setState({
      showSupport: !this.state.showSupport,
    })
  }

  render() {
    return (
      <Container>
        <BuyMeChuanChuan
          show={this.state.showSupport}
          onClose={this.toggleSupport.bind(this)}
        />
        <BaseInfo>
          {/* TODO: use next/link to link to post */}
          <About
            href="http://www.miitbeian.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            关于 CPS
          </About>
          <Divider>|</Divider>
          <About
            href="http://api.coderplanets.com/graphiql"
            rel="noopener noreferrer"
            target="_blank"
          >
            Developer API
          </About>
          <Divider>|</Divider>
          <About
            href="http://www.miitbeian.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            联系我们
          </About>

          <Divider>|</Divider>
          <Powerby>
            Powered by{' '}
            <PowerbyLink
              href="https://github.com/mastani-stack"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mastani-Stack
            </PowerbyLink>
          </Powerby>
          <Divider>|</Divider>
          <Support onClick={this.toggleSupport.bind(this)}>资助</Support>
          <Divider>|</Divider>
          <GitSource>
            <iframe
              title="souce_attr"
              src="https://ghbtns.com/github-btn.html?user=mydearxym&repo=mastani_web&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="80px"
              height="20px"
            />
          </GitSource>
        </BaseInfo>
        <BeianInfo>
          <Beian
            href="http://www.miitbeian.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            蜀ICP备17043722号-4
          </Beian>
        </BeianInfo>
      </Container>
    )
  }
}

export default Footer