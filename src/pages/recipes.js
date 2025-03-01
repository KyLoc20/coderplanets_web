import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, METRIC } from '@/constant'

import { getJwtToken, makeGQClient, ssrRescue, parseTheme } from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import RecipesContent from '@/containers/content/RecipesContent'
import { useStore } from '@/stores/init'

const loader = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)

  const sessionState = gqClient.request(P.sessionState)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (props) => {
  let resp
  try {
    resp = await loader(props)
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await loader(props, { tokenExpired: true })
    }
  }

  const { sessionState, subscribedCommunities } = resp
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const RecipesPage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.RECIPES}`,
    title: '代码片段 | coderplanets',
    description: '各种语言框架的代码片段和速查手册',
  }

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.RECIPES} seoConfig={seoConfig} noSidebar>
        <RecipesContent />
      </GlobalLayout>
    </Provider>
  )
}

export default RecipesPage
