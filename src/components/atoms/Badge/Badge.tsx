import clsx from 'clsx'
import { IBadgePropos } from './Badge.types'

function Badge({ children, className }: IBadgePropos) {
  return (
    <div
      className={clsx(
        'w-fit rounded-full bg-primary px-3 py-1 text-sm md:text-base',
        className
      )}
    >
      {children}
    </div>
  )
}

export { Badge }
