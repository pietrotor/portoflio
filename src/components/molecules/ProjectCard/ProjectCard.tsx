import { Button, TechBadge, TechBadgeEnum } from '@components/atoms'
import { IProjectCard } from './ProjectCard.types'
import { motion } from 'framer-motion'

function ProjectCard({
  href,
  image,
  title,
  description,
  technologies = [],
  position = 'left'
}: IProjectCard) {
  return (
    <motion.div
      className="h-full max-h-full overflow-hidden"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: position !== 'left' ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}
    >
      <article className="group relative h-full max-h-full w-full cursor-pointer overflow-hidden rounded-2xl">
        <img
          src={
            image || 'https://alexisdev.vercel.app/projects/clinic/preview.png'
          }
          className="h-full w-full object-cover"
        />
        <div className="to absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-gradient-to-b from-black/60 to-black/90 p-6 opacity-0 transition-all duration-700 group-hover:opacity-100 md:p-8">
          <div className="flex w-full justify-end">
            {!!href && (
              <a href={href} target="_blank">
                <Button className="!w-fit !rounded-full">See details</Button>
              </a>
            )}
          </div>
          <div>
            <h5>{title}</h5>
            <p className="text-base">{description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <TechBadge key={idx} tech={tech as TechBadgeEnum} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  )
}

export { ProjectCard }
