/* eslint-disable jsx-a11y/accessible-emoji */
/*
 *
 * FriendsContent
 *
 */

import { FC, memo, useState } from 'react'
import QRCode from 'qrcode.react'

import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { ICON } from '@/config'
import { METRIC, PAYMENT_USAGE } from '@/constant'
import { openShareWindow, Global, checkout } from '@/utils/helper'
import { Cashier } from '@/containers/dynamic'

import { Br } from '@/widgets/Common'
import Tooltip from '@/widgets/Tooltip'

import Blocks from './Blocks'

import {
  Wrapper,
  InnerWrapper,
  SupportLogo,
  Title,
  Divider,
  Desc,
  MainDesc,
  ButtonGroup,
  Link,
  FeedButton,
  AifadianButton,
  FocusDesc,
  SocialWrapper,
  SocialIcon,
} from './styles'

const BuyMeChuanChuan = dynamic(() => import('@/widgets/BuyMeChuanChuan'), {
  ssr: false,
})

const url = 'https://coderplanets.com'

const toPlatform = (type: string): void => {
  const title = 'CoderPlanets'
  const digest = '可能是最性感的开发者社区'

  switch (type) {
    case 'twitter': {
      const param = { url, text: title }

      return openShareWindow('https://twitter.com/intent/tweet', param)
    }

    case 'telegram': {
      const param = { url, text: title }

      return openShareWindow('https://telegram.me/share/url', param)
    }

    case 'facebook': {
      const param = { u: url }
      return openShareWindow('https://facebook.com/share.php', param)
    }

    case 'douban': {
      const param = { href: url, name: title }
      return openShareWindow('https://shuo.douban.com/!service/share', param)
    }

    case 'reddit': {
      const param = { url, title: `${title}: ${digest}` }
      return openShareWindow('http://www.reddit.com/submit', param)
    }

    case 'zhihu': {
      Global.open('https://zhuanlan.zhihu.com/write', '_blank')
      return
    }

    case 'weibo': {
      const param = { url, title }
      return openShareWindow('https://service.weibo.com/share/share.php', param)
    }

    default: {
      /* eslint-disable-next-line */
      return
    }
  }
}

type TProps = {
  metric?: TMetric
}

const SupportUS: FC<TProps> = ({ metric = METRIC.SUPPORT_US }) => {
  const [showChuan, setShowChuan] = useState(false)

  return (
    <Wrapper testid="support-us-content">
      <Cashier />
      <BuyMeChuanChuan
        onClose={() => setShowChuan(false)}
        onLogin={() => console.log('onLogin')}
        onPay={(amount) => {
          setShowChuan(false)
          checkout(amount, PAYMENT_USAGE.DONATE)
        }}
        show={showChuan}
      />

      <InnerWrapper metric={metric}>
        <Title>
          <SupportLogo src={`${ICON}/menu/lifebuoy.png`} noLazy />
          支持我们
        </Title>
        <Divider />
        <MainDesc align>
          {/* eslint-disable-next-line */}
          编写一个功能完善&nbsp;&amp;&nbsp;{/* eslint-disable-next-line */}
          体验良好的现代社区需要开发者保持长期的专注和付出，论坛的持续打磨和维护，更需要团队投入海量的精力，矛盾的是，现阶段因为缺乏人力、流量等各种资源，难以通过自身造血实现正向循环。你的支持将有助于我们保持独立，在论坛的开发和运营上倾注更多时间。
        </MainDesc>
        <Br top={40} />
        <ButtonGroup>
          <Link href="https://afdian.net/@coderplanets" target="_blank">
            <AifadianButton>⚡ &nbsp;电击我们&nbsp;⚡</AifadianButton>
          </Link>
          <FeedButton ghost noBorder onClick={() => setShowChuan(true)}>
            远程撸串
          </FeedButton>
        </ButtonGroup>
        <Br top={50} />
        <Blocks />
        <Br top={60} />

        <Desc align>
          开源项目的健康发展无法仅靠情怀支撑，所受钱款将全部用于支付本项目所使用的基础设施、第三方服务、资源以及开发人员生计等产生的必要费用，确保社区高质量、可持续，谢谢理解。
        </Desc>
        <Br top={20} />
        <Desc>
          最后，如果你喜欢这里，还请高抬贵指将本社区转发给你身边的开发者朋友，以及各种社交媒体平台：
        </Desc>
        <Br top={15} />
        <SocialWrapper>
          <Tooltip content={<QRCode value={url} size={100} />} placement="top">
            <SocialIcon src={`${ICON}/social/wechat-share.png`} />
          </Tooltip>

          <SocialIcon
            src={`${ICON}/social/twitter-share.png`}
            onClick={() => toPlatform('twitter')}
          />
          <SocialIcon
            src={`${ICON}/social/telegram-share.png`}
            onClick={() => toPlatform('telegram')}
          />
          <SocialIcon
            src={`${ICON}/social/weibo-share.png`}
            onClick={() => toPlatform('weibo')}
          />
          <SocialIcon
            src={`${ICON}/social/douban-share.png`}
            onClick={() => toPlatform('douban')}
          />
          <SocialIcon
            src={`${ICON}/social/zhihu-share.jpeg`}
            onClick={() => toPlatform('zhihu')}
          />
          <SocialIcon
            src={`${ICON}/social/reddit-share.png`}
            onClick={() => toPlatform('reddit')}
          />
          <SocialIcon
            src={`${ICON}/social/facebook-share.png`}
            onClick={() => toPlatform('facebook')}
          />
        </SocialWrapper>
        <FocusDesc>Don’t tell me, tell the world ~</FocusDesc>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(SupportUS)
