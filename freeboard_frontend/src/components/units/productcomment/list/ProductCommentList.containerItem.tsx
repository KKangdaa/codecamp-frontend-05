import * as A from './ProductCommentList.styles'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  FETCH_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from './ProductCommentList.queries'
import { IQuestionInput } from './ProductCommentList.types'

export default function ProductCommentListItem(props) {
  const router = useRouter()

  const [isEdits, setIsEdits] = useState(false)
  const [contents, setContents] = useState('')

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION)

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  const onClickUpdate = async (event) => {
    const VariablesQuestion: IQuestionInput = {}
    if (contents) VariablesQuestion.contents = contents

    // console.log(event)

    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: VariablesQuestion,
          useditemQuestionId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: { useditemId: router.query.productid, page: 1 },
          },
        ],
      })
      setIsEdits(false)
      Modal.success({
        content: '질문 수정이 완료되었습니다.',
      })
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }
  const onClickQuestionEdit = () => {
    setIsEdits(true)
  }

  return (
    <>
      {isEdits ? (
        <div>
          <input
            type="text"
            onChange={onChangeContents}
            defaultValue={props.el.contents}
          />
          <button id={props.el._id} onClick={onClickUpdate}>
            등록
          </button>
        </div>
      ) : (
        <A.QuestionContent>
          <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {props.el.contents}
          </div>
          <button onClick={props.onClickAnswer}>댓글</button>
          <button id={props.el._id} onClick={props.onClickDelete}>
            삭제
          </button>
          <button onClick={onClickQuestionEdit}>수정</button>
        </A.QuestionContent>
      )}
    </>
  )
}
