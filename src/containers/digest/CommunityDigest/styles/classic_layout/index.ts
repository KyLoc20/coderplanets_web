import styled from 'styled-components'

import type { TMetric } from '@/spec'
import css from '@/utils/css'
import { pixelAdd } from '@/utils/dom'
import { WIDTH } from '@/utils/css/metric'

import { BaseBanner } from '../index'

const getMinHeight = (noSocial, isMobile) => {
  if (isMobile) {
    return noSocial ? '112px' : '140px'
  }

  return noSocial ? '128px' : '150px'
}

type TWrapper = {
  descExpand: boolean
  noSocial: boolean
  isMobile: boolean
  metric?: TMetric
}
export const Wrapper = styled(BaseBanner)<TWrapper>`
  width: 100%;
  min-height: ${({ descExpand, noSocial, isMobile }) =>
    descExpand ? '300px' : getMinHeight(noSocial, isMobile)};
`
export const InnerWrapper = styled.div<TWrapper>`
  ${css.flex('justify-center')};
  padding-top: 20px;
  min-height: ${({ descExpand, noSocial, isMobile }) =>
    descExpand ? '300px' : getMinHeight(noSocial, isMobile)};
  width: 100%;
  // if use margin-left will cause horizontal scrollbar
  // 70 是经典布局为缩小帖子列表"视觉宽度"手动缩小的值
  padding-left: ${pixelAdd(WIDTH.COMMUNITY.CONTENT_OFFSET, 70)};
  ${({ metric }) => css.fitPageWidth(metric)};
  transition: min-height 0.25s;

  ${css.media.mobile`
     padding-left: 0;
  `};
`
export const BaseBannerContent = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  max-width: ${WIDTH.COMMUNITY.CONTENT};

  ${css.media.mobile`
    padding-left: 6%;
    padding-right: 5.5%;
  `};
`
type TBannerContent = { descExpand: boolean }
export const BannerContentWrapper = styled(BaseBannerContent)<TBannerContent>`
  ${css.flexColumn('justify-between')};
  align-items: ${({ descExpand }) => (descExpand ? 'flex-start' : 'center')};
`
export const BannerContainer = styled(BaseBanner)`
  /* min-height: 125px; */
`
export const TabBarWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  margin-left: -16px;

  ${css.media.tablet`
    padding-left: calc(2%);
  `};

  ${css.media.mobile`
    padding-left: 0;
    margin-left: -10px;
  `};
`
export const CommunityBaseInfo = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
  // 60 是经典布局为缩小帖子列表"视觉宽度"手动缩小的值
  padding-right: 60px;

  ${css.media.mobile`
    padding-right: 0;
  `};
`
