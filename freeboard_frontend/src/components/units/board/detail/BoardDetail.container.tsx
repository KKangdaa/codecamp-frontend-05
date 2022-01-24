import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries'

export default function BoardDetail () {
  const router = useRouter()

  const [likeButton] = useMutation(LIKE_BOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD)

  const { data: fetchBoardData } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.idpage
    }
  })

  const onClickLike = () => {
    likeButton({
      variables: { boardId: router.query.idpage },
      refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: router.query.idpage } }]
    })
  }

  const onClickListPage = () => {
    router.push('/boards')
  }
  const onClickEditPage = () => {
    router.push(`/boards/${router.query.idpage}/edit`)
  }
  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.idpage },
      refetchQueries: [{ query: FETCH_BOARD }]
    })
    alert('삭제되었습니다')
    router.push('/boards')
  }

  // console.log(router.query.idpage)
  return (
    <BoardDetailUI
      fetchBoardData={fetchBoardData}
      onClickEditPage={onClickEditPage}
      onClickDelete={onClickDelete}
      onClickListPage={onClickListPage}
      onClickLike={onClickLike}
    />
  )
}
