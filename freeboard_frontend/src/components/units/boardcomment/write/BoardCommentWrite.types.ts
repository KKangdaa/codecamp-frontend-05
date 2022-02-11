import { ChangeEvent } from 'react'

export interface IBoardCommentWriteUIProps {
  data?: any
  commentWriter: string
  commentPassword: string
  commentContents: string
  commentButtonAc: boolean
  CreateCommentButton: () => void
  commentWriterBox: (event: ChangeEvent<HTMLInputElement>) => void
  commentPasswordBox: (event: ChangeEvent<HTMLInputElement>) => void
  commentContentsBox: (event: ChangeEvent<HTMLTextAreaElement>) => void
  star: number
  handleChange: any
}

export interface IButtonProps {
  commentButtonActive: boolean
}
