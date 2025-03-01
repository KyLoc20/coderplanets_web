/*
 *
 * WorksContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import usePlatform from '@/hooks/usePlatform'
import Pagi from '@/widgets/Pagi'
// import AvatarsRow from '@/widgets/AvatarsRow'

import type { TStore } from './store'

// import { VIEW } from './constant'

import FilterBar from './FilterBar'
import WorksList from './WorksList'
// import MileStone from './MileStone'
import RightSidebar from './RightSidebar/index'

import {
  Wrapper,
  LeftSidebarWrapper,
  ContentWrapper,
  MainContent,
  // PagiInfo,
  // PagiInfoTitle,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksContent')

type TProps = {
  worksContent?: TStore
  metric?: TMetric
  testid?: string
}
const WorksContentContainer: FC<TProps> = ({
  worksContent: store,
  metric,
  testid = 'worksContent',
}) => {
  useInit(store)
  const { activeView, showSidebar, pagedWorksData } = store
  const { isMobile } = usePlatform()

  // console.log('## pagedWorksData -> ', pagedWorksData)

  return (
    <Wrapper testid={testid} metric={metric}>
      <ContentWrapper>
        {showSidebar && (
          <LeftSidebarWrapper>
            <FilterBar activeView={activeView} />
          </LeftSidebarWrapper>
        )}
        <MainContent>
          <WorksList data={pagedWorksData} activeView={activeView} />
          <Pagi margin={{ top: '60px', bottom: '80px' }} />
          {/* <PagiInfo>
              <PagiInfoTitle>活跃用户</PagiInfoTitle>
              <AvatarsRow users={tmpUsers} total={10} showTotalNumber />
            </PagiInfo> */}
        </MainContent>
        {!isMobile && <RightSidebar showSidebar={showSidebar} />}
      </ContentWrapper>
    </Wrapper>
  )
}

export default pluggedIn(WorksContentContainer) as FC<TProps>
