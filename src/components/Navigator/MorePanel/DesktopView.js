import React from 'react'
import Link from 'next/link'

import { ICON } from '@/config'
import { ROUTE } from '@/constant'

import Footer from './Footer'

import {
  Wrapper,
  BodyWrapper,
  Entry,
  Logo,
  Intro,
  Title,
  Desc,
  Wip,
} from '../styles/more_panel'

const MoreContent = () => {
  return (
    <Wrapper>
      <BodyWrapper>
        <Entry>
          <Logo src={`${ICON}/menu/shop.svg`} />
          <Intro>
            <Title>
              小周边<Wip>开发中</Wip>
            </Title>
            <Desc>贴纸/冰箱贴/各种奇奇怪怪。。</Desc>
          </Intro>
        </Entry>
        <Link href={`/${ROUTE.TRENDING}`} passHref>
          <Entry>
            <Logo src={`${ICON}/menu/trending.svg`} />
            <Intro>
              <Title>Trending</Title>
              <Desc>各社区近期精华内容</Desc>
            </Intro>
          </Entry>
        </Link>
        <Entry>
          <Logo src={`${ICON}/menu/makers.svg`} />
          <Intro>
            <Title>创作者社区</Title>
            <Desc>经验交流，开发者访谈</Desc>
          </Intro>
        </Entry>
        <Link href={`/${ROUTE.RECIPES}`} passHref>
          <Entry>
            <Logo src={`${ICON}/menu/snippets.svg`} />
            <Intro>
              <Title>代码片段</Title>
              <Desc>各语言实用 Snippets，小技巧</Desc>
            </Intro>
          </Entry>
        </Link>
        <Link href={`/${ROUTE.SUBSCRIBE}`} passHref>
          <Entry>
            <Logo src={`${ICON}/menu/subscribe.svg`} />
            <Intro>
              <Title>
                社区订阅 <Wip>开发中</Wip>
              </Title>
              <Desc>各社区动态 RSS / Email 订阅</Desc>
            </Intro>
          </Entry>
        </Link>
        <Entry>
          <Logo src={`${ICON}/menu/chart.svg`} />
          <Intro>
            <Title>社区统计</Title>
            <Desc>各社区各项统计数据</Desc>
          </Intro>
        </Entry>

        <Entry>
          <Logo src={`${ICON}/menu/vip.svg`} />
          <Intro>
            <Title>高级会员</Title>
            <Desc>升级高级会员，获得更好体验</Desc>
          </Intro>
        </Entry>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  )
}

export default React.memo(MoreContent)