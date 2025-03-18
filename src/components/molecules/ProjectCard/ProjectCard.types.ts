interface IProjectCard {
  href: string
  image: string
  title: string
  description?: string
  technologies?: string[]
  position?: 'left' | 'right'
}

export type { IProjectCard }
