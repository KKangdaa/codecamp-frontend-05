import Head from 'next/head'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_COMMENT, DELETE_COMMENT } from './BoardCommentList.queries'
import { ChangeEvent, MouseEvent, useState } from 'react'

export default function BoardCommentList() {
  const router = useRouter()

  const [deleteBoardComment] = useMutation(DELETE_COMMENT)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: fetchCommentData, fetchMore } = useQuery(FETCH_COMMENT, {
    variables: { boardId: String(router.query.boardid), page: 1 },
  })

  const [idText, setIdText] = useState('')
  const [passwordText, setPasswordText] = useState('')

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setIdText(event.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordText(event.target.value)
  }

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev)
  }

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIdText(event.currentTarget.id)
    setIsModalVisible(true)
  }

  const onLoadMore = () => {
    if (!fetchCommentData) return
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
            variables: { boardId: router.query.boardid, page: 1 },
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

  return (
    <BoardCommentListUI
      Head={Head}
      fetchCommentData={fetchCommentData}
      onClickDeleteComment={onClickDeleteComment}
      isModalVisible={isModalVisible}
      showModal={showModal}
      onToggleModal={onToggleModal}
      onLoadMore={onLoadMore}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      passwordText={passwordText}
    />
  )
}
