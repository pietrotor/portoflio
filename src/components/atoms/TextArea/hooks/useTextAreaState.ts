import { ChangeEvent } from 'react'
import { ITextAreaProps } from '../textArea.type'

function useTextAreaState(props: ITextAreaProps) {
  const { onChange } = props

  const handleChage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return { handleChage }
}

export { useTextAreaState }
