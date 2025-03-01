import { FC, memo } from 'react'

import type { TC11NLayout, TMetric } from '@/spec'
import { C11N, METRIC } from '@/constant'

import {
  RawWrapper,
  InnerWrapper,
  ClassicWrapper,
  HolyGrailWrapper,
  BeianLink,
  PowerByWrapper,
  PowerByLink,
} from '../styles/desktop_view/bottom_info'

type TProps = {
  metric: TMetric
  layout?: TC11NLayout
}

const BottomInfo: FC<TProps> = ({ metric, layout }) => {
  if (metric !== METRIC.COMMUNITY) {
    return (
      <RawWrapper metric={metric}>
        <InnerWrapper>
          <BeianLink href="http://beian.miit.gov.cn">
            蜀ICP备17043722号-4
          </BeianLink>
          <PowerByWrapper>
            Powered by
            <PowerByLink href="http://github.com/groupher">
              Groupher
            </PowerByLink>
          </PowerByWrapper>
        </InnerWrapper>
      </RawWrapper>
    )
  }

  const Wrapper = layout === C11N.CLASSIC ? ClassicWrapper : HolyGrailWrapper

  return (
    <Wrapper metric={metric}>
      <InnerWrapper>
        <BeianLink href="http://beian.miit.gov.cn">
          蜀ICP备17043722号-4
        </BeianLink>
        <PowerByWrapper>
          Powered by
          <PowerByLink href="http://github.com/groupher">Groupher</PowerByLink>
        </PowerByWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(BottomInfo)
