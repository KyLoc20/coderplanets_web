import { useEffect } from 'react'

import { buildLog } from '@/utils/logger'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:RoadmapThread')

export const someMethod = () => {
  /* todo */
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [])
}
