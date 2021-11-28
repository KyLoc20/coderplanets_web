/*
 *
 * SponsorGallery
 *
 */

import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import Linker from '@/widgets/Linker'

import {
  Wrapper,
  Block,
  Header,
  IntroHead,
  Icon,
  Title,
  IntroImg,
  Desc,
  LinkWrapper,
} from '../styles/sponsor_gallery'

/* eslint-disable-next-line */
const log = buildLog('c:SponsorGallery:index')

const Patterns = dynamic(() => import('./Patterns'), {
  /* eslint-disable react/display-name */
  // loading: () => <SloganTextWrapper>心爱的作品</SloganTextWrapper>,
  ssr: false,
})

type TProps = {
  items: {
    id: string
    title: string
    addr: string
    desc: string
    icon?: string
  }[]
  level?: 'gold' | 'silver'
}

const SponsorGallery: FC<TProps> = ({ items, level = 'gold' }) => {
  return (
    <Wrapper center={level === 'gold'}>
      {items.map((item, index) => (
        <Block key={item.id} level={level}>
          <Header>
            <IntroHead>
              <Title level={level}>{item.title}</Title>
              {level === 'silver' && <Icon />}
            </IntroHead>
          </Header>
          {level === 'gold' && (
            <Patterns index={index} />
            // <IntroImg src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
          )}
          {item.desc && <Desc level={level}>{cutRest(item.desc, 30)}</Desc>}
          <LinkWrapper>
            <Linker src={item.addr} left={-5} />
          </LinkWrapper>
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(SponsorGallery)