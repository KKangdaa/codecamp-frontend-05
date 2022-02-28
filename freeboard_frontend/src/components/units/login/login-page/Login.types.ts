import { ChangeEvent } from 'react'

export interface ILoginUIProps {
  isActive: boolean
  errorEmail: string
  errorPassword: string
  onChangeUserEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeUserPassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickLogin: () => void
  onclickSignUp: () => void
  onClickMoveToHome: () => void
}
