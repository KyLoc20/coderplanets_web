/*
 *
 * ModeLineMenu
 *
 */

import { FC } from 'react'

import type { TModelineType } from '@/spec'
import { TYPE } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import GlobalMenu from './GlobalMenu/index'
import SearchMenu from './SearchMenu'
import MoreMenu from './MoreMenu'
import FilterMenu from './FilterMenu'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLineMenu')

const renderMenus = (type, curActive) => {
  switch (type) {
    case TYPE.MM_TYPE.MORE: {
      return <MoreMenu />
    }

    case TYPE.MM_TYPE.SEARCH: {
      return <SearchMenu />
    }

    case TYPE.MM_TYPE.FILTER: {
      return <FilterMenu curActive={curActive} />
    }

    default: {
      return <GlobalMenu />
    }
  }
}

type TProps = {
  modeLineMenu?: TStore
  type?: TModelineType
  testid?: string
}

const ModeLineMenuContainer: FC<TProps> = ({
  modeLineMenu: store,
  testid = 'mode-line-menu',
  type = TYPE.MM_TYPE.GLOBAL_MENU,
}) => {
  useInit(store)
  const { curActive } = store

  return <Wrapper testid={testid}>{renderMenus(type, curActive)}</Wrapper>
}

export default pluggedIn(ModeLineMenuContainer) as FC<TProps>