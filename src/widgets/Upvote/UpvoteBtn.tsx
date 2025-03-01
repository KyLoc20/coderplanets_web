/*
 *
 * Upvote
 *
 */

import { FC, memo, useState, useCallback } from 'react'
import { authWarn } from '@/utils/helper'
import { useAccount } from '@/hooks'

import type { TUpvoteLayout } from '@/spec'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  ContentWrapper,
  IconWrapper,
  IconShadow,
  ShipWindow,
  ArticleShipWindow,
  UpIcon,
} from './styles/upvote_btn'

/* eslint-disable-next-line */
const log = buildLog('c:Upvote:index')

type TProps = {
  type?: TUpvoteLayout
  viewerHasUpvoted?: boolean
  count?: number
  onAction: (viewerHasUpvoted: boolean) => void
}

const UpvoteBtn: FC<TProps> = ({
  type = 'default',
  viewerHasUpvoted = false,
  count = 0,
  onAction,
}) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const [num, setNum] = useState(0)

  const { isValidSession } = useAccount()

  const handleClick = useCallback(() => {
    if (!isValidSession) return authWarn()

    onAction(!viewerHasUpvoted)
    if (viewerHasUpvoted) return
    setNum(num + 1)

    if (!showAnimation) {
      setShowAnimation(true)

      setTimeout(() => setShowAnimation(false), 950)
    }
  }, [showAnimation, viewerHasUpvoted, num, onAction, isValidSession])

  return (
    <Wrapper showAnimation={showAnimation} type={type}>
      <ContentWrapper>
        <IconWrapper onClick={handleClick} type={type}>
          <IconShadow type={type} />
          {type === 'article' ? (
            <ArticleShipWindow />
          ) : (
            <ShipWindow type={type} />
          )}
          <UpIcon type={type} $active={viewerHasUpvoted} count={count} />
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(UpvoteBtn)
