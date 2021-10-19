import { FC, memo } from 'react'

import type { TComment, TID } from '@/spec'

import TogglerButton from './TogglerButton'
import Comment from '../Comment'

import { RepliesWrapper, RepliesCommentsWrapper } from '../styles/list/list'

type TProps = {
  entries: TComment[]
  repliesCount: number
  tobeDeleteId: string
  foldedIds: TID[]
}

const RepliesList: FC<TProps> = ({
  entries,
  repliesCount,
  tobeDeleteId,
  foldedIds,
}) => {
  return (
    <RepliesWrapper>
      {entries.map((comment) => (
        <RepliesCommentsWrapper key={comment.id}>
          <Comment
            data={comment}
            tobeDeleteId={tobeDeleteId}
            foldedIds={foldedIds}
            isReply
          />
        </RepliesCommentsWrapper>
      ))}
      {repliesCount > entries.length && (
        <TogglerButton
          text={`显示更多回复 ( ${repliesCount - entries.length - 1} )`}
        />
      )}
    </RepliesWrapper>
  )
}

export default memo(RepliesList)