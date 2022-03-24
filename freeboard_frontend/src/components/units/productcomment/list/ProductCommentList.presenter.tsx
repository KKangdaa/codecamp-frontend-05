import * as A from './ProductCommentList.styles'
import CommentAnswerListItem from '../../productcommentanswer/detail/ProductCommentAnswerDetail.presenter'

export default function ProductCommentListUI(props) {
  return (
    <A.ListWrapper>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <A.UserName>{el.user.name}</A.UserName>
          <CommentAnswerListItem el={el} onClickDelete={props.onClickDelete} />
        </div>
      ))}
    </A.ListWrapper>
  )
}
