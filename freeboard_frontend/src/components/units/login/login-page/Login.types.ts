import { ChangeEvent } from 'react'

export interface ILoginUIProps {
  isActive: boolean
  errorUserEmail: string
  errorUserPassword: string
  onChangeUserEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeUserPassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickLogin: () => void
  onclickSignUp: () => void
}
