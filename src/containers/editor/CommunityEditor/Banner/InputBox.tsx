import { FC, memo, useRef } from 'react'

import type { TInput } from '@/spec'
import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from '../styles/banner/input_box'

type TProps = {
  showMask?: boolean
  placeholder?: string
  value?: string
  onChange: (e: TInput) => void
  onBlur?: () => void
}

const InputBox: FC<TProps> = ({
  showMask = false,
  placeholder = '',
  value = '',
  onChange,
  onBlur = console.log,
}) => {
  const ref = useRef(null)

  return (
    <Wrapper>
      <InputWrapper>
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
          onChange={(e) => onChange(e)}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          autoFocus
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default memo(InputBox)
