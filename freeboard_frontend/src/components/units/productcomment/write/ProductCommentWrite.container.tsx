import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProductCommentWriteUI from './ProductCommentWrite.presenter'
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEM_QUESTION,
} from './ProductCommentWrite.queries'

export default function ProductCommentWrite() {
  const router = useRouter()
  const [contents, setContents] = useState('')

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION)
  const { data } = useQuery(FETCH_USER_LOGGED_IN)

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const onClickCreateComment = async () => {
    if (!contents) return
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.productid,
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: { useditemId: router.query.productid, page: 1 },
          },
        ],
      })
      Modal.success({
        content: '댓글 등록이 완료되었습니다.',
      })
      setContents('')
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }

  return (
    <>
      <ProductCommentWriteUI
        data={data}
        onChangeContents={onChangeContents}
        contents={contents}
        onClickCreateComment={onClickCreateComment}
      />
    </>
  )
}
