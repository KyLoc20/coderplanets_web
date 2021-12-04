/*
 *
 * ArticlesThread
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import type { TResState } from '@/spec'
import { C11N } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import PagedArticles from '@/widgets/PagedArticles'
import ViewportTracker from '@/widgets/ViewportTracker'
// import ArticlesFilter from '@/widgets/ArticlesFilter'
import ThreadSidebar from '@/containers/thread/ThreadSidebar'

import type { TStore } from './store'

import { Wrapper, MainWrapper, FilterWrapper } from './styles'
import { useInit, inAnchor, outAnchor, onFilterSelect } from './logic'

const ArticlesFilter = dynamic(() => import('@/widgets/ArticlesFilter'), {
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:ArticlesThread')

type TProps = {
  articlesThread?: TStore
}

const ArticlesThreadContainer: FC<TProps> = ({ articlesThread: store }) => {
  useInit(store)

  const {
    pagedArticlesData,
    filtersData,
    curCommunity,
    curThread,
    showFilters,
    c11n,
    resState,
  } = store
  const { bannerLayout } = c11n
  const { pageNumber, totalCount } = pagedArticlesData

  return (
    <Wrapper>
      <MainWrapper thread={curThread}>
        <ViewportTracker onEnter={inAnchor} onLeave={outAnchor} />
        {showFilters && (
          <FilterWrapper thread={curThread}>
            <ArticlesFilter
              resState={resState as TResState}
              onSelect={onFilterSelect}
              activeFilter={filtersData}
              pageNumber={pageNumber}
              totalCount={totalCount}
            />
          </FilterWrapper>
        )}
        <PagedArticles
          data={pagedArticlesData}
          curCommunity={curCommunity}
          thread={curThread}
          resState={resState as TResState}
          c11n={c11n}
        />
      </MainWrapper>

      {bannerLayout === C11N.CLASSIC && <ThreadSidebar />}
    </Wrapper>
  )
}

export default pluggedIn(ArticlesThreadContainer) as FC<TProps>
