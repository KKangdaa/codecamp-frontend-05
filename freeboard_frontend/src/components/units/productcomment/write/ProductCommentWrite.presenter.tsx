import * as A from './ProductCommentWrite.styles'

export default function ProductCommentWriteUI(props) {
  return (
    <A.CommentWrapper>
      <A.UserInfo>
        <A.UserImg
          src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
          onError={(e) => {
            e.currentTarget.src = '/images/product-icon.png'
          }}
        />
        <A.UserName>{props.data?.fetchUserLoggedIn.name}</A.UserName>
      </A.UserInfo>
      <textarea onChange={props.onChangeContents} value={props.contents} />
      <A.CreateComment>
        <button onClick={props.onClickCreateComment}>등록</button>
      </A.CreateComment>
    </A.CommentWrapper>
  )
}
