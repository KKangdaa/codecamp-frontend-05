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
  // idText: string
  // passwordText: string
  commentEditWriterBox: (event: ChangeEvent<HTMLInputElement>) => void
}
