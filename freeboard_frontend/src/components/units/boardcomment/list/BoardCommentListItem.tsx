import { getMyDateTime } from '../../../../commons/libraries/utils'
import * as A from './BoardCommentList.styles'
import * as S from '../write/BoardCommentWrite.styles'
import { ICommentInput } from './BoardCommentList.types'
import { Rate, Modal } from 'antd'
import { MouseEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { FETCH_COMMENT, UPDATE_COMMENT } from './BoardCommentList.queries'

export default function BoardCommentListItemUI(props) {
  const router = useRouter()

  const [updateBoardComment] = useMutation(UPDATE_COMMENT)

  const [editStar, setEditStar] = useState(props.el.rating)
  const [editContentsText, setEditContentsText] = useState('')
  const [editPasswordText, setEditPasswordText] = useState('')
  const [isEdits, setIsEdits] = useState(false)

  const onChangePassword = (event) => {
    setEditPasswordText(event.target.value)
  }
  const onChangeContents = (event) => {
    setEditContentsText(event.target.value)
  }
  const editStarButton = (value) => {
    setEditStar(value)
  }

  const VariablesComment: ICommentInput = {}

  if (editContentsText) VariablesComment.contents = editContentsText
  if (editStar) VariablesComment.rating = editStar

  const updateCommentButton = async (event: MouseEvent<HTMLInputElement>) => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: event.currentTarget.id,
          password: editPasswordText,
          updateBoardCommentInput: VariablesComment,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: String(router.query.boardid), page: 1 },
          },
        ],
      })
      setIsEdits(false)
      Modal.success({
        content: '댓글 수정이 완료되었습니다.',
      })
    } catch (error) {
      Modal.error({
        content: error.message,
      })
    }
  }

  const onClickCommentEdit = () => {
    setIsEdits(true)
  }

  const onClickCancel = () => {
    setIsEdits(false)
  }

  return (
    <div>
      {isEdits ? (
        <div>
          <S.CommentWrite>
            <S.CommentProfileImg src="/profile.jpg" />
            <A.InputWriter>{props.el.writer}</A.InputWriter>
            <S.span>비밀번호</S.span>
            <S.CommentPassword type="password" onChange={onChangePassword} />
            <Rate
              allowHalf
              defaultValue={props.el.rating}
              onChange={editStarButton}
            />
          </S.CommentWrite>

          <S.CommentBox>
            <S.CommentText
              onChange={onChangeContents}
              defaultValue={props.el.contents}
            />
            <S.ButtonGroup>
              <S.CommentEditButton
                onClick={updateCommentButton}
                id={props.el._id}
                style={{
                  cursor: 'pointer',
                }}
                commentButtonActive={props.commentButtonAc}
              >
                등록
              </S.CommentEditButton>
              <S.CommentEditButton
                onClick={onClickCancel}
                style={{
                  background: '#851c1c',
                  color: 'white',
                  cursor: 'pointer',
                }}
                commentButtonActive={props.commentButtonAc}
              >
                취소
              </S.CommentEditButton>
            </S.ButtonGroup>
          </S.CommentBox>
        </div>
      ) : (
        <div>
          <A.CommentWriter>
            <A.CommentProfileImg src="/profile.jpg" />
            <A.InputWriter>{props.el.writer}</A.InputWriter>
            <Rate allowHalf value={props.el.rating} disabled />
          </A.CommentWriter>
          <A.CommentContents>{props.el.contents}</A.CommentContents>
          <A.CommentDate>{getMyDateTime(props.el.createdAt)}</A.CommentDate>
          <A.NoneBoxButton>
            <A.CommentEditButton
              className="far fa-edit"
              onClick={onClickCommentEdit}
            ></A.CommentEditButton>
            <A.CommentDeleteButton id={props.el._id} onClick={props.showModal}>
              <i className="fas fa-times"></i>
            </A.CommentDeleteButton>
          </A.NoneBoxButton>
        </div>
      )}
    </div>
  )
}
