import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProductCommentAnserWriteUI from './ProductCommentAnswerWrite.presenter'
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWER,
} from './ProductCommentAnswerWrite.queries'

export default function ProductCommentAnswerWrite(props) {
  const router = useRouter()

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  )

  const [contents, setContents] = useState('')

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const onClickCreateComment = async () => {
    console.log(router)
    console.log(router.query.productid)

    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.useditemQuestionId,
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              useditemQuestionId: props.useditemQuestionId,
            },
          },
        ],
      })

      setContents('')

      if (contents) {
        Modal.success({
          content: '댓글이 등록되었습니다.',
        })
      }
      setContents('')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ProductCommentAnserWriteUI
      contents={contents}
      onChangeContents={onChangeContents}
      onClickCreateComment={onClickCreateComment}
    />
  )
}
