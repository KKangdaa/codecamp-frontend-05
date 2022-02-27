import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_COMMENT, FETCH_COMMENT } from './BoardCommentWrite.queries'
import { Modal } from 'antd'

export default function BoardCommentWrite() {
  const router = useRouter()

  const [createBoardComment] = useMutation(CREATE_COMMENT)

  const [commentWriter, setCommentWriter] = useState('')
  const [commentPassword, setCommentPassword] = useState('')
  const [commentContents, setCommentContents] = useState('')
  const [commentButtonAc, setCommentButtonAc] = useState(false)

  const [star, setStar] = useState(2.5)

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

  const successModal = () => {
    Modal.success({
      content: '게시물이 등록되었습니다.',
      onOk() {
        // window.location.reload()
      },
    })
  }

  const CreateCommentButton = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: star,
          },
          boardId: router.query.boardid,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.boardid, page: 1 },
          },
        ],
      })

      setCommentWriter('')
      setCommentPassword('')
      setCommentContents('')
      setStar(2.5)

      if (commentWriter && commentPassword && commentContents) {
        successModal()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleChange = (value: any) => {
    setStar(value)
  }

  return (
    <BoardCommentWriteUI
      commentWriterBox={commentWriterBox}
      commentPasswordBox={commentPasswordBox}
      commentContentsBox={commentContentsBox}
      CreateCommentButton={CreateCommentButton}
      commentWriter={commentWriter}
      commentPassword={commentPassword}
      commentContents={commentContents}
      commentButtonAc={commentButtonAc}
      star={star}
      handleChange={handleChange}
    />
  )
}
