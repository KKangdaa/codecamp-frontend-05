/* eslint-disable react/react-in-jsx-scope */
import { getMyDate } from '../../../../commons/libraries/utils-time'
import * as A from './BoardCommentList.styled'
import { IBoardCommentListUIProps } from './BoardCommentList.types'
import { Rate } from 'antd'

export default function BoardCommentListUI (props:IBoardCommentListUIProps) {
  return (
  <>
    <props.Head>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
    </props.Head>
    {props.fetchCommentData?.fetchBoardComments.map((el:any) => (
      <A.CommentFetchBoard key={el._id}>
        <A.CommentWriter>
          <A.CommentProfileImg src="/profile.jpg"/>
          <A.span>{el.writer}</A.span>
          <Rate allowHalf value={el.rating} disabled />
        </A.CommentWriter>
        <A.CommentContents>{el.contents}</A.CommentContents>
        <A.CommentDate>{getMyDate(el.createdAt)}</A.CommentDate>
        <A.CommentEditButton className="far fa-edit"></A.CommentEditButton>
        <A.CommentDeleteButton id={el._id} onClick={props.onClickDeleteComment}><i className="fas fa-times"></i></A.CommentDeleteButton>
      </A.CommentFetchBoard>
    ))}
  </>
  )
}
