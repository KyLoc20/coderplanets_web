import React from 'react'
import { contains } from 'ramda'
import { Waypoint } from 'react-waypoint'

import { ICON_CMD } from '@/config'
import { HCN, NON_FILL_COMMUNITY } from '@/constant'
import { useDevice } from '@/hooks'

import VerifiedSign from '@/components/VerifiedSign'
import TabBar from '@/components/TabBar'
import CommunityStatesPad from '@/components/CommunityStatesPad'
import { CommunityHolder } from '@/components/LoadingEffects'

import ExpandTexts from '../../ExpandTexts'
import SocialList from '../../SocialList'

import {
  Wrapper,
  InnerWrapper,
  BannerContentWrapper,
  CommunityBaseInfo,
  TabBarWrapper,
  CommunityWrapper,
  CommunityLogo,
  LogoWrapper,
  CommunityInfo,
  TitleWrapper,
  Title,
  TitleText,
  LogoHolder,
} from '../../styles/digest_view/column_view'

import {
  tabOnChange,
  onShowEditorList,
  onShowSubscriberList,
  setViewport,
} from '../../logic'

const CommunityLogoHolder = `${ICON_CMD}/community_logo_holder.svg`

// 没有各种外链接，打赏信息等的官方社区
const NON_STANDARD_COMMUNITIES = [HCN, 'feedback']

const CommunityBrief = ({ content, descExpand }) => {
  return (
    <CommunityWrapper descExpand={descExpand}>
      <LogoWrapper raw={content.raw}>
        {content.logo ? (
          <CommunityLogo
            isSmall={contains(content.raw, NON_STANDARD_COMMUNITIES)}
            nonFill={contains(content.raw, NON_FILL_COMMUNITY)}
            src={content.logo}
            raw={content.raw}
            loading={<CommunityHolder text={content.raw} />}
          />
        ) : (
          <LogoHolder src={CommunityLogoHolder} />
        )}
      </LogoWrapper>
      <CommunityInfo descExpand={descExpand}>
        <TitleWrapper>
          <Title descExpand={descExpand}>
            <TitleText>{content.title}</TitleText>
            <VerifiedSign />
          </Title>
        </TitleWrapper>
        {/* <Desc>{content.desc}</Desc> */}
        <ExpandTexts descExpand={descExpand} />
        {content.raw !== HCN && <SocialList />}
      </CommunityInfo>
    </CommunityWrapper>
  )
}

const ColumnView = ({
  community,
  descExpand,
  activeThread,
  layout,
  metric,
}) => {
  const { isMobile } = useDevice()

  return (
    <Wrapper
      descExpand={descExpand}
      noSocial={contains(community.raw, NON_STANDARD_COMMUNITIES)}
      isMobile={isMobile}
    >
      <InnerWrapper
        metric={metric}
        descExpand={descExpand}
        noSocial={contains(community.raw, NON_STANDARD_COMMUNITIES)}
        isMobile={isMobile}
      >
        <BannerContentWrapper descExpand={descExpand}>
          <CommunityBaseInfo>
            <CommunityBrief content={community} descExpand={descExpand} />
            <CommunityStatesPad
              community={community}
              onShowEditorList={onShowEditorList}
              onShowSubscriberList={onShowSubscriberList}
            />
          </CommunityBaseInfo>
          <TabBarWrapper>
            <TabBar
              source={community.threads}
              onChange={tabOnChange}
              active={activeThread}
              layout={layout}
              communityRaw={community.raw}
            />
          </TabBarWrapper>
        </BannerContentWrapper>
      </InnerWrapper>
      <Waypoint
        onEnter={() => setViewport(true)}
        onLeave={() => setViewport(false)}
      />
    </Wrapper>
  )
}

export default React.memo(ColumnView)
