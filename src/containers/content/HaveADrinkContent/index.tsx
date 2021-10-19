/*
 *
 * HaveADrinkContent
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { scrollToTop, lockPage, unlockPage } from '@/utils/dom'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import useShortcut from '@/hooks/useShortcut'

import type { TStore } from './store'
import Header from './Header'
import Footer from './Footer'

import { Wrapper, InnerWrapper, LoadingSentence } from './styles'
import { useInit, refreshSentence } from './logic'

export const Body = dynamic(() => import('./Body'), {
  /* eslint-disable react/display-name */
  loading: () => (
    <LoadingSentence>
      everyday is the opportunity you don&apos;t get back, so live life to the
      fullest.
    </LoadingSentence>
  ),
  ssr: false,
})

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

type TProps = {
  haveADrinkContent?: TStore
  metric?: TMetric
}

const HaveADrinkContentContainer: FC<TProps> = ({
  haveADrinkContent: store,
  metric,
}) => {
  useInit(store)

  useShortcut('Space', () => {
    scrollToTop()
    lockPage()
    refreshSentence()
    setTimeout(() => unlockPage(), 1000)
  })

  const { view, timer, timerInterval, curSentence, settingOptions } = store

  return (
    <Wrapper>
      <InnerWrapper metric={metric}>
        <Header
          view={view}
          timer={timer}
          timerInterval={timerInterval}
          settingOptions={settingOptions}
        />
        <Body
          view={view}
          sentence={curSentence}
          settingOptions={settingOptions}
        />
        <Footer view={view} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(HaveADrinkContentContainer) as FC<TProps>