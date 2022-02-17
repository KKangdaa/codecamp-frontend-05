import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

export interface IData {
  name: string
  contents: string
  price: number
  remarks: string
  // seller: string
}

export interface IProductNewUIProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onClickSubmit: (data: IData) => Promise<void>
  formState: FormState<FieldValues>
  register: UseFormRegister<FieldValues>
}
