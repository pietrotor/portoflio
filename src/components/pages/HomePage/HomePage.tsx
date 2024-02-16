import { ClientLayout } from '@components/layouts'
import {
  Contact,
  Presentation,
  Projects,
  WorkExperience
} from '@components/organisms'

function HomePage() {
  return (
    <ClientLayout>
      <Presentation />
      <WorkExperience />
      <Projects />
      <div className="w-full pb-24">
        <Contact />
      </div>
    </ClientLayout>
  )
}

export { HomePage }
