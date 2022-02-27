import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD } from './BoardDetail.queries'
import { useState } from 'react'

export default function BoardDetail() {
  const router = useRouter()

  const [likeButton] = useMutation(LIKE_BOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD)

  const { data: fetchBoardData } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardid,
    },
  })

  const onClickLike = () => {
    likeButton({
      variables: { boardId: router.query.boardid },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardid },
        },
      ],
    })
  }

  const onClickListPage = () => {
    router.push('/boards')
  }

  const onClickEditPage = () => {
    router.push(`/boards/${router.query.boardid}/edit`)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleButton = () => {
    setIsModalVisible((prev) => !prev)
  }

  const onClickDelete = () => {
    setIsModalVisible((prev) => !prev)
    deleteBoard({
      variables: { boardId: router.query.boardid },
      refetchQueries: [{ query: FETCH_BOARD }],
    })
    router.push('/boards')
  }

  // console.log(router.query.boardid)
  return (
    <BoardDetailUI
      fetchBoardData={fetchBoardData}
      onClickEditPage={onClickEditPage}
      onClickDelete={onClickDelete}
      onClickListPage={onClickListPage}
      onClickLike={onClickLike}
      isModalVisible={isModalVisible}
      toggleButton={toggleButton}
    />
  )
}
