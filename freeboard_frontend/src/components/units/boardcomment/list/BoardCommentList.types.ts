import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardCommentListUIProps {
  fetchCommentData?: any
  isModalVisible: boolean
  showModal: (event: MouseEvent<HTMLButtonElement>) => void
  passwordTextBox: (event: ChangeEvent<HTMLInputElement>) => void
  onToggleModal: () => void
  onClickDeleteComment: (event: any) => void
  Head: any

  onLoadMore: any

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  passwordText: string
  contentsText: string
  // commentEditWriterBox: (event: ChangeEvent<HTMLInputElement>) => void
}
