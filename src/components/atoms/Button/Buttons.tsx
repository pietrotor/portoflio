import clsx from 'clsx'
import { ButttonVariantsEnum, IButtonProps } from './button.types'
import { BUTTON_COMMON_STYLES, BUTTON_VARIANT_STYLES } from './constants'
import Loader from '../Spinner/Spinner'

function Button({
  children,
  type = 'button',
  variant = ButttonVariantsEnum.PRIMARY,
  className = '',
  isLoading = false,
  onClick
}: IButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={clsx(
        BUTTON_COMMON_STYLES,
        BUTTON_VARIANT_STYLES[variant],
        isLoading && '',
        className
      )}
    >
      <Loader isHidden={!isLoading} />
      {children}
    </button>
  )
}

export { Button }
