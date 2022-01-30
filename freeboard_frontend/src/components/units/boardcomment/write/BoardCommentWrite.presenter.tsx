/* eslint-disable react/react-in-jsx-scope */
import * as A from './BoardCommentWrite.styled'
import { IBoardCommentWriteUIProps } from './BoardCommentWrite.types'
import { Rate } from 'antd'

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  // console.log(props.handleChange)
  return (
    <>
      <A.MainComment>
        <A.CommentWrite>
          <A.CommentProfileImg src="/profile.jpg" />
          <A.span>작성자</A.span>
          <A.CommentName type="text" onChange={props.commentWriterBox} />
          <A.span>비밀번호</A.span>
          <A.CommentPassword
            type="password"
            onChange={props.commentPasswordBox}
          />
          <Rate
            allowHalf
            defaultValue={props.star}
            onChange={props.handleChange}
          />
        </A.CommentWrite>
        <A.CommentBox>
          <A.CommentText onChange={props.commentContentsBox} />
          {/* <span>{props.commentContents.length}</span> */}
          <A.CommentCreateButton
            onClick={props.CreateCommentButton}
            commentButtonActive={props.commentButtonAc}
          >
            등록
          </A.CommentCreateButton>
        </A.CommentBox>
      </A.MainComment>
    </>
  )
}
