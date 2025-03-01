import { FC, memo, useCallback } from 'react'

import type { TComment } from '@/spec'
import { ICON } from '@/config'
import { useAccount } from '@/hooks'

import { authWarn } from '@/utils/helper'

import IconButton from '@/widgets/Buttons/IconButton'
import MenuButton from '@/widgets/Buttons/MenuButton'
import { SpaceGrow } from '@/widgets/Common'

import { Wrapper, ReplyAction, MoreWrapper } from '../styles/comment/actions'
import { openUpdateEditor, openReplyEditor } from '../logic'

const menuOptions = [
  // {
  //   key: 'quote',
  //   icon: `${ICON}/shape/quote.svg`,
  //   title: '引用',
  // },
  {
    key: 'share',
    icon: `${ICON}/article/share.svg`,
    title: '分享',
  },
  {
    key: 'report',
    icon: `${ICON}/article/report.svg`,
    title: '举报',
  },
]

type TProps = {
  data: TComment
}

const Actions: FC<TProps> = ({ data }) => {
  const { user, isValidSession } = useAccount()

  let extraOptions = []

  if (data.author.login === user.login) {
    extraOptions = [
      {
        key: 'edit',
        icon: `${ICON}/edit/publish-pen.svg`,
        title: '编辑',
      },
      {
        key: 'delete',
        icon: `${ICON}/shape/delete.svg`,
        title: '删除',
      },
    ]
  }

  const handleAction = useCallback(
    (key) => {
      if (!isValidSession) return authWarn()

      switch (key) {
        case 'share': {
          return alert('todo: share')
        }
        case 'quote': {
          return alert('todo: quote')
        }
        case 'report': {
          return alert('todo: report')
        }
        case 'edit': {
          return openUpdateEditor(data)
        }
        case 'delete': {
          return alert('todo: delete')
        }
        default: {
          // eslint-disable-next-line no-useless-return
          return
        }
      }
    },
    [data, isValidSession],
  )

  return (
    <Wrapper>
      {data.meta.isLegal && (
        <ReplyAction
          onClick={() => {
            if (!isValidSession) return authWarn()

            openReplyEditor(data)
          }}
        >
          回复
        </ReplyAction>
      )}

      <SpaceGrow />
      <MenuButton
        options={menuOptions}
        extraOptions={extraOptions}
        onClick={handleAction}
      >
        <MoreWrapper>
          <IconButton path="shape/more.svg" size={16} />
        </MoreWrapper>
      </MenuButton>
    </Wrapper>
  )
}

export default memo(Actions)
