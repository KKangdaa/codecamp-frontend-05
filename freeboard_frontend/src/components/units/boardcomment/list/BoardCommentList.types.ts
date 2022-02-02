import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardCommentListUIProps {
  Head: any
  fetchCommentData?: any
  isModalVisible: boolean
  onToggleModal: () => void
  showModal: (event: MouseEvent<HTMLButtonElement>) => void
  onClickDeleteComment: (event: any) => void
  passwordTextBox: (event: ChangeEvent<HTMLInputElement>) => void

  onLoadMore: any

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  passwordText: string
  contentsText: string
}

export interface ICommentInput {
  contents?: string
  rating?: any
}
