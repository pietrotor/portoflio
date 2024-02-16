import { Badge, Button } from '@components/atoms'
import { IProjectCard } from './ProjectCard.types'

function ProjectCard({
  href,
  image,
  title,
  description,
  technologies = []
}: IProjectCard) {
  return (
    <article className="group relative h-full max-h-full w-full cursor-pointer overflow-hidden rounded-2xl">
      <img
        src={
          image || 'https://alexisdev.vercel.app/projects/clinic/preview.png'
        }
        className="h-full w-full object-cover"
      />
      <div className="to absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-gradient-to-b from-black/5 to-black/60 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-8">
        <div className="flex w-full justify-end">
          {!!href && (
            <Button className="!w-fit !rounded-full">See details</Button>
          )}
        </div>
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <Badge key={idx}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export { ProjectCard }
