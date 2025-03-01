//

/*
 *
 * AbuseReport
 *
 */

import { FC } from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import usePlatform from '@/hooks/usePlatform'
import Modal from '@/widgets/Modal'

import Header from './Header'
import Footer from './Footer'
import ReportContent from './ReportContent'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit, close } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AbuseReport')

type TProps = {
  abuseReport?: TStore
  testid?: string
}

const AbuseReportContainer: FC<TProps> = ({
  abuseReport: store,
  testid = 'abuse-report',
}) => {
  useInit(store)
  const { show, type, view, itemsData, activeItem, viewingArticle } = store

  const { isMobile } = usePlatform()

  if (isMobile) {
    return (
      <Wrapper testid={testid}>
        <Header
          type={type}
          view={view}
          activeItem={activeItem}
          article={viewingArticle}
        />
        <ReportContent view={view} items={itemsData} activeItem={activeItem} />
        <Footer view={view} />
      </Wrapper>
    )
  }

  return (
    <Modal width="500px" show={show} showCloseBtn onClose={() => close()}>
      <Wrapper testid={testid}>
        <Header
          type={type}
          view={view}
          activeItem={activeItem}
          article={viewingArticle}
        />
        <ReportContent view={view} items={itemsData} activeItem={activeItem} />
        <Footer view={view} />
      </Wrapper>
    </Modal>
  )
}

export default pluggedIn(AbuseReportContainer) as FC<TProps>
