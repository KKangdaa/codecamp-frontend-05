import * as A from './ProductCommentAnswerList.styled'

import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from './ProductCommentAnswerList.queries'
import { IAnswerInput } from './ProductCommentAnswerList.types'

export default function ProductCommentAnswerListItem(props) {
  const router = useRouter()

  const [isEdits, setIsEdits] = useState(false)
  const [contents, setContents] = useState('')

  const { data } = useQuery(FETCH_USER_LOGGED_IN)
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  )

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  const onClickUpdate = async (event) => {
    const VariablesAnswer: IAnswerInput = {}
    if (contents) VariablesAnswer.contents = contents

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
    <A.AnswerWrapper>
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
        <A.AnswerWrapper>
          <div>
            <div>└ {props.el.contents}</div>
          </div>
          <A.AnswerButton>
            <span>{data?.fetchUserLoggedIn.name}</span>
            <button id={props.el._id} onClick={props.onClickDelete}>
              삭제
            </button>
            <button onClick={onClickQuestionEdit}>수정</button>
          </A.AnswerButton>
        </A.AnswerWrapper>
      )}
    </A.AnswerWrapper>
  )
}
