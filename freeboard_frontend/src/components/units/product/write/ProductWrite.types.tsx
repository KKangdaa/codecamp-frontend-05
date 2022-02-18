import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

export interface IEditProps {
  isEdit: boolean
  data?: any
}
export interface IData {
  name: string
  contents: string
  price: number
  remarks: string
}

export interface IProductNewUIProps {
  isEdit: boolean
  data?: any
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onClickEditSubmit: () => void
  onClickSubmit: () => void
  formState: FormState<FieldValues>
  register: UseFormRegister<FieldValues>
}
