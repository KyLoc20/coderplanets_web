/*
 *
 * ArticleViewer
 *
 */

import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { THREAD } from '@/constant'

import PostViewer from './PostViewer'
import BlogViewer from './BlogViewer'
import WorksViewer from './WorksViewer'

type TProps = {
  article: TArticle
  loading: boolean
  tab: string
}

const Viewer: FC<TProps> = ({ article, loading, tab }) => {
  const { meta } = article

  switch (meta.thread.toLowerCase()) {
    case THREAD.BLOG: {
      return <BlogViewer article={article} loading={loading} />
    }

    case THREAD.WORKS: {
      return <WorksViewer article={article} loading={loading} tab={tab} />
    }

    default: {
      // post, job, etc..
      return <PostViewer article={article} loading={loading} />
    }
  }
}

export default memo(Viewer)
