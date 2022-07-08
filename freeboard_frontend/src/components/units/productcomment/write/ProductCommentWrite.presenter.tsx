import * as A from './ProductCommentWrite.styles'
import { IProductCommentWriteUIProps } from './ProductCommentWrite.types'

export default function ProductCommentWriteUI(
  props: IProductCommentWriteUIProps
) {
  return (
    <A.CommentWrapper>
      <A.UserInfo>
        <A.UserImg
          src={`https://storage.googleapis.com/${props.userInfo?.picture}`}
          onError={(e) => {
            e.currentTarget.src = '/images/product-icon.png'
          }}
        />
        <A.UserName>{props.userInfo?.name}</A.UserName>
      </A.UserInfo>
      <textarea onChange={props.onChangeContents} value={props.contents} />
      <A.CreateComment>
        <button onClick={props.onClickCreateComment}>등록</button>
      </A.CreateComment>
    </A.CommentWrapper>
  )
}
