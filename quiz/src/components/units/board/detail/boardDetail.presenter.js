import * as A from './boardDetail.styled';
import { getMyDate } from '../../../../commons/libraries/utils-time';

export default function BoardDetailUI(props) {

  return(
    <A.Wrapper>
      <A.Main>
        <A.Topper>
          <A.Title>{props.data?.fetchBoard?.title}</A.Title>

          <A.Profile>
            <A.ProfileImg src="/profile.jpg" />

            <A.ProfileDetail>{props.data?.fetchBoard?.Detail}</A.ProfileDetail>

            <A.ProfileDate>{getMyDate(props.data?.fetchBoard?.createdAt)}</A.ProfileDate>
          </A.Profile>
        </A.Topper>

        <A.TextBox>{props.data?.fetchBoard?.contents}</A.TextBox>

      </A.Main>
      <A.MainButton>
        <A.CreateButton onClick={props.onClickEditPage}>수정</A.CreateButton>
        <A.CreateButton /* onClick={props.onClickDelete} */>삭제</A.CreateButton>
      </A.MainButton>
    </A.Wrapper>
  )
}