import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'

type TContactForm = {
  from_name: string
  email: string
  message: string
}

function useContactState() {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const form = useForm<TContactForm>()

  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false)
      }, 3500)
    }
  }, [successMessage])

  const onSubmit = form.handleSubmit(() => {
    setIsLoading(true)
    emailjs
      .sendForm('service_grwndjt', 'template_84k0uay', formRef.current as any, {
        publicKey: 'j6dOO-McKn9P0p-OZ'
      })
      .then(
        () => {
          console.log('SUCCESS!')
          form.reset({
            email: '',
            from_name: '',
            message: ''
          })
          setIsLoading(false)
          setSuccessMessage(true)
        },
        error => {
          console.log('FAILED...', error.text)
          setIsLoading(false)
        }
      )
  })

  return {
    form,
    formRef,
    onSubmit,
    isLoading,
    successMessage
  }
}

export { useContactState }
