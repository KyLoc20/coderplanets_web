import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TThread, TArticleFilter } from '@/spec'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  InnerBtnWrapper,
  ButtonWrapper,
  FilterIcon,
} from './styles/filter_button'

const FilterPanel = dynamic(() => import('./FilterPanel'), {
  /* eslint-disable react/display-name */
  loading: () => <div />,
  ssr: false,
})

type TProps = {
  thread: TThread
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
}

const FilterButton: FC<TProps> = ({ thread, onSelect, activeFilter }) => {
  return (
    <Wrapper>
      <Tooltip
        placement="bottom-start"
        trigger="click"
        hideOnClick={false}
        content={
          FilterPanel && (
            <FilterPanel
              thread={thread}
              onSelect={onSelect}
              activeFilter={activeFilter}
            />
          )
        }
      >
        <ButtonWrapper size="small" type="primary" ghost>
          <InnerBtnWrapper>
            默认排序
            <FilterIcon />
          </InnerBtnWrapper>
        </ButtonWrapper>
      </Tooltip>
    </Wrapper>
  )
}

export default memo(FilterButton)
