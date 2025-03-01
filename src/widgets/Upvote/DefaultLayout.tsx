/*
 *
 * Upvote
 *
 */

import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import { buildLog } from '@/utils/logger'
import usePlatform from '@/hooks/usePlatform'

import AvatarsRow from '@/widgets/AvatarsRow'

import UpvoteBtn from './UpvoteBtn'
import Desc from './Desc'

import { Wrapper } from './styles/default_layout'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  testid?: string
  count?: number
  avatarsRowLimit?: number
  viewerHasUpvoted?: boolean
  alias?: string // 觉得很赞(default), 觉得很酷(works), 学到了(blog), 感兴趣(meetup), 有意思(Radar)
  avatarList?: TUser[]
  onAction?: (viewerHasUpvoted: boolean) => void
}

const Upvote: FC<TProps> = ({
  testid = 'upvote',
  count = 4,
  viewerHasUpvoted = false,
  avatarsRowLimit = 3,
  alias = '觉得很赞',
  onAction = log,
  avatarList,
}) => {
  const noOne = count === 0
  const { isMobile } = usePlatform()

  return (
    <Wrapper testid={testid}>
      <UpvoteBtn
        viewerHasUpvoted={viewerHasUpvoted}
        onAction={onAction}
        count={count}
      />

      {!noOne && !isMobile && (
        <AvatarsRow users={avatarList} showMore={false} />
      )}

      <Desc
        noOne={noOne}
        count={count}
        avatarsRowLimit={avatarsRowLimit}
        alias={alias}
        viewerHasUpvoted={viewerHasUpvoted}
      />
    </Wrapper>
  )
}

export default memo(Upvote)
