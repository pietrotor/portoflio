import { ChangeEvent } from 'react'
import { IInputProps } from '../input.type'

function useInputState(props: IInputProps) {
  const { onChange } = props

  const handleChage = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return { handleChage }
}

export { useInputState }
