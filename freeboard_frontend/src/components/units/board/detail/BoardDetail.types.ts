import { ChangeEvent } from 'react'

export interface IBoardDetailUIProps {
  fetchBoardData?: any
  onClickEditPage: () => void
  onClickDelete: () => void
  onClickListPage: () => void
  CreateCommentButton: () => void
  onClickLike: () => void
  commentButtonAc: boolean

  fetchCommentData?: any
  commentWriterBox: (event: ChangeEvent<HTMLInputElement>) => void
  commentPasswordBox: (event: ChangeEvent<HTMLInputElement>) => void
  commentContentsBox: (event: ChangeEvent<HTMLTextAreaElement>) => void

  onClickDeleteComment: (event: any) => void
}

export interface IButtonProps {
  commentButtonActive: boolean
}
