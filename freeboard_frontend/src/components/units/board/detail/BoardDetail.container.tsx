import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD, FETCH_BOARD, LIKE_BOARD, CREATE_COMMENT, FETCH_COMMENT, DELETE_COMMENT } from './BoardDetail.queries'

export default function BoardDetail () {
  const router = useRouter()

  const [likeButton] = useMutation(LIKE_BOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const [createBoardComment] = useMutation(CREATE_COMMENT)
  const [deleteBoardComment] = useMutation(DELETE_COMMENT)

  // const [fetchCommentWriter, setFetchCommentWriter] = useState('')
  // const [fetchCommentContents, setFetchCommentContents] = useState('')

  const [commentWriter, setCommentWriter] = useState('')
  const [commentPassword, setCommentPassword] = useState('')
  const [commentContents, setCommentContents] = useState('')
  const [commentButtonAc, setCommentButtonAc] = useState(false)

  const { data: fetchBoardData } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.idpage
    }
  })

  const onClickLike = () => {
    likeButton({
      variables: { boardId: router.query.idpage },
      refetchQueries: [{ query: FETCH_BOARD }]
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

  /* comment */
  const commentWriterBox = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(event.target.value)
    if (event.target.value && commentPassword && commentContents) {
      setCommentButtonAc(true)
    } else {
      setCommentButtonAc(false)
    }
  }
  const commentPasswordBox = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value)
    if (commentWriter && event.target.value && commentContents) {
      setCommentButtonAc(true)
    } else {
      setCommentButtonAc(false)
    }
  }
  const commentContentsBox = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value)
    if (commentWriter && commentPassword && event.target.value) {
      setCommentButtonAc(true)
    } else {
      setCommentButtonAc(false)
    }
  }

  const CreateCommentButton = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: 0
          },
          boardId: router.query.idpage
        },
        refetchQueries: [{ query: FETCH_COMMENT, variables: { boardId: router.query.idpage } }]
      })
      // console.log(router.query)
      console.log(result.data.createBoardComment._id)
    } catch (error) {
      console.log(error.message)
    }

    if (commentWriter && commentPassword && commentContents) {
      alert('등록되었습니다')
    }
  }

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

  // console.log(router.query.idpage)
  return (
    <BoardDetailUI
      fetchBoardData={fetchBoardData}
      onClickEditPage={onClickEditPage}
      onClickDelete={onClickDelete}
      onClickListPage={onClickListPage}
      onClickLike={onClickLike}

      fetchCommentData={fetchCommentData}
      commentWriterBox={commentWriterBox}
      commentPasswordBox={commentPasswordBox}
      commentContentsBox={commentContentsBox}
      CreateCommentButton={CreateCommentButton}
      commentButtonAc={commentButtonAc}

      onClickDeleteComment={onClickDeleteComment}
    />
  )
}
