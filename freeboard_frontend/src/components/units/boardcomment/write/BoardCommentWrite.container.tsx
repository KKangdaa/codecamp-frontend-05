import { useMutation/* , useQuery */ } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_COMMENT, FETCH_COMMENT } from './BoardCommentWrite.queries'

export default function BoardCommentWrite (p) {
  const router = useRouter()

  const [createBoardComment] = useMutation(CREATE_COMMENT)

  const [commentWriter, setCommentWriter] = useState('')
  const [commentPassword, setCommentPassword] = useState('')
  const [commentContents, setCommentContents] = useState('')
  const [commentButtonAc, setCommentButtonAc] = useState(false)

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
      // window.location.reload()
      console.log(result.data.createBoardComment._id)
    } catch (error) {
      console.log(error.message)
    }

    if (commentWriter && commentPassword && commentContents) {
      alert('등록되었습니다')
    }
  }

  return (
    <BoardCommentWriteUI
      // fetchCommentData={fetchCommentData}
      commentWriterBox={commentWriterBox}
      commentPasswordBox={commentPasswordBox}
      commentContentsBox={commentContentsBox}
      CreateCommentButton={CreateCommentButton}
      commentContents={commentContents}
      commentButtonAc={commentButtonAc}

      // onClickDeleteComment={onClickDeleteComment}
    />
  )
}
