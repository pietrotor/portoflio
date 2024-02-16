import { ButttonVariantsEnum } from '../button.types'

const BUTTON_COMMON_STYLES =
  'rounded-md w-full py-3 px-5 text-white text-md transition-all duration-500 font-medium'

const BUTTON_VARIANT_STYLES = {
  [ButttonVariantsEnum.PRIMARY]:
    'bg-primary-light hover:bg-primary-light/70 text-tertiary disabled:bg-primary-light/60',
  [ButttonVariantsEnum.SECONDARY]:
    'bg-secondary hover:bg-secondary/80 text-black disabled:bg-secondary/60'
}

export { BUTTON_COMMON_STYLES, BUTTON_VARIANT_STYLES }
