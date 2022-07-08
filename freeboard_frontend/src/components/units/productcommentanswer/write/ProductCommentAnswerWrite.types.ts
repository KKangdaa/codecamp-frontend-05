export interface IProductCommentAnserWriteUIProps {
  contents: string
  onChangeContents: (e: any) => void
  onClickCreateComment: () => Promise<void>
}
