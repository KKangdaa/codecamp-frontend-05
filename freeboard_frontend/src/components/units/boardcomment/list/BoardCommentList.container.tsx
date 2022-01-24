import Head from 'next/head'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_COMMENT, DELETE_COMMENT } from './BoardCommentList.queries'

export default function BoardCommentList () {
  const router = useRouter()

  const [deleteBoardComment] = useMutation(DELETE_COMMENT)

  const { data: fetchCommentData } = useQuery(FETCH_COMMENT, {
    variables: { boardId: router.query.idpage }
  })

  const onClickDeleteComment = async (event:any) => {
    const commentPassword = prompt('비밀번호 입력')
    try {
      await deleteBoardComment({
        variables: { password: commentPassword, boardCommentId: event.target.id },
        refetchQueries: [{ query: FETCH_COMMENT, variables: { boardId: router.query.idpage } }]
      })
      console.log()
      alert('삭제되었습니다')
    } catch (error) {
      alert('비밀번호가 일치하지 않습니다')
      console.log(error.message)
    }
  }

  return (
    <BoardCommentListUI
      Head={Head}
      fetchCommentData={fetchCommentData}
      onClickDeleteComment={onClickDeleteComment}
    />
  )
}
