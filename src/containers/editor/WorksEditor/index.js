//

/*
 *
 * WorksEditor
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Preview from './Preview'
import Steps from './Steps'
import Content from './Content'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:WorksEditor')

const WorksEditorContainer = ({ worksEditor: store, testId, metric }) => {
  useInit(store)

  const { curStep } = store

  return (
    <Wrapper testId={testId}>
      <InnerWrapper metric={metric}>
        <Preview />
        <Steps curStep={curStep} />
        <Content curStep={curStep} />
      </InnerWrapper>
    </Wrapper>
  )
}

WorksEditorContainer.propTypes = {
  worksEditor: T.any.isRequired,
  testId: T.string,
  metric: T.oneOf(values(METRIC)),
}

WorksEditorContainer.defaultProps = {
  testId: 'works-editor',
  metric: METRIC.COMMUNITY,
}

export default connectStore(WorksEditorContainer)
