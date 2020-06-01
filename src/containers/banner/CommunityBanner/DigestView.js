import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD } from '@/config'
import { NON_FILL_COMMUNITY } from '@/constant'

import VerifiedSign from '@/components/VerifiedSign'
import Tabber from '@/components/Tabber'
import CommunityStatesPad from '@/components/CommunityStatesPad'
import { CommunityHolder } from '@/components/LoadingEffects'

import ExpandTexts from './ExpandTexts'
import SocialList from './SocialList'

import {
  Wrapper,
  InnerWrapper,
  BannerContentWrapper,
  TabberWrapper,
  CommunityWrapper,
  CommunityLogo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
} from './styles/digest_view'

import {
  tabberChange,
  onSubscribe,
  onUndoSubscribe,
  onShowEditorList,
  onShowSubscriberList,
} from './logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

const CommunityBrief = ({ content, descExpand }) => {
  return (
    <CommunityWrapper descExpand={descExpand}>
      <LogoWrapper raw={content.raw}>
        {content.logo ? (
          <CommunityLogo
            nonFill={contains(content.raw, NON_FILL_COMMUNITY)}
            src={content.logo}
            raw={content.raw}
            loading={<CommunityHolder text={content.raw} />}
          />
        ) : (
          <LogoHolder src={CommunityLogoHolder} />
        )}
      </LogoWrapper>
      <CommunityInfo>
        <TitleWrapper>
          <Title descExpand={descExpand}>
            <TitleText>{content.title}</TitleText>
            <VerifiedSign />
          </Title>
        </TitleWrapper>
        {/* <Desc>{content.desc}</Desc> */}
        <ExpandTexts descExpand={descExpand} />
        <SocialList />
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const DigestView = ({ community, descExpand, activeThread, layout }) => {
  return (
    <Wrapper descExpand={descExpand}>
      <InnerWrapper>
        <BannerContentWrapper descExpand={descExpand}>
          <CommunityBrief content={community} descExpand={descExpand} />
          <CommunityStatesPad
            community={community}
            onSubscribe={onSubscribe}
            onUndoSubscribe={onUndoSubscribe}
            onShowEditorList={onShowEditorList}
            onShowSubscriberList={onShowSubscriberList}
          />
          <TabberWrapper>
            <Tabber
              source={community.threads}
              onChange={tabberChange}
              active={activeThread}
              layout={layout}
              communityRaw={community.raw}
            />
          </TabberWrapper>
        </BannerContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(DigestView)
