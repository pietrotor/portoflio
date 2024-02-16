import { useInputState } from './hooks'
import { IInputProps } from './input.type'

function Input(props: IInputProps) {
  const { value, placeholder, ...fields } = props

  const { handleChage } = useInputState(props)

  return (
    <input
      {...fields}
      type="text"
      value={value}
      onChange={handleChage}
      placeholder={placeholder}
      className="duration-400 w-full appearance-none rounded-lg bg-primary-light px-3 py-2 outline-none transition-all placeholder:text-tertiary focus:outline-tertiary"
    />
  )
}

export { Input }
