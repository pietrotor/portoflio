export enum TechBadgeEnum {
  REACT = 'react',
  NEXTJS = 'nextjs',
  NODEJS = 'nodejs',
  EXPRESS = 'express',
  MONGODB = 'mongodb',
  POSTGRES = 'postgres',
  NESTJS = 'nestjs',
  STORYBOOK = 'storybook',
  MUI = 'mui',
  REDUX = 'redux',
  AWS = 'aws',
  TAILWIND = 'tailwind',
  ZUSTAND = 'zustand',
  BLOCKCHAIN = 'blockchain',
  METAMASK = 'metamask',
  GRAPHQL = 'graphql',
  ANGULAR = 'angular'
}

const TECH_NAME = {
  [TechBadgeEnum.REACT]: 'React',
  [TechBadgeEnum.NEXTJS]: 'NextJs',
  [TechBadgeEnum.NODEJS]: 'NodeJs',
  [TechBadgeEnum.EXPRESS]: 'Express',
  [TechBadgeEnum.MONGODB]: 'MongoDB',
  [TechBadgeEnum.POSTGRES]: 'PostgreSql',
  [TechBadgeEnum.NESTJS]: 'NestJs',
  [TechBadgeEnum.STORYBOOK]: 'Storybook',
  [TechBadgeEnum.MUI]: 'MUI',
  [TechBadgeEnum.REDUX]: 'Redux',
  [TechBadgeEnum.AWS]: 'AWS',
  [TechBadgeEnum.TAILWIND]: 'Tailwind',
  [TechBadgeEnum.ZUSTAND]: 'Zustand',
  [TechBadgeEnum.BLOCKCHAIN]: 'Blockchain',
  [TechBadgeEnum.METAMASK]: 'Metamask',
  [TechBadgeEnum.GRAPHQL]: 'GraphQL',
  [TechBadgeEnum.ANGULAR]: 'Angular'
}

const TECH_IMAGES = {
  [TechBadgeEnum.REACT]: '/assets/logos_tech/react.webp',
  [TechBadgeEnum.NEXTJS]: '/assets/logos_tech/nextjs.png',
  [TechBadgeEnum.NODEJS]: '/assets/logos_tech/node.png',
  [TechBadgeEnum.EXPRESS]: '/assets/logos_tech/express.png',
  [TechBadgeEnum.MONGODB]: '/assets/logos_tech/mongo.png',
  [TechBadgeEnum.POSTGRES]: '/assets/logos_tech/postgresql.webp',
  [TechBadgeEnum.NESTJS]: '/assets/logos_tech/nestjs.png',
  [TechBadgeEnum.STORYBOOK]: '/assets/logos_tech/storybook.png',
  [TechBadgeEnum.MUI]: '/assets/logos_tech/mui.png',
  [TechBadgeEnum.REDUX]: '/assets/logos_tech/redux.png',
  [TechBadgeEnum.AWS]: '/assets/logos_tech/aws.webp',
  [TechBadgeEnum.TAILWIND]: '/assets/logos_tech/tailwind.png',
  [TechBadgeEnum.ZUSTAND]: '/assets/logos_tech/zustand.png',
  [TechBadgeEnum.BLOCKCHAIN]: '/assets/logos_tech/blockchain.png',
  [TechBadgeEnum.METAMASK]: '/assets/logos_tech/metamask.png',
  [TechBadgeEnum.GRAPHQL]: '/assets/logos_tech/graphql.png',
  [TechBadgeEnum.ANGULAR]: '/assets/logos_tech/angular.webp'
}

type TechBadgeProps = {
  tech: TechBadgeEnum
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <p className="flex items-center gap-2 rounded-full bg-black px-3 py-1 text-sm font-bold text-white">
      <img src={TECH_IMAGES[tech]} className="h-4 w-4" />
      {TECH_NAME[tech]}
    </p>
  )
}
