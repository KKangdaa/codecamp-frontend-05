import { getMyDate } from '../../../../commons/libraries/utils-time'
import { IBoardDetailUIProps } from './BoardDetail.types'
import * as A from './BoardDetail.styled'

export default function BoardDetailUI (props: IBoardDetailUIProps) {
  return (
    <A.Wrapper>
      <A.Main>
        <A.Topper>
          <A.Title>{props.fetchBoardData?.fetchBoard?.title}</A.Title>

          <A.Profile>
            <A.ProfileImg src='/profile.jpg' />

            <A.ProfileDetail>{props.fetchBoardData?.fetchBoard?.writer}</A.ProfileDetail>

            <A.ProfileDate>{getMyDate(props.fetchBoardData?.fetchBoard?.createdAt)}</A.ProfileDate>
          </A.Profile>
        </A.Topper>

        <A.TextBox>{props.fetchBoardData?.fetchBoard?.contents}</A.TextBox>
        <A.BUTTON onClick={props.onClickLike}>
          <A.Heart className="heart" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </A.Heart>
        </A.BUTTON>
        <div>{props.fetchBoardData?.fetchBoard?.likeCount}</div>
      </A.Main>

      <A.MainButton>
        <A.ClickButton onClick={props.onClickDelete}>삭제</A.ClickButton>
        <A.ClickButton onClick={props.onClickEditPage}>수정</A.ClickButton>
        <A.ClickButton onClick={props.onClickListPage}>목록</A.ClickButton>
      </A.MainButton>

      <A.MainComment>
        <A.CommentWrite>
          <A.CommentProfileImg src="/profile.jpg"/>
          <A.span>작성자</A.span><A.CommentName type='text' onChange={props.commentWriterBox} />
          <A.span>비밀번호</A.span><A.CommentPassword type='password' onChange={props.commentPasswordBox} />
        </A.CommentWrite>
        <A.CommentBox>
          <A.CommentText onChange={props.commentContentsBox} />
          <A.CommentCreateButton
            onClick={props.CreateCommentButton}
            commentButtonActive={props.commentButtonAc}
          >
            등록
          </A.CommentCreateButton>
        </A.CommentBox>
      </A.MainComment>
      {props.fetchCommentData?.fetchBoardComments.map((el:any) => (
        <A.CommentFetchBoard key={el._id}>
          <A.CommentWriter>
            <A.CommentProfileImg src="/profile.jpg"/>
            <A.span>{el.writer}</A.span>
          </A.CommentWriter>
          <A.CommentContents>{el.contents}</A.CommentContents>
          <A.CommentDate>{getMyDate(el.createdAt)}</A.CommentDate>
          <A.CommentDeletButton id={el._id} onClick={props.onClickDeleteComment}>x</A.CommentDeletButton>
        </A.CommentFetchBoard>
      ))}
    </A.Wrapper>
  )
}
