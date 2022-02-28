import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import { ICreateUseditemInput } from '../../../../commons/types/generated/types'

export interface IEditProps {
  isEdit: boolean
  data?: any
}
export interface IData {
  name: string
  contents: string
  price: number
  remarks: string
  images: string[]
}

export interface IProductNewUIProps {
  isEdit: boolean
  data?: any
  images?: string[]
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onClickEditSubmit: () => void
  onClickSubmit: () => void
  formState: FormState<FieldValues>
  register: UseFormRegister<FieldValues>
}

export interface IFormValues extends ICreateUseditemInput {
  name: string
  contents: string
  price: number
  remarks: string
  tags?: string[] | undefined
  category?: string | undefined
  images: string[] | undefined
}
