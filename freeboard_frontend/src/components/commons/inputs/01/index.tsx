import { UseFormRegisterReturn } from 'react-hook-form'

interface IInput01Props {
  type: string
  register: UseFormRegisterReturn
  maxLength: number
  defaultValue: string
}

export default function Input01(props: IInput01Props) {
  return (
    <input
      type={props.type}
      {...props.register}
      maxLength={props.maxLength}
      defaultValue={props.defaultValue}
    />
  )
}