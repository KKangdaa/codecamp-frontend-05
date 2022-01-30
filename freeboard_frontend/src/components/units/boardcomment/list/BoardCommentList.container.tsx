import Head from 'next/head'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_COMMENT, DELETE_COMMENT } from './BoardCommentList.queries'
import { Modal } from 'antd'
import { ChangeEvent, MouseEvent, useState } from 'react'

export default function BoardCommentList() {
  const router = useRouter()

  const [deleteBoardComment] = useMutation(DELETE_COMMENT)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: fetchCommentData, fetchMore } = useQuery(FETCH_COMMENT, {
    variables: { boardId: String(router.query.idpage), page: 1 },
  })

  const [passwordText, setPasswordText] = useState('')
  const [idText, setIdText] = useState('')

  const passwordTextBox = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordText(event.target.value)
  }

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev)
  }

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIdText(event.currentTarget.id)
    setIsModalVisible(true)
  }

  const onClickDeleteComment = async () => {
    onToggleModal()
    try {
      await deleteBoardComment({
        variables: {
          password: passwordText,
          boardCommentId: idText,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.idpage, page: 1 },
          },
        ],
      })

      Modal.success({
        content: '게시물이 삭제되었습니다.',
      })
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }

  const onLoadMore = () => {
    // if (!fetchCommentData) return
    fetchMore({
      variables: {
        page: Math.ceil(fetchCommentData?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        }
      },
    })
  }

  return (
    <BoardCommentListUI
      Head={Head}
      fetchCommentData={fetchCommentData}
      onClickDeleteComment={onClickDeleteComment}
      isModalVisible={isModalVisible}
      showModal={showModal}
      passwordTextBox={passwordTextBox}
      onToggleModal={onToggleModal}
      onLoadMore={onLoadMore}
    />
  )
}
