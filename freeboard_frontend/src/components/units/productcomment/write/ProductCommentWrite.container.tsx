import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
    }
  }
`
const FETCH_USED_ITEM_QUESTION = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
    }
  }
`

export default function ProductCommentWrite() {
  const router = useRouter()
  const [contents, setContents] = useState('')

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION)

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const onClickCreateComment = async () => {
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
      setContents('')

      if (contents) {
        alert('성공')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      {/* <div></div> */}
      내용 : <input type="text" onChange={onChangeContents} value={contents} />
      <button onClick={onClickCreateComment}>등록</button>
    </div>
  )
}
