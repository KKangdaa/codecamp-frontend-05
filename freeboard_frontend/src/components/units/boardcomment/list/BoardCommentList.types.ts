import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardCommentListUIProps {
  Head: any
  fetchCommentData?: any
  onClickDeleteComment: (event: any) => void
  isModalVisible: boolean
  onToggleModal: () => void
  showModal: (event: MouseEvent<HTMLButtonElement>) => void
  onLoadMore: any
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  passwordText: string

  // passwordTextBox: (event: ChangeEvent<HTMLInputElement>) => void
  // onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  // contentsText: string
}

export interface ICommentInput {
  contents?: string
  rating?: any
}
