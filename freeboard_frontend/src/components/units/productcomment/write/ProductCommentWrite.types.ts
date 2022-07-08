export interface IProductCommentWriteUIProps {
  userInfo: any
  onChangeContents: (e: any) => void
  contents: string
  onClickCreateComment: () => Promise<void>
}
