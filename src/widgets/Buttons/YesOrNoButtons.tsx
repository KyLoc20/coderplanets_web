import { FC } from 'react'

import { Space } from '@/widgets/Common'
import Button from './Button'

import { Wrapper, CancelBtn } from './styles/yes_or_no_buttons'

type TProps = {
  align?: 'center' | 'right'
  cancelText?: string
  confirmText?: string
  loading?: boolean
  disabled?: boolean
  onCancel?: () => void
  onConfirm?: () => void
}

const YesOrNoButton: FC<TProps> = ({
  align = 'center',
  cancelText = '取消',
  confirmText = '确定',
  onCancel = console.log,
  onConfirm = console.log,
  disabled = false,
  loading = false,
}) => {
  return (
    <Wrapper align={align}>
      {!loading && (
        <CancelBtn onClick={() => onCancel?.()}>{cancelText}</CancelBtn>
      )}
      <Space left={5} right={10} />

      <Button
        size="small"
        type="primary"
        loading={loading}
        disabled={disabled}
        onClick={() => onConfirm?.()}
      >
        {confirmText}
      </Button>
    </Wrapper>
  )
}

export default YesOrNoButton
