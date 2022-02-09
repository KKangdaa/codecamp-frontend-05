import { getMyDate } from '../../../../commons/libraries/utils-time'
import { IBoardDetailUIProps } from './BoardDetail.types'
import * as A from './BoardDetail.styled'
import BoardCommentWrite from '../../boardcomment/write/BoardCommentWrite.container'
import BoardCommentList from '../../boardcomment/list/BoardCommentList.container'
import ReactPlayer from 'react-player'
import { Modal } from 'antd'

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    arrows: false,
  }
  return (
    <A.Wrapper>
      <A.WrapperMain>
        <A.Main>
          <A.Topper>
            <A.Title>{props.fetchBoardData?.fetchBoard?.title}</A.Title>

            <A.Profile>
              <A.ProfileImg src="/profile.jpg" />

              <A.ProfileDetail>
                {props.fetchBoardData?.fetchBoard?.writer}
              </A.ProfileDetail>

              <A.ProfileDate>
                {getMyDate(props.fetchBoardData?.fetchBoard?.createdAt)}
              </A.ProfileDate>
            </A.Profile>
          </A.Topper>
          <div>
            {props.fetchBoardData?.fetchBoard?.boardAddress?.zipcode}
            {props.fetchBoardData?.fetchBoard?.boardAddress?.address}
            {props.fetchBoardData?.fetchBoard?.boardAddress?.addressDetail}
          </div>
          <A.TextBox>{props.fetchBoardData?.fetchBoard?.contents}</A.TextBox>
          <A.ImgBox {...settings}>
            {props.fetchBoardData?.fetchBoard?.images.map((el, index) => (
              <A.SliderGroup key={el._id}>
                <img
                  src={`https://storage.googleapis.com/${props.fetchBoardData?.fetchBoard?.images[index]}`}
                />
              </A.SliderGroup>
            ))}
          </A.ImgBox>
          {props.fetchBoardData?.fetchBoard?.youtubeUrl && (
            <ReactPlayer
              url={`${props.fetchBoardData?.fetchBoard?.youtubeUrl}`}
              controls
            />
          )}
          <A.BUTTON onClick={props.onClickLike}>
            <A.Heart className="heart" viewBox="0 0 32 29.6">
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </A.Heart>
          </A.BUTTON>
          <div>{props.fetchBoardData?.fetchBoard?.likeCount}</div>
        </A.Main>

        <A.MainButton>
          <A.ClickButton onClick={props.toggleButton}>삭제</A.ClickButton>
          {props.isModalVisible && (
            <Modal
              visible={true}
              onOk={props.onClickDelete}
              onCancel={props.toggleButton}
            >
              삭제하시겠습니까?
            </Modal>
          )}
          <A.ClickButton onClick={props.onClickEditPage}>수정</A.ClickButton>
          <A.ClickButton onClick={props.onClickListPage}>목록</A.ClickButton>
        </A.MainButton>
        <BoardCommentWrite />
        <BoardCommentList />
      </A.WrapperMain>
    </A.Wrapper>
  )
}
