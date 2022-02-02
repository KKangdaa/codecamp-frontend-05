import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
  isEdit: boolean
  data?: any
}

export interface IBoardWriteUIProps {
  data?: any
  isEdit: boolean
  writerError: string
  passwordError: string
  titleError: string
  contentsError: string
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  UpdateButton: () => void
  CreateButton: () => void
  buttonActive: boolean

  isModalVisible: boolean
  onToggleModal: () => void
  onCompleteDaumPostcode: (data: any) => void
  address: string
  zipcode: string

  addressDetail?: string
  addressDetailText?: any

  successModal: () => void

  youtubeUrlText: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IButtonActive {
  buttonActive: boolean
}

export interface ITextInput {
  title?: string
  contents?: string
  youtubeUrl?: any
  boardAddress?: {
    zipcode?: string
    address?: string
    addressDetail?: any
  }
}
