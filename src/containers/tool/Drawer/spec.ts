import type { TTestable, TActive, TArticle } from '@/spec'

export type TSwipeOption = {
  direction: 'bottom' | 'top'
  position: 'H' | 'M' | 'L'
}

export type TSwipe = {
  swipeUpY?: number
  swipeDownY?: number
  // options: Record<string, unknown>
  options: TSwipeOption
}

export type TDrawer = TTestable &
  TActive &
  TSwipe & {
    mobile: boolean
    rightOffset?: string
    type: string
  }

export type TArticleNavi = {
  previous: TArticle | null
  next: TArticle | null
}
