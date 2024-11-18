import { Button, ButttonVariantsEnum } from '@components/atoms'

function Presentation() {
  const downloadFile = () => {
    try {
      const filePath = '/assets/pietro_torrico_cv.pdf'
      const fileName = 'Pietro Torrico - Curriculum.pdf'

      fetch(filePath)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob)
          const downloadLink = document.createElement('a')
          downloadLink.href = url
          downloadLink.download = fileName
          document.body.appendChild(downloadLink)
          downloadLink.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(downloadLink)
        })
        .catch(error => {
          console.error('Error downloading file:', error)
        })
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }
  return (
    <div className="m-auto flex max-w-4xl flex-col items-center gap-16 pt-20 md:flex-row">
      <img src="/assets/me.jpg" className="h-72 w-72 rounded-full" />
      <div>
        <h1 className="text-[75px]">
          Hi, I'm <span className="text-secondary">Pietro</span>
        </h1>
        <h3 className="font-medium">Fullstack Developer</h3>
        <p>
          Developer with{' '}
          <span className="font-semibold text-white">3 year of experience</span>
          , from Bolivia. Committed about creating user experiences and web
          applications. Dedicated to delivering exceptional results and
          maintaining meticulous attention to detail in all my work.
        </p>
        <div className="mt-4 flex gap-4">
          <Button
            onClick={downloadFile}
            variant={ButttonVariantsEnum.SECONDARY}
          >
            Dowload CV
          </Button>
          <a href={'/#contact'} className="w-full">
            <Button>Contact</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export { Presentation }
