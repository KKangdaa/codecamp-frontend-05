import { UseFormRegisterReturn } from 'react-hook-form'
import styled from '@emotion/styled'

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  outline: 0;
  padding: 0 10px;
`

interface IInput01Props {
  type: string
  register: UseFormRegisterReturn
  maxLength: number
  // defaultValue: string
}

export default function Input01(props: IInput01Props) {
  return (
    <InputBox
      type={props.type}
      {...props.register}
      maxLength={props.maxLength}
    />
  )
}
