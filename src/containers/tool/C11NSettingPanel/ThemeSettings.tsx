import { FC, memo } from 'react'

import type { TThemeName } from '@/spec'
import ThemeSelector from '@/widgets/ThemeSelector'
import NoticeBar from '@/widgets/NoticeBar'

import { Wrapper } from './styles/theme_settings'
// import { changeTheme } from './logic'

type TProps = {
  curTheme: TThemeName
}

const ThemeSettings: FC<TProps> = ({ curTheme }) => {
  return (
    <Wrapper>
      <NoticeBar
        type="info"
        content="目前仅开放了 Solarized 主题，其他主题调试中。"
        bottom={25}
      />

      <ThemeSelector
        curTheme={curTheme}
        changeTheme={() => console.log}
        displayStyle="gallery"
      />
    </Wrapper>
  )
}

export default memo(ThemeSettings)
