import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  FETCH_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from './ProductCommentAnswerList.queries'
import { IAnswerInput } from './ProductCommentAnswerList.types'

export default function ProductCommentAnswerListItem(props) {
  const router = useRouter()

  const [isEdits, setIsEdits] = useState(false)
  const [contents, setContents] = useState('')

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  )

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  const onClickUpdate = async (event) => {
    const VariablesAnswer: IAnswerInput = {}
    if (contents) VariablesAnswer.contents = contents

    // console.log(event)

    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: VariablesAnswer,
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: { useditemQuestionId: router.query.productid, page: 1 },
          },
        ],
      })
      setIsEdits(false)
      Modal.success({
        content: '답변 수정이 완료되었습니다.',
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
        <div style={{ border: '1px solid black' }}>
          내용:{' '}
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
        <div style={{ border: '1px solid black' }}>
          <div>{props.el.contents}</div>
          <button id={props.el._id} onClick={props.onClickDelete}>
            삭제
          </button>
          <button onClick={onClickQuestionEdit}>수정</button>
        </div>
      )}
    </>
  )
}
