import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, METRIC } from '@/constant'

import {
  getJwtToken,
  makeGQClient,
  ssrAmbulance,
  parseTheme,
  akaTranslate,
  nilOrEmpty,
  ssrParseURL,
} from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import HelpCenterContent from '@/containers/content/HelpCenterContent'

import { useStore } from '@/stores/init'

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // const { asPath } = props
  // schema

  const { communityPath } = ssrParseURL(props.req)
  const community = akaTranslate(communityPath)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })

  return {
    ...(await sessionState),
    ...(await curCommunity),
  }
}

export const getServerSideProps = async (props) => {
  const { communityPath } = ssrParseURL(props.req)

  let resp
  try {
    resp = await fetchData(props)
  } catch (e) {
    const {
      response: { errors },
    } = e
    console.log('get errors: ', errors)
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    } else {
      return {
        props: {
          errorCode: 404,
          target: communityPath,
          viewing: {
            community: {
              raw: communityPath,
              title: communityPath,
              desc: communityPath,
            },
          },
        },
      }
    }
  }

  const { sessionState, community } = resp

  // // init state on server side
  const initProps = merge(
    {
      theme: {
        curTheme: parseTheme(sessionState),
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
      },
      route: {
        communityPath: community.raw,
        mainPath: community.raw,
      },
      viewing: {
        community,
      },
    },
    {},
  )

  return { props: { errorCode: null, ...initProps } }
}

const HelpCenterPage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.HELP_CENTER}`,
    title: '帮助中心 | xxx',
    description: 'xxx help-center',
  }

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.HELP_CENTER} seoConfig={seoConfig} noSidebar>
        <HelpCenterContent metric={METRIC.HELP_CENTER} />
      </GlobalLayout>
    </Provider>
  )
}

export default HelpCenterPage
