import { IButtonProps } from "./button.types";

function Button({  children, type = 'button' }: IButtonProps) {
  return (
    <button type={type} className="">
      {children}
    </button>
  )
}

export { Button };
