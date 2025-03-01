/*
 *
 * AuthorInfo
 *
 */

import { FC, memo } from 'react'
import { isEmpty, pickBy } from 'ramda'

import type { TAccount } from '@/spec'
import { buildLog } from '@/utils/logger'

import FollowButton from '@/widgets/Buttons/FollowButton'
import ImgFallback from '@/widgets/ImgFallback'

import SocialList from './SocialList'

import {
  Wrapper,
  TextIntro,
  IntroTitle,
  Name,
  Bio,
  //
  AvatarIntro,
  Avatar,
} from '../styles/author_info'

import { onFollow, undoFollow } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('c:AuthorInfo:index')

type TProps = {
  testid?: string
  hasFollowedAuthor: boolean | null
  author: TAccount
}

const AuthorInfo: FC<TProps> = ({
  testid = 'author-info',
  author,
  hasFollowedAuthor = null,
}) => {
  const socialItems = pickBy((v) => !!v, author.social) as Record<
    string,
    string
  >

  const hasFollowed =
    hasFollowedAuthor === null ? author.viewerHasFollowed : hasFollowedAuthor

  return (
    <Wrapper testid={testid}>
      <TextIntro>
        <IntroTitle>关于作者</IntroTitle>
        <Name>
          {author.nickname}
          {!isEmpty(socialItems) && <SocialList items={socialItems} />}
        </Name>
        <Bio>{author.bio}</Bio>
      </TextIntro>
      <AvatarIntro>
        <Avatar
          src={author.avatar}
          fallback={<ImgFallback user={author} size={38} bottom={16} />}
        />
        <FollowButton
          size="tiny"
          followText="&nbsp;关 注&nbsp;"
          hasFollowed={hasFollowed}
          followingOffset={-10}
          userLogin={author.login}
          onFollow={onFollow}
          onUndoFollow={undoFollow}
        />
      </AvatarIntro>
    </Wrapper>
  )
}

export default memo(AuthorInfo)
