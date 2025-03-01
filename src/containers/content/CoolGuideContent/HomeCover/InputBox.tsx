import { FC, useRef, memo } from 'react'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from '../styles/home_cover/input_box'

type TProps = {
  showMask?: boolean
  placeholder?: string
  value?: string
  autoFocus?: boolean
  noRound?: boolean

  onChange?: (e) => void
  onBlur?: () => void
}

const InputBox: FC<TProps> = ({
  showMask = false,
  value = '',
  placeholder = '',
  autoFocus = false,
  onChange = console.log,
  onBlur = console.log,
  noRound = false,
}) => {
  const ref = useRef(null)

  return (
    <Wrapper>
      <InputWrapper noRound={noRound}>
        <InputMask
          show={showMask}
          onClick={() => {
            ref.current.focus()
          }}
        >
          <MaskNumer>--</MaskNumer> xxx
        </InputMask>
        <InputBar
          ref={ref}
          onChange={onChange}
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default memo(InputBox)
