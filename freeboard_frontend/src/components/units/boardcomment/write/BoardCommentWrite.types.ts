import { ChangeEvent } from 'react'

export interface IBoardCommentWriteUIProps {
  data?: any
  CreateCommentButton: () => void
  commentButtonAc: boolean
  commentWriterBox: (event: ChangeEvent<HTMLInputElement>) => void
  commentPasswordBox: (event: ChangeEvent<HTMLInputElement>) => void
  commentContentsBox: (event: ChangeEvent<HTMLTextAreaElement>) => void
  commentContents: string
  star: any
  handleChange: any
}

export interface IButtonProps {
  commentButtonActive: boolean
}
