import { ProjectCard } from '@components/molecules'

type TProject = {
  href: string
  image: string
  title: string
  description: string
  technologies: string[]
}

type TCardProject = {
  size: number
  project: TProject
}

const PROJECTS: TCardProject[][] = [
  [
    {
      size: 550,
      project: {
        href: 'https://ferroblack.com/',
        description:
          'An ecommerce platform with integrated quoting system for streamlined product requests and efficient administrative management.',
        image: '/assets/Home/Ferroblack.png',
        technologies: ['NextJs', 'React', 'Redux', 'Apollo'],
        title: 'Ferroblack'
      }
    },
    {
      size: 650,
      project: {
        href: 'https://neoled-bol.com/',
        description: '',
        image: '/assets/Home/neoledecommerce.png',
        technologies: ['NextJs', 'React', 'Redux', 'Typescript'],
        title: 'NeoLed'
      }
    }
  ],
  [
    {
      size: 420,
      project: {
        href: 'https://anft.tech/',
        description:
          'First real estate investment platform in Bolivia completely online, connected with Web 3, Blockchain and smart contracts',
        image: '/assets/Home/Anft.png',
        technologies: ['NextJs', 'React', 'Redux', 'Typescript'],
        title: 'ANFT'
      }
    },
    {
      size: 500,
      project: {
        href: 'https://www.clinicalosangeles.com.bo/',
        description:
          'Created "Los Angeles Clinic" digital presence: a customized website with comprehensive company info, paired with an intuitive internal system for doctor scheduling, enhancing clinic efficiency and patient care.',
        image: '/assets/Home/Clinica_angeles.png',
        technologies: [
          'NextJs',
          'React',
          'Redux',
          'Apollo',
          'Graphql',
          'MySql'
        ],
        title: 'Clinica Los Angeles'
      }
    },
    {
      size: 340,
      project: {
        href: 'https://el-sao-erp.vercel.app/',
        description:
          'Point of sale system, with multi-branch sales record with inventory record, product production and quote for events',
        image: '/assets/Home/el_sao.png',
        technologies: [
          'NextJs',
          'React',
          'Redux',
          'Typescript',
          'Graphql',
          'Node',
          'Express',
          'MongoDb'
        ],
        title: 'El Sao'
      }
    }
  ]
]

function Projects() {
  return (
    <>
      <div className="mt-16 pb-16">
        <h2>Recent Projects</h2>
        <div className="mt-10 hidden flex-col gap-5 md:flex md:flex-row">
          {PROJECTS.map((card, index) => (
            <div className="flex-1 space-y-5" key={index}>
              {card.map((project, index) => (
                <div style={{ height: `${project.size}px` }} key={index}>
                  <ProjectCard
                    href={project.project.href}
                    image={project.project.image}
                    description={project.project.description}
                    title={project.project.title}
                    technologies={project.project.technologies}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 md:hidden md:flex-row">
          {PROJECTS.map((card, index) => (
            <div className="flex-1 space-y-5" key={index}>
              {card.map((project, index) => (
                <div className="h-96" key={index}>
                  <ProjectCard
                    href={project.project.href}
                    image={project.project.image}
                    title={project.project.title}
                    technologies={project.project.technologies}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  )
}

export { Projects }
