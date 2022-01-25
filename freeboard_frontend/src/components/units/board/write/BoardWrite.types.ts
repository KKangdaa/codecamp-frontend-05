import { ChangeEvent } from 'react'

export interface IBoardWriteProps {
  isEdit: boolean
  data?: any
}

export interface IBoardWriteUIProps {
  data?: any
  isEdit: boolean
  writerError: string
  writerText: (event: ChangeEvent<HTMLInputElement>) => void
  passwordError: string
  passwordText: (event: ChangeEvent<HTMLInputElement>) => void
  titleError: string
  titleText: (event: ChangeEvent<HTMLInputElement>) => void
  contentsError: string
  contentsText: (event: ChangeEvent<HTMLTextAreaElement>) => void
  UpdateButton: () => void
  CreateButton: () => void
  buttonActive: boolean

  youtubeUrlText: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IButtonActive {
  buttonActive: boolean
}
