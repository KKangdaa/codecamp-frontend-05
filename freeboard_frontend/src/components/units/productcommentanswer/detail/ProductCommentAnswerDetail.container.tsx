import { gql, useMutation, useQuery } from '@apollo/client'
import ProductCommentAnswerList from '../list/ProductCommentAnswerList.container'
import { DELETE_USED_ITEM_QUESTION_ANSWER } from '../list/ProductCommentAnswerList.queries'
import ProductCommentAnswerWrite from '../write/ProductCommentAnswerWrite.container'

const FETCH_USED_ITEM_QUESTION_ANSWER = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
    }
  }
`

export default function Answer(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWER, {
    variables: {
      useditemQuestionId: props.useditemQuestionId,
    },
  })
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  )

  const onClickDelete = async (event) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              useditemQuestionId: props.useditemQuestionId,
              page: 1,
            },
          },
        ],
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      {props.isAnswer ? (
        <div style={{ width: '90%', margin: 'auto' }}>
          {data?.fetchUseditemQuestionAnswers.map((el) => (
            <div key={el._id}>
              <ProductCommentAnswerList el={el} onClickDelete={onClickDelete} />
            </div>
          ))}
          <ProductCommentAnswerWrite
            useditemQuestionId={props.useditemQuestionId}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
