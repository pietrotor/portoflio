import { HTMLProps } from 'react'

interface IButtonProps {
  type?: 'button' | 'submit'
  children: React.ReactNode
  variant?: ButttonVariantsEnum
  className?: HTMLProps<HTMLElement>['className']
  onClick?: () => void
  isLoading?: boolean
}

enum ButttonVariantsEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export { ButttonVariantsEnum }

export type { IButtonProps }
