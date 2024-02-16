import { Button, ButttonVariantsEnum, Input, TextArea } from '@components/atoms'
import { useContactState } from './hooks'
import { Controller, get } from 'react-hook-form'

function Contact() {
  const {
    form: {
      control,
      formState: { errors }
    },
    formRef,
    onSubmit,
    isLoading,
    successMessage
  } = useContactState()

  const errorName = get(errors, 'from_name')
  const errorEmail = get(errors, 'email')
  const errorMessage = get(errors, 'message')

  return (
    <div className="w-full" id="contact">
      <h2 className="mb-5">Contact me</h2>
      <div className="flex w-full flex-col gap-10 md:flex-row">
        <div className="w-full md:max-w-[500px]">
          <p>
            Feel free to contact me any time. I will get back to you as soon as
            I can!
          </p>
          <p className="mt-4 font-bold text-white">Email</p>
          <p>torricopietro@gmail.com</p>
        </div>
        <form className="w-full space-y-4" onSubmit={onSubmit} ref={formRef}>
          <div className="flex w-full gap-5">
            <div className="w-full">
              <Controller
                control={control}
                name="from_name"
                rules={{
                  required: 'Campo requerido'
                }}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder="Name"
                  />
                )}
              />
              {!!errorName && (
                <span className="text-sm text-red-600">
                  {errorName.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Campo requerido',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email not valid'
                  }
                }}
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    name={name}
                    onChange={onChange}
                    value={value}
                    placeholder="Email"
                  />
                )}
              />
              {!!errorEmail && (
                <span className="text-sm text-red-600">
                  {errorEmail.message}
                </span>
              )}
            </div>
          </div>
          <div className="w-full">
            <Controller
              control={control}
              name="message"
              rules={{
                required: 'Campo requerido'
              }}
              render={({ field: { onChange, value, name } }) => (
                <TextArea
                  name={name}
                  onChange={onChange}
                  value={value}
                  placeholder="Message"
                />
              )}
            />
            {!!errorMessage && (
              <span className="text-sm text-red-600">
                {errorMessage.message}
              </span>
            )}
          </div>
          {successMessage && (
            <div className="bg-green-600 p-4 font-bold">
              <p className="text-white">Your message was sent successfully</p>
            </div>
          )}
          <Button
            isLoading={isLoading}
            type="submit"
            variant={ButttonVariantsEnum.SECONDARY}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export { Contact }
