/*
 *
 * Tabs
 *
 */

import { memo } from 'react'

import { VIEW } from '@/constant'
import usePlatform from '@/hooks/usePlatform'
import { buildLog } from '@/utils/logger'

import DesktopView from './DesktopView'
import MobileView from './MobileView/index'
import ModelineView from './ModelineView'
import DrawerView from './DrawerView'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const Tabs = (props) => {
  const { isMobile } = usePlatform()
  const { view } = props

  const curMedia = isMobile ? VIEW.MOBILE : VIEW.DESKTOP
  const curView = view === 'auto' ? curMedia : view

  switch (curView) {
    case VIEW.MOBILE: {
      return <MobileView {...props} />
    }

    case VIEW.MODELINE: {
      return <ModelineView {...props} />
    }

    case VIEW.DRAWER: {
      return <DrawerView {...props} />
    }

    default: {
      return <DesktopView {...props} />
    }
  }
}

export default memo(Tabs)
