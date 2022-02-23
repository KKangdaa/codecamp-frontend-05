import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from './ProductCommentList.queries'
import Answer from '../../productcommentanswer/detail/ProductCommentDetail.container'
import ProductCommentListItem from './ProductCommentList.containerItem'

export default function ProductCommentList() {
  const router = useRouter()

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION)
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION, {
    variables: { useditemId: router.query.productid, page: 1 },
  })

  const onClickDelete = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: { useditemId: router.query.productid, page: 1 },
          },
        ],
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      {data?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <ProductCommentListItem el={el} onClickDelete={onClickDelete} />
          <p>--</p>
          <Answer useditemQuestionId={el._id} />
        </div>
      ))}
    </>
  )
}
