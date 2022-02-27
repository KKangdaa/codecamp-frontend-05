import { useState } from 'react'
import ProductCommentListItem from '../../productcomment/list/ProductCommentList.containerItem'
import Answer from './ProductCommentAnswerDetail.container'

export default function CommentAnswerListItem(props) {
  const [isAnswer, setIsAnswer] = useState(false)

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev)
  }

  return (
    <>
      <ProductCommentListItem
        el={props.el}
        onClickDelete={props.onClickDelete}
        onClickAnswer={onClickAnswer}
      />
      <Answer useditemQuestionId={props.el._id} isAnswer={isAnswer} />
    </>
  )
}
