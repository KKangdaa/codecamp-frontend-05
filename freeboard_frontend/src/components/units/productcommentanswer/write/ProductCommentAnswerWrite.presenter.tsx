import * as A from './ProductCommentAnswerWrite.styles'
import { IProductCommentAnserWriteUIProps } from './ProductCommentAnswerWrite.types'

export default function ProductCommentAnserWriteUI(
  props: IProductCommentAnserWriteUIProps
) {
  return (
    <A.CommentWrapper>
      <textarea
        onChange={props.onChangeContents}
        value={props.contents}
        placeholder={'답변'}
      />
      <button onClick={props.onClickCreateComment}>등록</button>
    </A.CommentWrapper>
  )
}
