import { useTextAreaState } from './hooks'
import { ITextAreaProps } from './textArea.type'

function TextArea(props: ITextAreaProps) {
  const { placeholder, value, ...fields } = props

  const { handleChage } = useTextAreaState(props)

  return (
    <textarea
      {...fields}
      placeholder={placeholder}
      onChange={handleChage}
      value={value}
      rows={5}
      className="duration-400 w-full appearance-none rounded-lg bg-primary-light px-3 py-2 outline-none transition-all placeholder:text-tertiary focus:outline-tertiary"
    />
  )
}

export { TextArea }
