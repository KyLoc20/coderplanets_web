import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric, TC11NLayout } from '@/spec'
import { changeToCommunity } from '@/utils/helper'

import { METRIC } from '@/constant'
// import useNetwork from 'react-use/lib/useNetwork'

import {
  Breadcrumbs,
  Logo,
  LogoLink,
  LogoText,
  // OfflineWrapper,
  ActionText,
} from './styles'

import MainEntries from './MainEntries'

export const BlinkCursor = dynamic(() => import('@/widgets/BlinkCursor'), {
  ssr: false,
})

const renderMainEntries = (metric) => {
  switch (metric) {
    case METRIC.ARTICLE_EDITOR: {
      return <ActionText>发布内容</ActionText>
    }

    default: {
      return <MainEntries />
    }
  }
}

type TProps = {
  metric: TMetric
  layout: TC11NLayout
  showLogoText: boolean
}

const DigestView: FC<TProps> = ({ metric, showLogoText, layout }) => {
  // const { online } = useNetwork()
  return (
    <Breadcrumbs>
      <LogoLink
        layout={layout}
        onClick={() => {
          console.log('# navi to home')
          changeToCommunity('home')
        }}
      >
        <Logo />
        {showLogoText && <LogoText>oderPlanets</LogoText>}
      </LogoLink>

      <BlinkCursor duration={1.6} height={14} left={5} right={2} />

      {renderMainEntries(metric)}
      {/* {online ? (
        renderMainEntries(metric)
      ) : (
        <OfflineWrapper>您已离线，请检查网络设置</OfflineWrapper>
      )} */}
    </Breadcrumbs>
  )
}

export default memo(DigestView)
