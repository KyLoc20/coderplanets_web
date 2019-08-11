/*
 * ContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:ContentStore')

const ContentStore = t
  .model('ContentStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ContentStore