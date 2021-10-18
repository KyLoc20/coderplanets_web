/*
 * ArticleEditor store
 *
 */

import { types as T, Instance, getParent } from 'mobx-state-tree'
import { pick } from 'ramda'

import type {
  TRootStore,
  TID,
  TCommunity,
  TArticle,
  TTag,
  TArticleThread,
  TSubmitState,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { Community, Tag } from '@/model'

const ArticleEditor = T.model('ArticleEditor', {
  mode: T.optional(T.enumeration(['publish', 'update']), 'publish'),
  title: T.optional(T.string, ''),
  body: T.optional(T.string, '{}'),
  linkAddr: T.optional(T.string, ''),
  copyRight: T.optional(T.string, 'cc'),
  isQuestion: T.optional(T.boolean, false),
  community: T.optional(Community, {}),
  articleTags: T.optional(T.array(Tag), []),
  // showSubTitle: T.optional(T.boolean, false),
  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
  //
  wordsCountReady: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.viewingArticle)
    },
    get thread(): TArticleThread {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.activeThread)
    },
    get communityData(): TCommunity {
      return toJS(self.community)
    },
    get communityId(): TID {
      return self.community.id
    },
    get tagsData(): TTag[] {
      return toJS(self.articleTags)
    },
    get editingData() {
      const tagsIds = toJS(self.articleTags).map((t) => t.id)
      const baseFields = [
        'title',
        'body',
        'copyRight',
        'isQuestion',
        'linkAddr',
      ]

      return { ...pick(baseFields, self), articleTags: tagsIds }
    },
    get isReady(): boolean {
      const slf = self as TStore
      const { wordsCountReady } = slf
      const titleReady = slf.title.length > 0

      return wordsCountReady && titleReady
    },
    get submitState(): TSubmitState {
      const slf = self as TStore
      return pick(['publishing', 'publishDone', 'isReady'], slf)
    },
  }))
  .actions((self) => ({
    setViewing(article: TArticle): void {
      const root = getParent(self) as TRootStore
      const thread = article.meta.thread.toLowerCase()

      return root.viewing.setViewing({
        viewingThread: thread,
        [thread]: article,
      })
    },
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    loadEditData(article: TArticle): void {
      const {
        title,
        copyRight,
        linkAddr,
        isQuestion,
        document,
        originalCommunity,
        articleTags,
      } = article

      self.title = title
      self.copyRight = copyRight

      if (document?.body) self.body = document.body

      // @ts-ignore
      if (originalCommunity) self.community = originalCommunity
      if (linkAddr) self.linkAddr = linkAddr
      if (isQuestion) self.isQuestion = isQuestion
      // @ts-ignore
      if (articleTags) self.articleTags = articleTags
    },
    reset(): void {
      self.mode = 'publish'
      self.title = ''
      self.body = '{}'
      self.linkAddr = ''
      self.copyRight = 'cc'
      self.isQuestion = false

      self.publishing = false
      self.publishDone = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleEditor>
export default ArticleEditor
