import React from 'react'

import TagsList from '@/widgets/TagsList'
import DotDivider from '@/widgets/DotDivider'

import {
  Wrapper,
  Head,
  Title,
  TagsWrapper,
  ExtraInfo,
  DateText,
} from '../styles/todo_list/post_info'

const tags = [
  {
    color: 'yellow',
    title: '新功能',
  },
]

const PostInfo = ({ post }) => {
  return (
    <Wrapper>
      <Head>
        <Title>{post.title}</Title>
        <TagsWrapper>
          <TagsList data={tags} marginLeft={false} />
        </TagsWrapper>
      </Head>
      <ExtraInfo>
        {post.author.username}
        <DotDivider radius={4} />
        <DateText>5 天前</DateText>
      </ExtraInfo>
    </Wrapper>
  )
}

export default React.memo(PostInfo)
