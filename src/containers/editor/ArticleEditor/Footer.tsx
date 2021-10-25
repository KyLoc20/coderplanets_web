import { FC, memo } from 'react'

import type {
  TCopyright,
  TEditMode,
  TTag,
  TCommunity,
  TSubmitState,
} from '@/spec'

import { THREAD } from '@/constant'

import TagsList from '@/widgets/TagsList'
import SubmitButton from '@/widgets/Buttons/SubmitButton'
import Copyright from '@/widgets/Copyright'
import Checker from '@/widgets/Checker'
import { SpaceGrow } from '@/widgets/Common'
import WordsCounter from '@/widgets/WordsCounter'

import { Wrapper, ArticleFooter, PublishFooter } from './styles/footer'
import { editOnChange, onPublish, onCancel, setWordsCountState } from './logic'

type TProps = {
  mode: TEditMode
  body: string
  tags: TTag[]
  isQuestion: boolean
  copyRight: string
  submitState: TSubmitState
  community: TCommunity
}

const Footer: FC<TProps> = ({
  mode,
  body,
  tags,
  isQuestion,
  copyRight,
  submitState,
  community,
}) => {
  return (
    <Wrapper>
      <ArticleFooter>
        <TagsList
          items={tags}
          mLeft={0}
          size="medium"
          community={community}
          thread={THREAD.POST}
          withSetter={mode === 'publish'}
        />
        <WordsCounter
          body={body}
          bottom={3}
          onChange={setWordsCountState}
          min={40}
        />
        <Checker
          size="medium"
          dimWhenIdle
          checked={isQuestion}
          onChange={(v) => editOnChange(v, 'isQuestion')}
        >
          求助 / 提问
        </Checker>
      </ArticleFooter>
      <PublishFooter>
        <Copyright
          mode="editable"
          type={copyRight as TCopyright}
          onChange={(v) => editOnChange(v, 'copyRight')}
        />
        <SpaceGrow />
        <SubmitButton
          submitState={submitState}
          okText={mode === 'publish' ? '发 布' : '更 新'}
          onPublish={onPublish}
          onCancel={onCancel}
        />
      </PublishFooter>
    </Wrapper>
  )
}

export default memo(Footer)
